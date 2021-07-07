/**
 * typeOf(): "number"
 * typeof: "number"
 */
export const TESTING_NUMBER = 10304050;

/**
 * typeOf(): "number"
 * typeof: "number"
 */
export const TESTING_NUMBER_CONSTRUCTOR = Number(TESTING_NUMBER);

/**
 * Number: true
 * Object: true
 * typeOf(): "number"
 * typeof: "object"
 */
// tslint:disable-next-line: ban-types no-construct
export const TESTING_NUMBER_INSTANCE: Number = new Number(
  TESTING_NUMBER
);
