# Acceptance status

Prepared on 2026-10-17. Version: 0.1.0.

| Gate | Status |
| --- | --- |
| Client manifests and three skills | Local package validator and official skill validator pass |
| Hosted implementation | Deployed through guarded web and Worker releases; 2,264 unit tests and release gates passed |
| Database limits and OAuth isolation | Synthetic tests pass; independent review corrections rechecked |
| Website | Synthetic Chrome checks pass for manual entry, three-slot cap, masking, mobile layout, quota and rollout pauses |
| Production activation | Active; separate issuer, resource and two registered clients verified |
| Cursor Desktop released version | Pending native acceptance |
| Grok Build released version | Pending native acceptance |
| Marketplace submissions | Not submitted |

This file will record tested official versions and submission receipts. A configuration example does not establish compatibility or marketplace approval. We make no changes to the existing ChatGPT or Notion packages through this repository.

Local evidence covers 47 focused tests across the isolated database/OAuth implementation, valuation, actual tool contracts, HTTP routes, host routing and redacted logging. Test credentials, account IDs, holdings and prices are synthetic. Live additive migrations and isolated backup restores passed. Owner-assisted password sign-in in a new Chrome Incognito window reached the empty free workspace without an email code or MFA. Manual-entry acceptance is in progress. Released-client compatibility remains unverified.

The release preserves existing paid client registrations and keeps the free database and OAuth namespaces separate. The signed backup capture, independent Oracle/R2 restores and full backup monitor check passed. The normal backup timer is active. These operational checks do not establish Cursor or Grok compatibility.
