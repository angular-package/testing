/**
 * typeOf(): "boolean"
 * typeof: "boolean"
 */
export const TESTING_FALSE = false;

/**
 * typeOf(): "boolean"
 * typeof: "boolean"
 */
export const TESTING_TRUE = true;

/**
 * Boolean: true
 * Object: true
 * typeOf(): "boolean"
 * typeof: "object"
 */
// tslint:disable-next-line: ban-types no-construct
export const TESTING_FALSE_INSTANCE = new Boolean(TESTING_FALSE);

/**
 * Boolean: true
 * Object: true
 * typeOf(): "boolean"
 * typeof: "object"
 */
// tslint:disable-next-line: ban-types no-construct
export const TESTING_TRUE_INSTANCE = new Boolean(TESTING_TRUE);
