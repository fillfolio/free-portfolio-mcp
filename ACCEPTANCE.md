# Acceptance status

Updated on 2026-10-17. Package version: 0.1.0. Marketplace submissions remain on hold.

The native tests used public package commit `4ce47c9f914d8d7136c3c5474e3518828d4e8d5f`. Later documentation updates do not change its manifests, client configuration, tools or skills.

| Gate | Status |
| --- | --- |
| Client manifests and three skills | Package validator and official skill validator pass |
| Hosted implementation | Active; guarded web/Worker release and isolated backup restores passed |
| Database limits and OAuth isolation | Synthetic tests pass; independent review corrections rechecked |
| Website | Synthetic desktop/mobile checks and live manual-entry, three-slot cap, zero quantity, deletion and masking checks pass |
| Fresh password login | Owner-assisted Incognito sign-in reached the Free workspace without an email code or MFA |
| Cursor Desktop 3.25.6 | Native OAuth, two-tool discovery, summary, holdings pages of 2 and 1 and reconnection pass |
| Grok Build 1.0.62 | Native OAuth, two-tool discovery, summary, holdings pages of 2 and 1 and reconnection pass |
| Continued access | Cursor 677.028 seconds; Grok 689.864 seconds, with no interim foreground reads or sign-in prompt |
| Revocation presentation | Cursor timed out; Grok waited for reauthorization. Neither returned an explicit native denial result. Gate remains inconclusive |
| Free sign-in recovery UI | Correction deployed after independent review and guarded checks; actual expired-session recovery flow pending |
| Existing paid MCP control | Correct nonpartial read after the Free web correction; no authorization change |
| Marketplace submissions | Cursor application prepared; Grok catalog draft validates; neither submitted |

## Evidence and limits

The native clients returned the expected three-position fixture, separate native currencies, source quote times and missing-cost warnings. Both clients reconnected through their normal OAuth flow. Cursor remained usable after the Grok-only access change. The tests used synthetic quantities and actual cached market observations. Quote coverage and freshness vary; response time does not establish quote freshness.

The continued-access checks establish access over those intervals. They do not establish observed token rotation or credential persistence guarantees. An earlier Cursor observation exceeded the intended timing window and remains separate from the later pass.

The local HTTP integration tests reject revoked credentials with an explicit authentication challenge. Read-only origin status counts include 401 responses in both recorded native revocation windows, but those aggregates identify no client and supply temporal correlation only. We do not count them as an explicit native denial pass. The tests changed only the separate Free grants and preserved saved positions. A Notion native control is unavailable in the test host.

The latest Free web correction passed 2,265 unit tests, typecheck, lint, production builds, startup checks and the guarded live release. A protected-nginx checksum precondition stopped two earlier attempts before live swap; their receipts are preserved. The reviewed correction uses a bounded checksum reader and preserves file permissions and contents. Ten new and fourteen existing synthetic release-guard tests pass. These operational checks do not clear the remaining native and rendered-UI gates.

The public package contains no credentials, account identifiers, private diagnostics or financial payloads. The release preserves paid client registrations and separate Free database/OAuth namespaces. The signed backup capture, independent Oracle/R2 restores and full backup monitor check passed; the normal backup timer is active. This repository changes neither the existing ChatGPT nor Notion package. Marketplace listing approval remains unverified.
