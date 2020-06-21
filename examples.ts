import { singular, plural } from "./mod.ts";

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
