export {};
// import { Testing } from "../lib";
// import { Execute } from "./execute";

// let spy;
// let arr: any;

// const t = new Testing<'a', 'b'>(
//   Execute.describe["testing-test"],
//   Execute.it["testing-test"], {}
// );

// // testing.Config(`Testing has method with expectation`, () => 
// //   Object
// //     .entries(TestingTest.expectation)
// //     .forEach(([name, expectation]) => testing.toBeTrue(name in TestingTest.prototype, true, ` ${name}()`))
// // );

// class Test {
//   test(value?: any) {}
// }

// const test = new Test();

// t.describe(`Testing has method with expectation`, () => t
//   .toBeArray([1, 2, 3])
//   .toBeBigInt(BigInt(100))
//   .toBeBoolean(false)
//   .toBeBooleanType(false)
//   .toBeClass(Testing)
//   // .toBeCloseTo(42.2, 3)
//   .toBeDate(new Date())
//   .toBeDefined(27)
//   .toBeFalse(false)
//   .toBeFalsy(false)
//   .toBeFunction(function() {})
//   .toBeGreaterThan(37, 27)
//   .toBeGreaterThanOrEqual(37, 37)
//   .toBeInstance(t, Testing)
//   .toBeInstanceOf(t, Testing)
//   .toBeInstanceOfArray([1, 2, 3])
//   .toBeInstanceOfBoolean(false)
//   .toBeInstanceOfDate(new Date())
//   .toBeInstanceOfError(new Error('Test error'))
//   .toBeInstanceOfFunction(function(){})
//   .toBeInstanceOfMap(new Map())
//   .toBeInstanceOfNumber(new Number(27))
//   .toBeInstanceOfObject(new Object({ test: 'test' }))
//   .toBeInstanceOfPromise(new Promise((resolved, reject) => { resolved(true); }))
//   .toBeInstanceOfRangeError(new RangeError(`RangeError`))
//   .toBeInstanceOfReferenceError(new ReferenceError(`ReferenceError`))
//   .toBeInstanceOfRegExp(new RegExp(''))
//   .toBeInstanceOfSet(new Set())

//   // .toBeInstanceOfStorage()

//   .toBeInstanceOfString(new String(`String`))
//   .toBeInstanceOfSyntaxError(new SyntaxError(`SyntaxError`))
//   .toBeInstanceOfTypeError(new TypeError(`TypeError`))
//   .toBeInstanceOfURIError(new URIError(`URIError`))
//   .toBeInstanceOfWeakSet(new WeakSet())

//   .toBeKey('firstName')
//   .toBeLessThan(27, 37)
//   .toBeLessThanOrEqual(27, 27)
//   .toBeNaN(NaN)
// // //     // .toBeNegativeInfinity() // TODO:

// // //     // .toBePending()

// // //     // .toBeRegExp()

// // //     // async
// //     // .toBeRejected(new Promise((resolve, reject) => { reject('test'); }))
// // //     .toBeRejectedWith(new Promise((resolve, reject) => { reject('test'); }), 'test')
// // //     // .toBeRejectedWithError(new Promise((resolve, reject) => { reject('test'); }), ) // TODO:
// // //     .toBeResolved(new Promise((resolve, reject) => { resolve('test'); }))
// // //     .toBeResolvedTo(new Promise((resolve, reject) => { resolve('test'); }), 'test')

//   .toBeString(`String`)
//   .toBeStringIncludes(`String Number`, [`String`])
//   .toBeStringIncludesSome(`String Number Map`, [`Map`])
//   .toBeStringOfLength(`123456789`, 9)
//   .toBeStringOfLengthBetween(`toBeInstanceOfReferenceError`, 27, 37)
//   .toBeStringType(`String`)
//   .toBeSymbol(Symbol(`Symbol`))
//   .toBeTrue(true)
//   .toBeTruthy(true)
//   .toBeUndefined(undefined)
//   .toContain(`String Number`, `Number`)
//   .toEqual(`String`, `String`)
    

//   // .toHaveBeenCalledBefore()
//   // .toHaveBeenCalledOnceWith()
//   // .toHaveBeenCalledTimes()
//   // .toHaveBeenCalledWith()

//   // .toHaveClass()
//   // .toHaveSize()
//   // .toHaveSpyInteractions()
//   // .toMatch()
//   // .toThrow()
//   // .toThrowError()
//   // .toThrowMatching()

// );


//   // Suite.
//   // .it('ExpectToHaveBeenCalled', () => {
//   //   test.test();
//   //   // t.expect.to.have.been.called.called(test.test);

//   //   t.expect.toHaveBeenCalled(test.test);

//   //   test.test({a: 1});
//   //   t.expect.toHaveBeenCalledWith(test.test, {a: 1});
//   //   t.expect.to.have.been.called.with(test.test, {a: 1});
//   // })

// // t.describe(`Testing has method with expectation`, () => {
// //   t.beforeEach(() => {
// //     spyOn(test, 'test');
// //     arr = ['a', 'b', 'c'];
// //   })

// //   .assertion(e => e.toBeArray(arr).not.toBeBigInt(arr).not.toBeBoolean(arr).toBeArray(arr))
// //   .assertion(e => (test.test(), e.toHaveBeenCalled(test.test)))
// //   .assertion(e => (test.test({a: 1}), e.toHaveBeenCalledWith(test.test, {a: 1})))

// // });