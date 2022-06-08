/**
 * It inverts the given object
 *
 * @example
 *
 * const object = { foo: "bar" };
 *
 * const invertedObject = invertObject(object);  // { bar: "foo" }
 */
export function invertObject(
  object: Record<string, string>,
): Record<string, string> {
  const keys = Object.keys(object);

  return keys.reduce(
    (acc, key) => ({
      ...acc,
      [object[key]]: key,
    }),
    {},
  );
}
