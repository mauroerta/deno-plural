import * as enRules from "./rules/en.ts";
import { invertObject } from "./utils.ts";
import { Language, LanguageRules } from "./types.ts";

function createInstance() {
  let currentLanguage: Language = "en";
  const currentRules = {
    [currentLanguage]: enRules,
  };

  function getCurrentLanguage() {
    return currentLanguage;
  }

  function setLanguage(lang: Language) {
    currentLanguage = lang;
  }

  function addRules(lang: Language, rules: LanguageRules) {
    currentRules[lang] = rules;
  }

  function getRules() {
    return currentRules[currentLanguage];
  }

  function singular(string: string): string {
    const { irregulars, singulars, uncountables } = getRules();
    const notRegulars = invertObject(irregulars);
    const irregularsKeys: string[] = Object.keys(notRegulars);
    const singularKeys: string[] = Object.keys(singulars);

    if (!string) {
      return string;
    }

    if (uncountables.indexOf(string.toLowerCase()) >= 0) {
      return string;
    }

    for (const w of irregularsKeys) {
      const pattern = new RegExp(`^${w}$`, "i");
      const replace = notRegulars[w];
      if (pattern.test(string)) {
        return string.replace(pattern, replace);
      }
    }

    for (const reg of singularKeys) {
      const pattern = new RegExp(reg, "i");
      if (pattern.test(string)) {
        return string.replace(pattern, singulars[reg]);
      }
    }

    return string;
  }

  function plural(string: string): string {
    const { irregulars, plurals, uncountables } = getRules();
    const response = string;
    const irregularsKeys = Object.keys(irregulars);
    const pluralKeys = Object.keys(plurals);

    if (!string) {
      return response;
    }

    for (const w of uncountables) {
      if (typeof w === "string") {
        if (string.toLowerCase() === w) return response;
      } else if (w instanceof RegExp) {
        if (w.test(string)) return response;
      }
    }
    if (uncountables.indexOf(string.toLowerCase()) >= 0) {
      return response;
    }

    for (const w of irregularsKeys) {
      const pattern = new RegExp(`^${w}$`, "i");
      const replace = irregulars[w];

      if (pattern.test(string)) {
        return string.replace(pattern, replace);
      }
    }

    for (const reg of pluralKeys) {
      const pattern = new RegExp(reg, "i");
      if (pattern.test(string)) {
        return string.replace(pattern, plurals[reg]);
      }
    }

    return response;
  }

  function inlineSetLanguageWrapper<T extends (text: string) => string>(
    callback: T,
  ) {
    const currentLanguage = getCurrentLanguage();

    return (text: string, lang?: Language): string => {
      if (lang) {
        setLanguage(lang);
      }
      const value = callback(text);
      setLanguage(currentLanguage);

      return value;
    };
  }

  return {
    plural: inlineSetLanguageWrapper(plural),
    singular: inlineSetLanguageWrapper(singular),
    addRules,
    setLanguage,
    getCurrentLanguage,
  };
}

export const DenoPlural = createInstance();

DenoPlural.addRules("en", enRules);
DenoPlural.setLanguage("en");
