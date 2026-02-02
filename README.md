# CI Guardrails - PR Title Check

CI Guardrails - PR Title Check handles pull request title quality with pull_request event and delivers title validation report as check run.

## Inputs

- `message` (optional): Message printed by the action.

## Usage

```yaml
name: ci-guardrails-pr-title-check
on:
  workflow_dispatch:

jobs:
  run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: YourCompany/ci-guardrails-pr-title-check@v0.1.0
        with:
          message: "Hello from CI Guardrails - PR Title Check"
```

## Development

- `pnpm build` to compile TypeScript sources
- `pnpm test` to run unit tests


## Analytics Events Module

- Includes `src/analytics.ts` with an opt-in event emitter stub.
- Keep analytics disabled by default unless users explicitly opt in.

## Storage Module

- Includes `src/storage.ts` for lightweight state persistence.
- Example usage is wired into `src/index.ts` run counters.