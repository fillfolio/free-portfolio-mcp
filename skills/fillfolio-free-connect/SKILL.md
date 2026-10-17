---
name: fillfolio-free-connect
description: Connect or troubleshoot Fillfolio Free Portfolio MCP when a user explicitly wants the separate free workspace with three manual assets. Does not configure paid Fillfolio integrations.
---

# Connect Fillfolio Free Portfolio

Use this package's `fillfolio-free` MCP connection at `https://free-mcp.fillfolio.com/mcp`.

If its two read tools are available, call `get_free_portfolio_summary` with `{}` to check access. Allow the host to show its normal OAuth connection prompt. Do not substitute computer use, open an unrelated Fillfolio desktop app or infer authorization from website sign-in.

If the host exposes no account tools or connection action, explain that it needs this package's MCP connection enabled. Direct the user to the host's MCP settings and [the free setup page](https://fillfolio.com/free-portfolio-mcp). Do not invent a tool, credential or authorization URL.

Users edit quantities and optional average costs on the website. Free Portfolio permits one portfolio and three distinct manual assets, with 60 data reads per minute and 1,000 per UTC day shared across its clients and website. On HTTP 429, report the reset time and wait for the user to retry; do not loop or switch clients to bypass the quota.

The AI client receives requested holdings values. Hiding amounts on the website does not hide them from the connected client. Access is read-only and separate from the user's paid Fillfolio workspace.
