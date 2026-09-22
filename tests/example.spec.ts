import { test, expect } from "@playwright/test";
import { logger } from "../helpers/logger";

test("Sample test", async ({ page }) => {
  logger.info("Sample test started");
  logger.warn("Sample test warning");
  logger.error("Sample test error");
});
