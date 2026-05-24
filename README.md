# Return Koto?

A simple SIP and Lumpsum return calculator for Bangladesh mutual funds.

**Live:** https://returnkoto.com

## What it does

Enter your investment amount, choose Monthly SIP or Lumpsum, and pick a duration (1–30 years). The calculator projects future value across 15 Bangladeshi mutual funds (10 conventional and 5 Shariah-compliant) and ranks them by return, highlighting the best performer. A Shariah filter toggle lets you compare only Halal-certified funds.

## Funds included

15 funds across 10 conventional and 5 Shariah-compliant offerings.

### Conventional

| Fund | AMC | Category | 1-yr Return |
|------|-----|----------|-------------|
| EDGE AMC Growth Fund | EDGE AMC | Growth (Equity) | 13.75% |
| EDGE High Quality Income Fund | EDGE AMC | Income | 12.48% |
| UCB Income Plus Fund | UCB Asset Management | Fixed Income | 12.05% |
| MTB Unit Fund | Alliance Capital | Growth | 14.60% |
| Shanta Fixed Income Fund | Shanta Asset Management | Fixed Income | 10.37% |
| IDLC Income Fund | IDLC Asset Management | Income | 9.42% |
| IDLC Growth Fund | IDLC Asset Management | Growth | 7.64% |
| VIPB Fixed Income Fund | VIPB Asset Management | Fixed Income | 12.05% |
| Ekush Stable Return Fund | Ekush Wealth Management | Stable Return | 11.86% |
| Sandhani AML SLIC Fixed Income Fund | Sandhani AML | Fixed Income | 8.10% |

### Shariah-compliant

| Fund | AMC | Category | 1-yr Return |
|------|-----|----------|-------------|
| Capitec-IBBL Shariah Unit Fund | Capitec Asset Management | Shariah | 8.50% |
| ICB AMCL Islami Unit Fund | ICB Asset Management | Shariah | 8.80% |
| Shanta Amanah Shariah Fund | Shanta Asset Management | Shariah | 5.60% |
| IDLC AML Shariah Fund | IDLC Asset Management | Shariah | 4.49% |
| EDGE Al-Amin Shariah Consumer Fund | EDGE AMC | Shariah | 9.20% |

Historical 1-year returns as of May 24, 2026.

## Formulas

**Monthly SIP**

```
FV = P × ((1 + r)^n − 1) / r × (1 + r)
```

where `P` = monthly investment, `r` = (1 + annual rate)^(1/12) − 1  (geometric monthly conversion), `n` = total months.

**Lumpsum**

```
FV = P × (1 + r)^n
```

where `P` = principal, `r` = annual rate, `n` = years.

## Running locally

The entire app lives in `index.html`. Open it directly in any modern browser:

```bash
open index.html
```

No build step. The only external dependency is the Inter font loaded from Google Fonts.

## Tech

Single HTML file with inline CSS and vanilla JavaScript. No frameworks, no bundler.

## Disclaimer

For educational purposes only. Past returns do not guarantee future results. This is not financial advice.

## License

MIT Licensed. See LICENSE file. Attribution appreciated.
