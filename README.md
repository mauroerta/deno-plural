[![GitHub issues](https://img.shields.io/github/issues/mauroerta/deno-plural)](https://github.com/mauroerta/deno-plural/issues) [![GitHub forks](https://img.shields.io/github/forks/mauroerta/deno-plural)](https://github.com/mauroerta/deno-plural/network) [![GitHub stars](https://img.shields.io/github/stars/mauroerta/deno-plural)](https://github.com/mauroerta/deno-plural/stargazers) [![GitHub license](https://img.shields.io/github/license/mauroerta/deno-plural)](https://github.com/mauroerta/deno-plural/blob/master/LICENSE)

# Deno Plural ~ 🙏🏻 = 🍞 🐟

deno-plural module helps you to pluralize or singularize a given word.

## 📝 How to use

You just need to import the singular and plural functions from `deno.land`:

```typescript
import { singular, plural } from "https://deno.land/x/deno_plural/mod.ts";
```

And use it!

```typescript
const pluralWord = plural(`foot`); // Will return the string  `feet`
const singularWord = singular(`feet`); // Will return the string `foot`
```

## 🎓 Example

```typescript
import { singular, plural } from "https://deno.land/x/deno_plural/mod.ts";

const singulars = ["foot", "computer"];

let plurals: string[] = [];

console.log("Testing singular --> plural");
singulars.forEach((word) => {
  const pluralWord = plural(word);
  plurals.push(pluralWord);
  console.log(`The plural of ${word} is ${pluralWord}`);
});
console.log("---------------------------");
console.log("Testing plural --> singular");
plurals.forEach((word) => {
  console.log(`The singular of ${word} is ${singular(word)}`);
});
```

The output of this simple code will be:

```
Testing singular --> plural
The plural of foot is feet
The plural of computer is computers
---------------------------
Testing plural --> singular
The singular of feet is foot
The singular of computers is computer
```

## 🙏 Thanks

This project could not exist without the work of [pluralize](https://github.com/plurals/pluralize).