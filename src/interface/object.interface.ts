import { TESTING_NUMBER } from '../lib/constants/number.const';
import { TESTING_STRING } from '../lib/constants/string.const';
import { TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING } from '../lib/constants/symbol.const';
/**
 * Shape of the `object` for testing.
 */
export interface TestingObject {
  'key as string'?: boolean;
  1030405027?: string;
  5?: string;
  [TESTING_NUMBER]?: string;
  [TESTING_STRING]?: string;
  [TESTING_SYMBOL_NUMBER]?: string;
  [TESTING_SYMBOL_STRING]?: number;
  x: number;
}
