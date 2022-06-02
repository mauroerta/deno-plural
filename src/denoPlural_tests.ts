import { assertEquals } from "https://deno.land/std@0.141.0/testing/asserts.ts";
import {
  addRules,
  getCurrentLanguage,
  plural,
  setLanguage,
  singular,
} from "./mod.ts";

const plurals = [
  {
    input: "",
    expected: "",
  },
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
  {
    input: "advice",
    expected: "advice",
  },
];

const singulars = [
  {
    input: "",
    expected: "",
  },
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
  {
    input: "advice",
    expected: "advice",
  },
];

Deno.test({
  name: "plural: testing plurals",
  fn: (): void => {
    for (const test of plurals) {
      assertEquals(plural(test.input), test.expected);
    }
  },
});

Deno.test({
  name: "testing singulars",
  fn: (): void => {
    for (const test of singulars) {
      assertEquals(singular(test.input), test.expected);
    }
  },
});

Deno.test({
  name: "changing language - should be en by default",
  fn: (): void => {
    assertEquals(getCurrentLanguage(), "en");
  },
});

Deno.test({
  name: "changing language - should be `en` by default",
  fn: (): void => {
    assertEquals(getCurrentLanguage(), "en");
  },
});

Deno.test({
  name: "changing language - should change the language when `setLanguage` is called",
  fn: (): void => {
    // deno-lint-ignore no-explicit-any
    setLanguage("it" as any);
    assertEquals(getCurrentLanguage(), "it");
  },
});

Deno.test({
  name: "adding rules - add rules for the specified language",
  fn: (): void => {
    // deno-lint-ignore no-explicit-any
    addRules("it" as any, {
      singulars: {
        persone: "persona",
      },
      irregulars: {},
      plurals: {},
      uncountables: [],
    });
    // deno-lint-ignore no-explicit-any
    setLanguage("it" as any);
    assertEquals(singular("persone"), "persona");
  },
});

Deno.test({
  name: "change language inline - should resolve the singular/plural for the indicated language only for that time",
  fn: (): void => {
    // deno-lint-ignore no-explicit-any
    addRules("it" as any, {
      singulars: {
        persone: "persona",
      },
      irregulars: {},
      plurals: {},
      uncountables: [],
    });

    // deno-lint-ignore no-explicit-any
    assertEquals(singular("persone", "it" as any), "persona");
    assertEquals(singular("people"), "person");
  },
});
