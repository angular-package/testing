import { TestingPerson } from './class.const';
/**
 * Function: true
 * Object: true
 * function: true
 * typeOf(): "function"
 * typeof: "function"
 */
export const TESTING_FUNCTION = (x: number, y: string): any => x + y;

/**
 * Function: true
 * Object: true
 * function: true
 * typeOf(): "function"
 * typeof: "function"
 */
export const TESTING_FUNCTION_CONSTRUCTOR = function(
  this: any,
  ...args: any[]
): any {
  if (args) {
    args.forEach((arg, index: number) => (this[index] = arg[index]));
  }
  return this;
};

/**
 * Function: true
 * Object: true
 * function: true
 * typeOf(): "function"
 * typeof: "function"
 */
export const TESTING_FUNCTION_CONSTRUCTOR_PERSON = function(
  this: TestingPerson,
  ...args: any[]
): TestingPerson {
  if (args) {
    this.firstName = args[0];
    this.surname = args[1];
    this.age = args[2];
  }
  return this;
};
