/**
 * typeOf(): "string"
 * typeof: "string"
 */
export const TESTING_STRING = '!@#$%^&*()Company';

/**
 * typeOf(): "string"
 * typeof: "string"
 */
export const TESTING_STRING_CONSTRUCTOR = String(TESTING_STRING);

/**
 * Object: true
 * String: true
 * typeOf(): "string"
 * typeof: "object"
 */
// tslint:disable-next-line: ban-types no-construct
export const TESTING_STRING_INSTANCE = new String(
  TESTING_STRING
);
