/*
 * Public API Surface of testing
 */
/**
 * Main.
 */
export {
  Testing, // Main class with all testings.
  TestingActual, // Initialize testing for `actual`.
  TestingCustom, // Class to pass custom testings.

  // Full named expectations. Methods with `expect()` + jasmine matchers.
  TestingExpectation,

  // Class to handle `describe()` function of jasmine.
  TestingDescribe,

  // Class to handle `it()` function of jasmine.
  TestingIt,

  // Class to handle `expect()` function of jasmine.
  TestingExpect,

  // Class to handle `describe`, `it`, `expect` of jasmine.
  TestingCore,

  // Abstract class to handle `describe` and `it` counter.
  TestingCounter,

  // Abstract class to handle executable tests.
  TestingExecutable,
} from './lib';

// Specific expectations.
export {
  TestingExpectTo,
  TestingExpectToBe,
  TestingExpectToBeArrayOf,
  TestingExpectToBeInstanceOf,
  TestingExpectToHave,
  TestingExpectToHaveBeen,
  TestingExpectToHaveBeenCalled,
  TestingExpectToThrow,
} from './lib/expectation';

// Methods with `it()` function of jasmine.
export {
  TestingItTo,
  TestingItToBe,
  TestingItToBeArrayOf,
  TestingItToBeBoolean,
  TestingItToBeInstanceOf,
  TestingItToHave,
  TestingItToHaveBeen,
  TestingItToHaveBeenCalled,
  TestingItToThrow,
} from './lib/it';

// Testing classes for use with `TestingCustom`.
export {
  TestingTo,
  TestingToBe,
  TestingToBeArrayOf,
  TestingToBeBoolean,
  TestingToBeGreaterThan,
  TestingToBeInstanceOf,
  TestingToBeLessThan,
  TestingToBeNumber,
  TestingToBeObject,
  TestingToBeString,
  TestingToHave,
  TestingToThrow,
} from './lib/testing';

/**
 * Constant.
 */
export {
  // Example class for testing.
  TestingClass,
  TestingPerson,
  // Array.
  TESTING_ARRAY_BIGINT,
  TESTING_ARRAY_BOOLEAN,
  TESTING_ARRAY_CLASS,
  TESTING_ARRAY_FUNCTION,
  TESTING_ARRAY_NULL,
  TESTING_ARRAY_NUMBER,
  TESTING_ARRAY_OBJECT_ONE,
  TESTING_ARRAY_STRING,
  TESTING_ARRAY_SYMBOL_NUMBER,
  TESTING_ARRAY_SYMBOL_STRING,
  TESTING_ARRAY_UNDEFINED,
  // BigInt
  TESTING_BIGINT,
  // Class.
  TESTING_CLASS,
  TESTING_PERSON,
  // Date.
  TESTING_DATE,
  // Boolean.
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
  // Function.
  TESTING_FUNCTION,
  TESTING_FUNCTION_CONSTRUCTOR,
  TESTING_FUNCTION_CONSTRUCTOR_PERSON,
  // null.
  TESTING_NULL,
  // Number.
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
  // Object.
  TESTING_OBJECT,
  // RegExp.
  TESTING_REGEXP,
  // String.
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
  TESTING_STRING_INSTANCE,
  // Symbol.
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  // Undefined.
  TESTING_UNDEFINED,
} from './lib/constants';

/**
 * Interface.
 */
export { TestingObject, TestingPersonShape } from './interface';
