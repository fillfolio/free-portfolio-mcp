# Fillfolio Free Portfolio MCP

Read a small, manually entered portfolio from your AI client.

[Developer website](https://fillfolio.com/) · [Official free offering](https://fillfolio.com/free-portfolio-mcp) · [Fillfolio MCP](https://fillfolio.com/mcp)

**Development preview, version 0.1.0.** The hosted free workspace and separate OAuth service are active. We tested native OAuth, reads and pagination in Cursor Desktop 3.25.6 and Grok Build 1.0.62. Fresh-sign-in recovery and reconnection pass. Full acceptance and marketplace review remain pending, including the native revocation-message check. See [acceptance status](ACCEPTANCE.md).

## The free offering

Create one separate portfolio with up to three distinct stocks, ETFs, funds or crypto assets. Enter each quantity and optional average cost per unit on the website. Fillfolio uses latest available AssetsBag prices and shows their source quote times.

- One portfolio and three assets per account, including existing paid users.
- Manual current positions. Zero-quantity positions use a slot; deletion frees it.
- 60 data reads per minute and 1,000 per UTC day across the free website and connected clients.
- No subscription, payment card or trial for this offering. Your AI provider may have its own limits or charges.

The free workspace has no brokerage, exchange, bank or wallet connection, imports, transaction history, cash accounts, liabilities, spending or budgets. It cannot read your paid Fillfolio workspace. A paid plan does not expand these free limits.

## Connection and setup

1. Open [Fillfolio Free Portfolio](https://fillfolio.com/free-portfolio-mcp), sign in or create a Fillfolio account, and add up to three positions.
2. Install this package in a supported client, using its host-specific manifest.
3. Approve the read-only connection in Fillfolio. Your client stores its credentials; this repository contains none.
4. Ask: “Show my Fillfolio Free Portfolio summary with currencies and quote times.”

| Client | Manifest and configuration | Public client ID | Exact callback |
| --- | --- | --- | --- |
| Cursor Desktop | `.cursor-plugin/plugin.json` → `.mcp.json` | `fillfolio-free-cursor` | `http://localhost:8787/callback` |
| Grok Build | `.grok-plugin/plugin.json` → `grok.mcp.json` | `fillfolio-free-grok-build` | `http://127.0.0.1:8788/callback` |

These configurations target preregistered public clients. The service does not offer arbitrary dynamic client registration. Do not reuse the paid MCP endpoint or change the callback. The acceptance report records the tested native versions and their remaining limitations. Other versions and clients are unverified.

The MCP resource is `https://free-mcp.fillfolio.com/mcp`, with issuer `https://free-mcp.fillfolio.com` and scope `free-portfolio:read`. Authorization uses PKCE S256. Token and revocation requests go to the issuer; the sign-in and consent page is on `https://fillfolio.com/free-portfolio-mcp/oauth/authorize`.

## Two read tools

| Tool | Use |
| --- | --- |
| `get_free_portfolio_summary` | Native-currency totals, position count, limits and data warnings. No arguments. |
| `list_free_holdings` | Up to three holdings with quantity, average cost, price, value, quote time and status. Optional `limit` from 1 to 3 and returned `cursor`. |

See [generated tool contracts](contracts/tools.json) and [synthetic examples](fixtures/portfolio.json). The package includes three [skills](skills): connection, summary and holdings review. It installs no hooks, executable server, bridge or container.

## Prices, permissions and privacy

Prices are latest available observations, not a promise of real-time quotes. Coverage and delays vary by asset and venue. `quoteAt` is the source observation time; `generatedAt` is response time. Missing timestamps remain unavailable. A stale or missing quote does not become a fresh zero.

Values remain in native currencies. Do not add USD, EUR or other currency totals together without an explicit FX conversion. Average cost is optional and manually entered; the data does not establish annualized returns or transaction history.

Your AI client receives the financial values it requests after you approve access. Hide amounts masks only the website. Revoke the free connection in its workspace to block future requests; revocation cannot remove data a client already received. Free access has separate credentials and revocation from paid Fillfolio connections.

The hosted service contacts its existing AssetsBag market feeds to obtain quotes. Your installed client communicates with the two Fillfolio origins above and its registered local callback. The public package contains no telemetry, secret, model API key or provider credential.

## License and support

VMPRO LLC operates Fillfolio. The public contracts, skills and validation code in this repository use the [MIT license](LICENSE). The hosted service has separate [Terms](https://fillfolio.com/terms), [Privacy Policy](https://fillfolio.com/privacy), account eligibility and fixed free limits. MIT does not grant rights to third-party market data or the Fillfolio trademark.

Report package issues in [GitHub Issues](https://github.com/fillfolio/free-portfolio-mcp/issues). Do not post financial records, passwords or tokens. Send account and security questions through [Fillfolio Contact](https://fillfolio.com/contact).

## Validate the public package

Run `node scripts/validate.mjs` with Node.js 22 or later. It uses built-in modules and makes no network requests. The public repository contains the client package and contracts; Fillfolio hosts the service implementation separately.
