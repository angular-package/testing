// Constant.
import { TESTING_BIGINT } from './big-int.const';
import { TestingClass } from './class.const';
import {
  TESTING_FALSE,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
  TESTING_FALSE_INSTANCE,
} from './boolean.const';
import { TESTING_NULL } from './null.const';
import {
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
} from './number.const';
import {
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
  TESTING_STRING_INSTANCE,
} from './string.const';
import { TESTING_UNDEFINED } from './undefined.const';
import { TESTING_NOT_DEFINED } from '../variable/not-defined.variable';
// Interface.
import { TestingObject } from '../../interface/object.interface';
import {
  TESTING_FUNCTION,
  TESTING_FUNCTION_CONSTRUCTOR,
  TESTING_FUNCTION_CONSTRUCTOR_PERSON,
} from './function.const';
import { TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING } from './symbol.const';
/**
 * An `Array` of `bigint`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
export const TESTING_ARRAY_BIGINT = [
  TESTING_BIGINT,
  TESTING_BIGINT,
  9007199254740991n,
];

/**
 * An `Array` of `boolean`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
export const TESTING_ARRAY_BOOLEAN = [
  true,
  false,
  TESTING_TRUE_INSTANCE,
  TESTING_FALSE_INSTANCE,
  false,
  TESTING_FALSE,
  TESTING_TRUE,
];

/**
 * An `Array` of `class`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
export const TESTING_ARRAY_CLASS = [new TestingClass(), new TestingClass()];

/**
 * An `Array` of `function`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
export const TESTING_ARRAY_FUNCTION = [
  TESTING_FUNCTION,
  TESTING_FUNCTION_CONSTRUCTOR,
  TESTING_FUNCTION_CONSTRUCTOR_PERSON,
  (x: number, y: string): any => x,
];

/**
 * An `Array` of `null`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
export const TESTING_ARRAY_NULL = [
  null,
  null,
  null,
  TESTING_NULL,
  TESTING_NULL,
];

/**
 * An `Array` of `number`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
export const TESTING_ARRAY_NUMBER = [
  1,
  2,
  3,
  4,
  7,
  10,
  1000,
  3000,
  151233,
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
];

/**
 * An `Array` of `object`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
export const TESTING_ARRAY_OBJECT_ONE: Array<TestingObject> = [
  { [TESTING_NUMBER]: 'my number', x: 3000 },
  { [TESTING_NUMBER]: 'my number', x: 1 },
];

/**
 * An `Array` of `string`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
export const TESTING_ARRAY_STRING = [
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
  TESTING_STRING_INSTANCE,
  '!@#$%^&*()Company',
];

/**
 * An `Array` of `symbol`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
export const TESTING_ARRAY_SYMBOL_NUMBER = [
  TESTING_SYMBOL_NUMBER,
  Symbol(1005),
  Symbol(1002),
  Symbol(15),
  Symbol(1),
];

/**
 * An `Array` of `symbol`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
export const TESTING_ARRAY_SYMBOL_STRING = new Array([
  TESTING_SYMBOL_STRING,
  Symbol('String Symbol'),
  Symbol('String Symbol'),
  Symbol('String Symbol One'),
  Symbol('String Symbol Two'),
]);

/**
 * An `Array` of `undefined`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
export const TESTING_ARRAY_UNDEFINED: Array<undefined | unknown> = [
  undefined,
  undefined,
  undefined,
  TESTING_UNDEFINED,
  TESTING_NOT_DEFINED,
];
