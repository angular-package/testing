/*
 * Public API Surface of testing
 */
export {
  Random,

  // Class to handle `describe`, `it`, `expect` of jasmine.
  TestingCore,

  // Abstract class to handle executable tests.
  TestingExecutable,

  // Class to handle `expect()` function of jasmine.
  TestingExpect,

  // Full named expectations. Methods with `expect()` + jasmine matchers.
  TestingExpectation,

  // Class to handle `it()` function of jasmine.
  TestingSpec,

  // Class to handle `describe()` function of jasmine.
  TestingSuite,

  // Helper class to build the tests.
  TestingTest,

  // Main class with all testings.
  Testing,

  //
  TextualExpectation,
} from './lib';

/**
 * Helpers.
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
export type { TestingObject, TestingPersonShape } from './interface';
