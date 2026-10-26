# Tenant application lifecycle

```mermaid
flowchart TD
  A[Onboarding request<br/>approved] --> B[onboarding_fn_convert_to_tenant]
  B --> C{Active environment<br/>with regional capacity?}
  C -- No --> X[Conversion fails:<br/>insufficient_resources]
  C -- Yes --> D[Create tenant<br/>status: provisioning]
  D --> E[Create tenant application<br/>status: provisioning]
  E --> F[Create primary domain and contacts]
  F --> G[Create billing account if needed<br/>and subscription]
  G --> H[Create provisioning job<br/>status: queued]
  H --> I[Worker claims job<br/>status: running]
  I --> J[Run provisioning steps:<br/>allocate storage, create schema,<br/>migrate, seed roles, configure DNS/TLS]
  J --> K{All steps succeed?}
  K -- Yes --> L[Job: succeeded]
  L --> M[Application: active<br/>store db locator / schema slug]
  M --> N[Tenant: trial or active]
  N --> O[Onboarding request: completed<br/>enqueue welcome notification]
  K -- No, retries remain --> P[Retry with exponential backoff]
  P --> I
  K -- No, retries exhausted --> Q[Job: compensating]
  Q --> R[Compensation completes]
  R --> S[Job: compensated]
  S --> T[Application: failed<br/>Onboarding request: failed]

  M --> U[Suspend job succeeds]
  U --> V[Application: suspended]
  V --> W[Resume job succeeds]
  W --> M
  M --> Y[Deprovision job succeeds]
  Y --> Z[Application: deprovisioned]
```

The database guards application creation against environment-region mismatches and inactive environments. It records each status transition in `tenancy_lifecycle_event`; provisioning job outcomes are applied by `trg_job_outcome`.
