/**
 * 
 */
export class TextualExpectation {
  public static toBeArray = `The \`actual\` value must be \`array\` type or an instance of \`Array\`.`;
  public static toBeArrayOfBigInt = `The \`actual\` value must be \`array\` type or an instance of \`Array\` of \`bigint\`.`;
  public static toBeArrayOfBoolean = `The \`actual\` value must be \`array\` type or an instance of \`Array\` of \`boolean\`.`;
  public static toBeArrayOfDate = `The \`actual\` value must be \`array\` type or an instance of \`Array\` of \`date\`.`;
  public static toBeArrayOfDefined = `The \`actual\` value must be \`array\` type or an instance of \`Array\` of defined.`;
  public static toBeArrayOfFalse = `The \`actual\` value must be \`array\` type or an instance of \`Array\` of \`false\`.`;
  public static toBeArrayOfNull = `The \`actual\` value must be \`array\` type or an instance of \`Array\` of \`null\`.`;
  public static toBeArrayOfNumber = `The \`actual\` value must be \`array\` type or an instance of \`Array\` of \`number\`.`;
  public static toBeArrayOfRegExp = `The \`actual\` value must be \`array\` type or an instance of \`Array\` of \`regexp.`;
  public static toBeArrayOfString = `The \`actual\` value must be \`array\` type or an instance of \`Array\` of \`string\`.`;
  public static toBeArrayOfSymbol = `The \`actual\` value must be \`array\` type or an instance of \`Array\` of \`symbol\`.`;
  public static toBeArrayOfTrue = `The \`actual\` value must be \`array\` type or an instance of \`Array\` of \`true\`.`;
  public static toBeArrayOfUndefined = `The \`actual\` value must be \`array\` type or an instance of \`Array\` of \`undefined\`.`;

  public static toBeBigInt = `The \`actual\` value must be a \`bigint\` type.`;
  public static toBeBoolean = `The \`actual\` value must be of a \`boolean\` type or an instance of \`${Boolean.name}\`.`;
  public static toBeBooleanType = `The \`actual\` value must be of a \`boolean\` type.`;

  public static toBeClass = `The \`actual\` value must be a \`class\`.`;
  public static toBeCloseTo = `The \`actual\` value must be within a specified \`precision\` of the \`expected\` actual.`;

  public static toBeDate = `The \`actual\` value to be a \`date\`.`;
  public static toBeDefined = `The \`actual\` value must be defined.`;
  
  // false
  public static toBeFalse = `The \`actual\` value must be \`false\`.`;
  public static toBeFalsy = `The \`actual\` value must be falsy.`;
  public static toBeFunction = `The \`actual\` value must be \`function\`.`;
  
  // GreaterThan
  public static toBeGreaterThan = `The \`actual\` value to be greater than the \`expected\` value.`;
  public static toBeGreaterThanOrEqual = `The \`actual\` value to be greater than or equal to the \`expected\` value.`;
  
  // instance
  public static toBeInstance = `The \`actual\` value to be an instance of \`constructor\`.`;
  public static toBeInstanceOf = `The \`actual\` value must be an instance of \`expected\`.`;

  // InstanceOf
  public static toBeInstanceOfArray = `The \`actual\` value must be an instance of an \`${Array.name}\`.`;
  public static toBeInstanceOfBoolean = `The \`actual\` value must be an instance of \`${Boolean.name}\`.`;
  public static toBeInstanceOfDate = `The \`actual\` value must be an instance of \`${Date.name}\`.`;
  public static toBeInstanceOfError = `The \`actual\` value must be an instance of an \`${Error.name}\`.`;
  public static toBeInstanceOfFunction = `The \`actual\` value must be an instance of a \`${Function.name}\`.`;
  public static toBeInstanceOfMap = `The \`actual\` value must be an instance of a \`${Map.name}\`.`;
  public static toBeInstanceOfNumber = `The \`actual\` value must be an instance of a \`${Number.name}\`.`;
  public static toBeInstanceOfObject = `The \`actual\` value must be an instance of an \`${Object.name}\`.`;
  public static toBeInstanceOfPromise = `The \`actual\` value must be an instance of \`${Promise.name}\`.`;
  public static toBeInstanceOfRangeError = `The \`actual\` value must be an instance of \`${RangeError.name}\`.`;
  public static toBeInstanceOfReferenceError = `The \`actual\` value must be an instance of \`${ReferenceError.name}\`.`;
  public static toBeInstanceOfRegExp = `The \`actual\` value must be an instance of \`${RegExp.name}\`.`;
  public static toBeInstanceOfSet = `The \`actual\` value must be an instance of \`${Set.name}\`.`;
  public static toBeInstanceOfStorage = `The \`actual\` value must be an instance of \`${Storage.name}\`.`;
  public static toBeInstanceOfString = `The \`actual\` value must be an instance of a \`${String.name}\`.`;
  public static toBeInstanceOfSyntaxError = `The \`actual\` value must be an instance of \`${SyntaxError.name}\`.`;
  public static toBeInstanceOfTypeError = `The \`actual\` value must be an instance of \`${TypeError.name}\`.`;
  public static toBeInstanceOfURIError = `The \`actual\` value must be an instance of \`${URIError.name}\`.`;
  public static toBeInstanceOfWeakMap = `The \`actual\` value must be an instance of a \`${WeakMap.name}\`.`;
  public static toBeInstanceOfWeakSet = `The \`actual\` value must be an instance of a \`${WeakSet.name}\`.`;
  
  //
  public static toBeKey = `The \`actual\` value to be a \`PropertyKey\`.`;

  // LessThan
  public static toBeLessThan = `The \`actual\` value to be less than the \`expected\` value.`;
  public static toBeLessThanOrEqual = `The \`actual\` value to be less than or equal to the \`expected\` value.`;
  
  public static toBeNaN = `The \`actual\` value to be NaN (Not a Number).`;
  public static toBeNegativeInfinity = `The \`actual\` value to be -Infinity (-infinity).`;
  public static toBeNull = `The \`actual\` value must be \`null\`.`;
  public static toBeNumber = `The \`actual\` value to be a \`number\` type or an instance of a \`${Number.name}\`.`;
  public static toBeNumberBetween = `The \`actual\` value to be a \`number\` type or an instance of \`${Number.name}\` between the range of \`min\` and \`max\`.`;
  public static toBeNumberType = `The \`actual\` value must be of a \`number\` type.`;

  // object
  public static toBeObject = `The \`actual\` value must be of \`object\` type or an instance of \`Object\`.`;
  public static toBeObjectKey = `The \`actual\` value must be of \`object\` type or an instance of \`Object\` with a given \`key\`.`;
  public static toBeObjectKeys = `The \`actual\` value must be of \`object\` type or an instance of \`Object\` with given \`keys\`.`;
  public static toBeObjectKeyIn = `The \`actual\` value must be of \`object\` type or an instance of \`Object\` with a given \`key\` in it(or its prototype chain).`;
  public static toBeObjectKeysIn = `The \`actual\` value must be of \`object\` type or an instance of \`Object\` with given \`keys\` in it(or its prototype chain).`;
  public static toBeObjectSomeKeys = `The \`actual\` value must be of \`object\` type or an instance of \`Object\` with some given \`keys\`.`;

  public static toBePending = `Mark a spec as pending; expectation results will be ignored.`;
  public static toBePositiveInfinity = `The \`actual\` value to be Infinity (infinity).`;

  public static toBeRegExp = `The \`actual\` value must be \`${RegExp.name}\`.`;
  
  // async
  public static toBeRejected = `Expect the \`actual\` value a promise to be rejected.`;
  public static toBeRejectedWith = `Expect the \`actual\` value a promise to be rejected with a value equal to the expected; using deep equality comparison.`;
  public static toBeRejectedWithError = `Expect the \`actual\` value a promise to be rejected with a value matched to the expected.`;
  public static toBeResolved = `Expect the \`actual\` value a promise to be resolved.`;
  public static toBeResolvedTo = `Expect the \`actual\` value a promise to be resolved to a value equal to the expected; using deep equality comparison.`;
  
  // string
  public static toBeString = `The \`actual\` value must be a \`string\` type or an instance of a \`String\`.`;
  public static toBeStringIncludes = `The \`actual\` value must be a \`string\` type or an instance of a \`String\` that includes the specified words/sentences.`;
  public static toBeStringIncludesSome = `The \`actual\` value must be a \`string\` type or an instance of a \`String\` that includes some of the specified words/sentences.`;
  public static toBeStringOfLength = `The \`actual\` value must be a \`string\` type or an instance of a \`String\` of the given \`length\`.`;
  public static toBeStringOfLengthBetween = `The \`actual\` value must be a \`string\` type or an instance of a \`String\` of the length between the given \`min\` and \`max\`.`;
  public static toBeStringType = `The \`actual\` value must be of a \`string\` type.`;

  // symbol
  public static toBeSymbol = `The \`actual\` value must be a \`symbol\`.`;

  // true
  public static toBeTrue = `The \`actual\` value must be a \`boolean\` type or an instance of \`Boolean\` equal to \`true\`.`;
  public static toBeTruthy = `The \`actual\` value to be truthy.`;

  public static toBeUndefined = `The \`actual\` value must be \`undefined\`.`;

  public static toContain = `The \`actual\` value to contain a specific value.`;
  public static toEqual = `The \`actual\` value to be equal to the \`expected\`; using deep equality comparison.`;
  
  // toHaveBeen
  public static toHaveBeenCalled = `The \`actual\` value (a Spy) to have been called.`;
  public static toHaveBeenCalledBefore = `The \`actual\` value (a Spy) to have been called before another Spy.`;
  public static toHaveBeenCalledOnceWith = `The \`actual\` value (a Spy) to have been called exactly once; and exactly with the particular arguments.`;
  public static toHaveBeenCalledTimes = `The \`actual\` value (a Spy) to have been called the specified number of times.`;
  public static toHaveBeenCalledWith = `The \`actual\` (a Spy) to have been called with particular arguments at least once.`;

  public static toHaveClass = `The \`actual\` value to be a DOM element that has the expected class.`;
  public static toHaveSize = `The \`actual\` size to be equal to the expected; using array-like length or object keys size.`;
  public static toHaveSpyInteractions = `The \`actual\` value (a SpyObj) spies to have been called.`;

  public static toMatch = `The \`actual\` value to match a regular expression.`;

  public static toThrow = `The \`actual\` value a function to throw something.`;
  public static toThrowError = `The \`actual\` value a function to throw an Error.`;
  public static toThrowMatching = `The \`actual\` value a function to throw something matching a predicate.`;
}
