import { TESTING_NUMBER } from './number.const';
import { TESTING_STRING } from './string.const';
/**
 * typeOf(): "symbol"
 * typeof: "symbol"
 */
export const TESTING_SYMBOL_NUMBER: unique symbol = Symbol(
  TESTING_NUMBER
);

/**
 * typeOf(): "symbol"
 * typeof: "symbol"
 */
export const TESTING_SYMBOL_STRING: unique symbol = Symbol(
  TESTING_STRING
);
