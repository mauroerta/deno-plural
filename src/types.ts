/**
 * In case is needed, is possible to extend the supported language with module augmentation:
 *
 * @example
 *
 * declare module "https://deno.land/x/deno_plural/mod.ts" {
 *   interface Languages {
 *     it: string;
 *   }
 * }
 *
 * @example
 *
 * import { setLanguage } from "https://deno.land/x/deno_plural/mod.ts"
 *
 * addRules('it', itRules);
 * setLanguage('it');
 */
export interface Languages {
  en: string;
}

export type LanguageRules = {
  plurals: Record<string, string>;
  singulars: Record<string, string>;
  irregulars: Record<string, string>;
  uncountables: Array<string | RegExp>;
};

export type Language = keyof Languages;
