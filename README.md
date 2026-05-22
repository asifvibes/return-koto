# Return Koto?

A simple SIP and Lumpsum return calculator for Bangladesh mutual funds.

**Live:** https://returnkoto.com

## What it does

Enter your investment amount, choose Monthly SIP or Lumpsum, and pick a duration (1–30 years). The calculator projects future value across five Bangladeshi mutual funds and ranks them by return, highlighting the best performer.

## Funds included

| Fund | AMC | Category | 1-yr Return |
|------|-----|----------|-------------|
| EDGE AMC Growth Fund | EDGE AMC | Growth (Equity) | 26.39% |
| VIPB Fixed Income Fund | VIPB Asset Management | Fixed Income | 21.80% |
| UCB Income Plus Fund | UCB Asset Management | Fixed Income | 19.00% |
| Shanta First Income Unit Fund | Shanta Asset Management | Equity | 8.93% |
| IDLC Balanced Fund | IDLC Asset Management | Balanced | 8.39% |

Historical 1-year returns as of May 2026.

## Formulas

**Monthly SIP**

```
FV = P × ((1 + r)^n − 1) / r × (1 + r)
```

where `P` = monthly investment, `r` = annual rate / 12, `n` = total months.

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
