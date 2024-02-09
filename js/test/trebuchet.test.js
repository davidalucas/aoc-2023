import { test, expect } from "vitest";
import { calibrate, enhancedCal } from "../src/trebuchet";
import { createReadStream } from "fs";
import { createInterface } from "readline";

test("Calibrate works for sample input", async () => {
  /** @type {string[]} */
  let lines = [];

  const readInterface = createInterface({
    input: createReadStream("../data/day1/example.txt"),
    output: process.stdout,
    terminal: false,
  });

  await new Promise((resolve) => {
    readInterface
      .on("line", function (line) {
        lines.push(line);
      })
      .on("close", resolve);
  });

  expect(calibrate(lines)).toBe(142);
});

test("Calibrate works for sample text file", async () => {
  /** @type {string[]} */
  let lines = [];

  const readInterface = createInterface({
    input: createReadStream("../data/day1/data.txt"),
    output: process.stdout,
    terminal: false,
  });

  await new Promise((resolve) => {
    readInterface
      .on("line", function (line) {
        lines.push(line);
      })
      .on("close", resolve);
  });

  expect(calibrate(lines)).toBe(55477);
});