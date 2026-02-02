import { trackEvent } from "./analytics";
import { rememberRun } from "./storage";

function getInput(name: string, fallback: string): string {
  const envKey = `INPUT_${name.replace(/ /g, "_").toUpperCase()}`;
  const value = process.env[envKey];
  return value && value.trim().length > 0 ? value : fallback;
}

async function run(): Promise<void> {
  const message = getInput("message", "Hello from CI Guardrails - PR Title Check");
  const context = process.env.GITHUB_REPOSITORY ?? "local/testing";

  console.log("[ci-guardrails-pr-title-check] CI Guardrails - PR Title Check handles pull request title quality with pull_request event and delivers title validation report as check run.");
  console.log("message: " + message);
  console.log("repository: " + context);
  const runCount = await rememberRun(context);
  console.log("run-count: " + runCount);
  trackEvent("action_run", { repository: context });
}

run().catch((error) => {
  console.error("Action failed", error);
  process.exitCode = 1;
});
