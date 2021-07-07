// Constant.
import { TESTING_STRING } from './string.const';
import { TESTING_NUMBER } from './number.const';
import { TESTING_SYMBOL_STRING, TESTING_SYMBOL_NUMBER } from './symbol.const';
// Interface.
import { TestingPersonShape } from '../../interface/person-shape.interface';
// Interface.
/**
 * Function: true
 * Object: true
 * class: true
 * typeOf(): "function"
 * typeof: "function"
 */
export class TestingClass {

  /**
   * Property as `number` of a `string` type.
   */
  1030405027 = 'my new number';

  /**
   * Property as `number` of a `number` type.
   */
  5 = 27;

  /**
   * Property as `string` of a `string` type.
   */
  firstName = 'My name';

  /**
   * Property as `number` of a `string` type.
   */
  surname = 'Surname';

  /**
   * Property as `number` of a `number` type.
   */
  age = TESTING_NUMBER;

  /**
   * Property as `string` of a `string` type.
   */
  city = TESTING_STRING;

  /**
   * Getter as `number` of a `number` type.
   */
  get [TESTING_NUMBER](): number {
    return this.age;
  }

  /**
   * Getter as `string` of a `string` type.
   */
  get [TESTING_STRING](): string {
    return this.city;
  }

  /**
   * Getter as `symbol number` of a `number` type.
   */
  get [TESTING_SYMBOL_NUMBER](): number {
    return this.age;
  }

  /**
   * Getter as `symbol string` of a `string` type.
   */
  get [TESTING_SYMBOL_STRING](): string {
    return this.city;
  }
}

/**
 * Object: true
 * typeOf(): "object"
 * typeof: "object"
 */
export const TESTING_CLASS = new TestingClass();

/**
 * Function: true
 * Object: true
 * class: true
 * typeOf(): "function"
 * typeof: "function"
 */
export class TestingPerson implements TestingPersonShape {
  firstName = '';
  surname = '';
  age = 15;
}

/**
 * Object: true
 * typeOf(): "object"
 * typeof: "object"
 */
export const TESTING_PERSON: TestingPerson = new TestingPerson();
