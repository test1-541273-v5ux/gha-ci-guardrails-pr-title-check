#!/usr/bin/env bash
set -euo pipefail

archive="ci-guardrails-pr-title-check-0.1.0.tgz"
rm -f "$archive"
tar -czf "$archive" action.yml dist src README.md LICENSE package.json tsconfig.json
echo "Created package: $archive"
