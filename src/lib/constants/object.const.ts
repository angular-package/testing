// Constant.
import { TESTING_NUMBER } from './number.const';
import { TESTING_STRING } from './string.const';
import { TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING } from './symbol.const';
// Interface.
import { TestingObject } from '../../interface';
/**
 * Object: true,
 * typeOf(): "object",
 * typeof: "object"
 */
export const TESTING_OBJECT: TestingObject = {
  'key as string': true,
  1030405027: 'key is number',
  5: 'key is also number',
  [TESTING_NUMBER]: 'key is number',
  [TESTING_STRING]: 'key is string',
  [TESTING_SYMBOL_NUMBER]: 'key is symbol number',
  [TESTING_SYMBOL_STRING]: 6,
  x: 3000,
};

/**
 * Object: true,
 * typeOf(): "object",
 * typeof: "object"
 */
export const TESTING_OBJECT_ONE_NEW = new Object(TESTING_OBJECT);
