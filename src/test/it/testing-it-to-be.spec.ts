// Class.
import { TestingItToBe } from '../main';

// Execute.
import { ExecuteSpec } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingItToBe(
    ExecuteSpec.describe.it["testing-it-to-be"],
    ExecuteSpec.it.it["testing-it-to-be"]
  );
  t.describe(`TestingItToBe`, () => {
    t
      .arrayof
      .bigint([BigInt(27)])

    t
      .boolean
      .boolean([true, false])
      .type([true, false]);

    t
      .instanceof

    t
      .array([27, 37])
      .bigInt([BigInt(27)])
      .class(t)
      // .closeTo()
      .date(new Date())
      .defined('a')
      .false(false)
      .falsy(false)
      .function(() => {})
      .greaterThan(37, 27)
      .greaterThanOrEqual(37, 37)
      .instance(t, TestingItToBe)
      .instanceOf(t, TestingItToBe)
      .key('PropertyKey')
      .lessThan(37, 47)
      .lessThanOrEqual(47, 47)
      .naN(NaN)
      .negativeInfinity(-Infinity)
      .null(null)
      .number(47)
      .numberBetween(37, 27, 47)
      .numberType(37)
      .object({})
      .objectKey({a: 1}, "a")
      .objectKeyIn(t, "except")

      .objectKeys({a: 1, b: 2}, ["a", "b"])
      .objectKeysIn(t, ["except"])
      // .objectSomeKeys()
      .pending(new Promise((resolve, reject) => {}))

      .positiveInfinity(Infinity)
      .regExp(new RegExp(/a/))
      .rejected(new Promise((resolve, reject) => { reject("a") }))
      .rejectedWith(new Promise((resolve, reject) => { reject("a")}), "a")
      .rejectedWithError(new Promise((resolve, reject) => { throw new Error("Error") }), Error, "Error")

      .resolved(new Promise((resolve, reject) => { resolve("a") }))
      .resolvedTo(new Promise((resolve, reject) => { resolve("a") }), "a")

      .string("a")
      .stringIncludes("a b c d", ["d"])
      .stringIncludesSome(" a b  c d ", ["a", "e", "c"])
      .stringOfLength("a b c d e f g h i j k l m n o p r s", 18)
      .stringOfLengthBetween("a b c d e f g h i j k l m n o p r s", 17, 18)
      .stringType("a b c d e f")
  });
}
