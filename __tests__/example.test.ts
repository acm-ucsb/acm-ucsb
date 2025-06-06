import "@testing-library/jest-dom";
import { expect, test } from "@jest/globals";

// Add a .skip to skip tests

// Simple test example
test.skip("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

// Testing coding logic
import formatDateTime from "@/util/formatDateTime";
test.skip("Formatting datetime", () => {
  expect(formatDateTime("2025/01/01 08:00:00", "HH:mm", "")).toBe("08:00");
});

// Skipping tests
test.skip("Skipped test", () => {
  expect(1).toBe(2);
});
