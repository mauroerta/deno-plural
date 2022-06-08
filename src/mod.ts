import { DenoPlural } from "./denoPlural.ts";

/**
 * It returns the plural of the given word
 *
 * @example
 *
 * const pluralOfWord = plural('foot');  // feet
 */
export const plural = DenoPlural.plural;

/**
 * It returns the singular of the giver word
 *
 * @example
 *
 * const singularOfWord = plural('feet');  // foot
 */
export const singular = DenoPlural.singular;

/**
 * A method to add new rules for the language specified as a first parameters
 *
 * @example
 *
 * addRules('it', itRules);
 */
export const addRules = DenoPlural.addRules;

/**
 * A method to set the current language
 *
 * @example
 *
 * setLanguage('it');
 * console.log(singular('persone')); // --> "persona"
 * setLanguage('en');
 * console.log(singular('people')); // --> "person"
 */
export const setLanguage = DenoPlural.setLanguage;

/**
 * A method to get the current language
 *
 * @example
 *
 * setLanguage('it');
 * console.log(getCurrentLanguage()); // --> "it"
 * setLanguage('en');
 * console.log(getCurrentLanguage()); // --> "en"
 */
export const getCurrentLanguage = DenoPlural.getCurrentLanguage;

export * from "./types.ts";
