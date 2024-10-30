import { TestingToBeInstanceOf } from "../../lib";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingToBeInstanceOf(
    executeDescribe,
    executeIt
  );
  t.describe(`TestingToBeInstanceOf`, () => 
    t
      .toBeInstanceOfArray([37, 27])
      .toBeInstanceOfBoolean(false)
      .toBeInstanceOfDate(new Date())

      // Error.
      .toBeInstanceOfError(new Error('Error'))
      .toBeInstanceOfError(new RangeError('RangeError'))
      .toBeInstanceOfError(new ReferenceError('ReferenceError'))
      .toBeInstanceOfError(new SyntaxError('SyntaxError'))

      .toBeInstanceOfFunction(function() {})
      .toBeInstanceOfMap(new Map())
      .toBeInstanceOfNumber(37)

      // Object.
      .toBeInstanceOfObject({})
      .toBeInstanceOfObject(Object.create({}))
      .toBeInstanceOfPromise(new Promise((resolve, reject) => { resolve('resolve'); }))
      .toBeInstanceOfRangeError(new RangeError('Range'))
      .toBeInstanceOfReferenceError(new ReferenceError('Reference'))
      .toBeInstanceOfRegExp(new RegExp('RegExp'))
      .toBeInstanceOfSet(new Set('Set'))
      // .toBeInstanceOfStorage()
      .toBeInstanceOfString(new String('String'))

      // Error
      .toBeInstanceOfSyntaxError(new SyntaxError('Syntax'))
      .toBeInstanceOfTypeError(new TypeError('type'))
      .toBeInstanceOfURIError(new URIError('URI'))

      //
      .toBeInstanceOfWeakSet(new WeakSet())
  );  
}
