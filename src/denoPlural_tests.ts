import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { plural, singular } from "./mod.ts";

const plurals = [
  {
    input: "plural",
    expected: "plurals",
  },
  {
    input: "developer",
    expected: "developers",
  },
  {
    input: "person",
    expected: "people",
  },
  {
    input: "foot",
    expected: "feet",
  },
  {
    input: "computer",
    expected: "computers",
  },
];

const singulars = [
  {
    input: "plurals",
    expected: "plural",
  },
  {
    input: "developers",
    expected: "developer",
  },
  {
    input: "people",
    expected: "person",
  },
  {
    input: "feet",
    expected: "foot",
  },
  {
    input: "computers",
    expected: "computer",
  },
];

Deno.test({
  name: "testing plurals",
  fn: (): void => {
    for (let test of plurals) {
      assertEquals(plural(test.input), test.expected);
    }
  },
});

Deno.test({
  name: "testing singulars",
  fn: (): void => {
    for (let test of singulars) {
      assertEquals(singular(test.input), test.expected);
    }
  },
});
