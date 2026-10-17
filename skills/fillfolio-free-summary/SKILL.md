---
name: fillfolio-free-summary
description: Summarize the connected Fillfolio Free Portfolio with its native-currency totals, three-asset limit and quote-freshness warnings. Use for the separate free workspace, not paid portfolios.
---

# Free portfolio summary

Call `get_free_portfolio_summary` with `{}`. Use its returned totals and position count. Never substitute paid portfolio tools or add a portfolio/user selector.

Keep each currency total separate. Report incomplete or stale coverage beside the affected values. `generatedAt` is response time, not a quote timestamp. Latest available prices may be delayed; do not describe them as live unless the returned evidence supports that description.

Use `list_free_holdings` only when the question needs position details. An empty portfolio means no positions are saved; it does not establish the user's entire net worth. Missing cost basis or valuation is unavailable, not zero.

If authorization is missing, use the host's connection prompt when available. If the tools are absent, tell the user to enable the free MCP connection. Respect quota reset times without repeated calls.
