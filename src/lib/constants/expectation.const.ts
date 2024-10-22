/**
 * 
 */
export const EXPECTATION = {
  toBeBigInt: `The \`actual\` value must be a \`bigint\` type.`,
  toBeBooleanType: `The \`actual\` value must be of a \`boolean\` type.`,
  toBeClass: `The \`actual\` value must be a \`class\`.`,
  toBeCloseTo: `The \`actual\` value must be within a specified precision of the \`expected\` actual.`,
  toBeDefined: `The \`actual\` value must be defined.`,

  toBeFalse: `The \`actual\` value must be false.`,
  toBeFalsy: `The \`actual\` value must be falsy.`,

  // GreaterThan
  toBeGreaterThan: `The \`actual\` value to be greater than the expected value.`,
  toBeGreaterThanOrEqual: `The \`actual\` value to be greater than or equal to the expected value.`,

  // 
  toBeInstanceOf: `The \`actual\` value must be an instance of \`expected\`.`,

  // InstanceOf
  toBeInstanceOfArray: `The \`actual\` value must be an instance of an \`${Array.name}\``,
  toBeInstanceOfBoolean: `The \`actual\` value must be an instance of \`${Boolean.name}\`.`,
  toBeInstanceOfDate: `The \`actual\` value must be an instance of \`${Date.name}\`.`,
  toBeInstanceOfError: `The \`actual\` value must be an instance of an \`${Error.name}\`.`,
  toBeInstanceOfFunction: `The \`actual\` value must be an instance of a \`${Function.name}\`.`,
  toBeInstanceOfMap: `The \`actual\` value must be an instance of a \`${Map.name}\`.`,
  toBeInstanceOfNumber: `The \`actual\` value must be an instance of a \`${Number.name}\`.`,
  toBeInstanceOfObject: `The \`actual\` value must be an instance of an \`${Object.name}\`.`,
  toBeInstanceOfPromise: `The \`actual\` value must be an instance of \`${Promise.name}\`.`,
  toBeInstanceOfRangeError: `The \`actual\` value must be an instance of \`${RangeError.name}\`.`,
  toBeInstanceOfReferenceError: `The \`actual\` value must be an instance of \`${ReferenceError.name}\`.`,
  toBeInstanceOfRegExp: `The \`actual\` value must be an instance of \`${RegExp.name}\`.`,
  toBeInstanceOfSet: `The \`actual\` value must be an instance of \`${Set.name}\`.`,
  toBeInstanceOfStorage: `The \`actual\` value must be an instance of \`${Storage.name}\`.`,
  toBeInstanceOfString: `The \`actual\` value must be an instance of a \`${String.name}\`.`,
  toBeInstanceOfSyntaxError: `The \`actual\` value must be an instance of \`${SyntaxError.name}\`.`,
  toBeInstanceOfTypeError: `The \`actual\` value must be an instance of \`${TypeError.name}\`.`,
  toBeInstanceOfURIError: `The \`actual\` value must be an instance of \`${URIError.name}\`.`,
  toBeInstanceOfWeakSet: `The \`actual\` value must be an instance of a \`${WeakSet.name}\`.`,

  // LessThan
  toBeLessThan: `The \`actual\` value to be less than the expected value.`,
  toBeLessThanOrEqual: `The \`actual\` value to be less than or equal to the expected value.`,

  toBeNaN: `The \`actual\` value to be NaN (Not a Number).`,
  toBeNegativeInfinity: `The \`actual\` value to be -Infinity (-infinity).`,
  toBeNull: `The \`actual\` value must be \`null\`.`,
  toBeNumberType: `The \`actual\` value must be of a \`number\` type.`,
  toBePositiveInfinity: `The \`actual\` value to be Infinity (infinity).`,
  toBeRegExp: `The \`actual\` value must be \`${RegExp.name}\`.`,

  // async
  toBeRejected: `Expect the \`actual\` value a promise to be rejected.`,
  toBeRejectedWith: `Expect the \`actual\` value a promise to be rejected with a value equal to the expected, using deep equality comparison.`,
  toBeRejectedWithError: `Expect the \`actual\` value a promise to be rejected with a value matched to the expected`,
  toBeResolved: `Expect the \`actual\` value a promise to be resolved.`,
  toBeResolvedTo: `Expect the \`actual\` value a promise to be resolved to a value equal to the expected, using deep equality comparison.`,

  toBeStringType: `The \`actual\` value must be of a \`string\` type.`,
  toBeTrue: `The \`actual\` value must be \`true\`.`,
  toBeTruthy: `The \`actual\` value to be truthy.`,

  toContain: `The \`actual\` value to contain a specific value.`,
  toEqual: `The \`actual\` value to be equal to the \`expected\`, using deep equality comparison.`,

  // toHaveBeen
  toHaveBeenCalled: `The \`actual\` value (a Spy) to have been called.`,
  toHaveBeenCalledBefore: `The \`actual\` value (a Spy) to have been called before another Spy.`,
  toHaveBeenCalledOnceWith: `The \`actual\` value (a Spy) to have been called exactly once, and exactly with the particular arguments.`,
  toHaveBeenCalledTimes: `The \`actual\` value (a Spy) to have been called the specified number of times.`,
  toHaveBeenCalledWith: `The \`actual\` (a Spy) to have been called the specified number of times.`,
  toHaveClass: `The \`actual\` value to be a DOM element that has the expected class.`,
  toHaveSize: `The \`actual\` size to be equal to the expected, using array-like length or object keys size.`,
  toHaveSpyInteractions: `The \`actual\` value (a SpyObj) spies to have been called.`,
  toMatch: `The \`actual\` value to match a regular expression.`,
  toThrow: `The \`actual\` value a function to throw something.`,
  toThrowError: `The \`actual\` value a function to throw an Error.`,
  toThrowMatching: `The \`actual\` value a function to throw something matching a predicate.`,
};
