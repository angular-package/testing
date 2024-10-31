import { TestingToBe } from "../main";

// TODO:
const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingToBe(
    executeDescribe,
    executeIt
  );

  t.describe(`TestingToBe`, () => 
    t
      .toBeArray([27, 37])
      .toBeBigInt(BigInt(27))
      .toBeClass(TestingToBe)
      // .toBeCloseTo()
      .toBeDate(new Date())
      .toBeDefined('A')
      .toBeFalse(false)
      .toBeFalsy(false)
      .toBeFunction(() => {})
      .toBeInstance(t, TestingToBe)
      .toBeInstanceOf(t, TestingToBe)
      .toBeKey('PropertyKey')
      .toBeNaN(NaN)
      .toBeNegativeInfinity(-Infinity)
      .toBeNull(null)

      // .toBePending(new Promise((resolve, reject) => {}))
      .toBePositiveInfinity(Infinity)

      .toBeRegExp(new RegExp('a'))

      .toBeRejected(new Promise((resolve, reject) => reject('any')))
      .toBeRejectedWith(new Promise((resolve, reject) => reject({test: 27})), {test: 27})
      // .toBeRejectedWithError(new Promise((resolve, reject) => { reject(new Error('Error')) }), Error, 'Error')

      .toBeResolved(new Promise((resolve, reject) => resolve('any')))
      .toBeResolvedTo(new Promise((resolve, reject) => resolve({test: 27})), {test: 27})
      .toBeSymbol(Symbol('a'))

      .toBeTrue(true)
      .toBeTruthy(true)
      .toBeUndefined(undefined)
  );
}
