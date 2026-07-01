/* ReturnKoto beta notice — dismissible top banner + tappable BETA badge.
   Shared by every page. Edit the copy here to update it site-wide. */
(function(){
  if(window.__rkBeta) return; window.__rkBeta=1;
  var FORM='https://docs.google.com/forms/d/e/1FAIpQLSePyn2S-1ANxmJM2viqSsVn5LJzJMk7k1IGmJsfd8Ul3KB4Ig/viewform';
  var MSG='<strong>BETA &middot; Work in progress.</strong> Data is still being validated, so figures may change. Treat results as a guide, not a sole basis for decisions while the BETA badge is shown. <a class="rk-bnr-link" href="'+FORM+'" target="_blank" rel="noopener">Spot something off? Report a data issue &rarr;</a>';
  var css='.rk-bnr{position:relative;background:#FFF4E5;border-bottom:1px solid #F1D6A0;color:#7a5b12;font-size:13px;line-height:1.5;padding:9px 44px 9px 16px;text-align:center}'
    +'.rk-bnr strong{font-weight:800}'
    +'.rk-bnr-link{color:inherit;font-weight:700;text-decoration:underline;text-underline-offset:2px;white-space:nowrap}'
    +'.rk-bnr-link:hover{opacity:.75}'
    +'.rk-bnr .rk-bnr-x{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:0;font-size:20px;line-height:1;cursor:pointer;color:inherit;opacity:.6;padding:2px 9px;border-radius:6px}'
    +'.rk-bnr .rk-bnr-x:hover{opacity:1;background:rgba(0,0,0,.06)}'
    +'[data-theme="dark"] .rk-bnr{background:#2A2416;border-bottom-color:#5A4A1E;color:#E4D3A0}'
    +'[data-theme="dark"] .rk-bnr .rk-bnr-x:hover{background:rgba(255,255,255,.12)}'
    +'.rk-beta{cursor:pointer}'
    +'@media(max-width:560px){.rk-bnr{font-size:12px;padding:8px 40px 8px 13px}}';
  var st=document.createElement('style'); st.textContent=css; (document.head||document.documentElement).appendChild(st);
  function show(){
    if(document.querySelector('.rk-bnr')) return;
    var d=document.createElement('div'); d.className='rk-bnr'; d.setAttribute('role','note');
    d.innerHTML=MSG+'<button class="rk-bnr-x" aria-label="Dismiss notice" title="Dismiss">×</button>';
    document.body.insertBefore(d, document.body.firstChild);
    d.querySelector('.rk-bnr-x').addEventListener('click',function(){ d.remove(); try{localStorage.setItem('rk_beta_seen','1');}catch(e){} });
  }
  function init(){
    var seen; try{ seen=localStorage.getItem('rk_beta_seen'); }catch(e){ seen=null; }
    if(seen!=='1') show();
    // Tapping the BETA badge always reopens the notice (and never navigates).
    document.addEventListener('click',function(e){
      var b=e.target && e.target.closest && e.target.closest('.rk-beta');
      if(!b) return;
      e.preventDefault(); e.stopPropagation();
      show();
      try{ window.scrollTo({top:0,behavior:'smooth'}); }catch(_){ window.scrollTo(0,0); }
    }, true);
  }
  if(document.body) init(); else document.addEventListener('DOMContentLoaded', init);
})();
