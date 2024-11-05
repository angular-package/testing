import { is } from '@angular-package/type';
// Class.
import { Testing } from "./main";
/**
 * Initialize testing.
 */
const t = new Testing(
  true, // Disallows executing the `describe()` method globally.
  true, // Disallows executing the `it()` method globally.
  {
    // describe: [1, 2, 3, 5], // Executable unique numbers of `describe()` methods to execute when global executing is disallowed.
    // it: [1], // Executable unique numbers of `it()` methods inside the `describe()` to execute when global executing is disallowed.
  },
  true
);

/**
 * Testing.defineDescribe()
 */
const testingDescribe = Testing.defineDescribe('defineDescribe()', () => {
  const numberSpec = Testing.defineIt(
    'The value must be a number type',
    () => expect(is.number(5)).toBeTruthy(),
    3000
  );
  numberSpec(false); // Do not execute.
  numberSpec(false); // Execute.
});

testingDescribe(false); // Do not execute.

/**
 * describe().
 */
// testing.describe(
//   '[counter] describe()',
//   () => {},
//   false // Whether or not execute suite
// );

/**
 * it().
 */
t.describe(
  '[counter] describe()',
  () =>
    t.it(
      '[counter] it()',
      () => expect(true).toBeTruthy(),
      false // Whether or not execute spec
    ),
  false // Whether or not execute suite
);

/**
 * toBe()
 */
t.describe('string', () => {
  t.toBe(
    is.stringType('my name'),
    true,
    undefined,
    `Checks the value against the string`,
  );
});

/**
 * toBeBigInt()
 */
t.describe('bigint', () => t.toBeBigInt(1n));

/**
 * toBeBooleanType()
 */
t.describe('boolean', () => t.toBeBooleanType(false));

/**
 * toBeClass()
 */
t.describe('class Person', () => {
  class Person {}
  t.toBeClass(Person);
});

/**
 * toBeInstanceOfArray()
 */
t.describe('Array', () => t.toBeInstanceOfArray(['1']));

/**
 * toBeInstanceOfBoolean()
 */
t.describe('Boolean', () => t.toBeInstanceOfBoolean(false));

/**
 * toBeInstanceOfDate()
 */
t.describe('Date', () => t.toBeInstanceOfDate(new Date()));

/**
 * toBeInstanceOfError()
 */
t.describe('Error', () => {
  try {
    throw new Error();
  } catch (e) {
    t.toBeInstanceOfError(e);
  }
});

/**
 * toBeInstanceOfFunction()
 */
t.describe(`Function`, () => t.toBeInstanceOfFunction(() => {}));

/**
 * toBeInstanceOfMap()
 */
t.describe(`Map`, () => t.toBeInstanceOfMap(new Map()));

/**
 * toBeInstanceOfNumber()
 */
t.describe(`Number`, () => t.toBeInstanceOfNumber(new Number(27)));

/**
 * toBeInstanceOfObject()
 */
t.describe(`Object`, () =>
  t.toBeInstanceOfObject(new Object({})).toBeInstanceOfObject({})
);

/**
 * Promise.
 */
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
    // reject('foo');
  }, 300);
});
t.describe(`Promise`, () => t.toBeInstanceOfPromise(myPromise));

/**
 * toBeInstanceOfRangeError()
 */
t.describe('RangeError', () => {
  try {
    throw new RangeError();
  } catch (e) {
    t.toBeInstanceOfRangeError(e);
  }
});

/**
 * toBeInstanceOfReferenceError()
 */
t.describe('ReferenceError', () => {
  try {
    throw new ReferenceError();
  } catch (e) {
    t.toBeInstanceOfReferenceError(e);
  }
});

/**
 * toBeInstanceOfRegExp()
 */
t.describe(`RegExp`, () =>
  t.toBeInstanceOfRegExp(new RegExp(/[]/g))
);

/**
 * toBeInstanceOfSet()
 */
t.describe(`Set`, () => t.toBeInstanceOfSet(new Set()));

/**
 * toBeInstanceOfStorage()
 */
// t.describe(`Storage`, () =>
//   t.toBeInstanceOfStorage(window.sessionStorage)
// );

/**
 * toBeInstanceOfString()
 */
t.describe(`String`, () => t.toBeInstanceOfString(new String()));

/**
 * toBeInstanceOfSyntaxError()
 */
t.describe('SyntaxError', () => {
  try {
    throw new SyntaxError();
  } catch (e) {
    t.toBeInstanceOfSyntaxError(e);
  }
});

/**
 * toBeInstanceOfTypeError()
 */
t.describe('TypeError', () => {
  try {
    throw new TypeError();
  } catch (e) {
    t.toBeInstanceOfTypeError(e);
  }
});

/**
 * toBeInstanceOfURIError()
 */
t.describe('URIError', () => {
  try {
    throw new URIError();
  } catch (e) {
    t.toBeInstanceOfURIError(e);
  }
});

/**
 * toBeInstanceOfWeakSet()
 */
t.describe(`WeakSet`, () => t.toBeInstanceOfWeakSet(new WeakSet()));

/**
 * toBeNull()
 */
t.describe(`null`, () => t.toBeNull(null));

/**
 * toBeNumberType()
 */
t.describe(`number`, () => t.toBeNumberType(5));

/**
 * toBeStringType()
 */
t.describe(`string`, () => t.toBeStringType('my name'));

/**
 * toEqual()
 */
const firstName = 'My name';
t.describe(`toEqual`, () => t.toEqual(firstName, 'My name', undefined, 'Expects `firstName` to equal to `My name`'), true);

export class ClassA {
  public propertyA = "A";
  public propertyB = "B";
  public methodA(value?: any) {
    return "methodA";
  }
  public methodB(value?: any) {
    return "methodB";
  }
  public methodC(value?: any) {
    return "methodB";
  }
}

const classA = new ClassA();

Object.assign(Object.getPrototypeOf(classA), { _propertyB: "B", _propertyA: "A" });

const el = document.createElement('div');
el.className = 'foo bar baz';

t.describe(`All methods`, () => {
  t
    .toBe("a", "a", undefined, "a")
    .toBeArray(["a", "b"])

    // toBeArrayOf
    .toBeArrayOfBigInt([BigInt(1), BigInt(2)])
    .toBeArrayOfDate([new Date()])
    .toBeArrayOfDefined(["a", "b"])
    .toBeArrayOfFalse([false, false])
    .toBeArrayOfNull([null, null])
    .toBeArrayOfRegExp([new RegExp(/a/)])
    .toBeArrayOfString(["a", "b"])
    .toBeArrayOfSymbol([Symbol("a")])
    .toBeArrayOfTrue([true, true])
    .toBeArrayOfUndefined([undefined, undefined])

    .toBeBigInt(BigInt(27))

    // Boolean
    .toBeBoolean(false)
    .toBeBooleanType(false)

    .toBeClass(class ClassC {})
    // .toBeCloseTo()
    .toBeDate(new Date())
    .toBeDefined("a")

    .toBeFalse(false)
    .toBeFalsy(false)

    .toBeFunction(() => {})

    // toBeGreaterThan
    .toBeGreaterThan(37, 27)
    .toBeGreaterThanOrEqual(37, 37)

    .toBeInstance(classA, ClassA)

    // toBeInstanceOf
    .toBeInstanceOf(classA, ClassA)
    .toBeInstanceOfArray(["a", "b"])
    .toBeInstanceOfBoolean(false)
    .toBeInstanceOfDate(new Date())
    .toBeInstanceOfError(new Error())
    .toBeInstanceOfFunction(() => {})
    .toBeInstanceOfMap(new Map([]))
    .toBeInstanceOfNumber(27)
    .toBeInstanceOfObject({})
    .toBeInstanceOfPromise(new Promise((resolve, reject) => {}))
    .toBeInstanceOfRangeError(new RangeError("error"))
    .toBeInstanceOfReferenceError(new ReferenceError("error"))
    .toBeInstanceOfRegExp(new RegExp(/a/))
    .toBeInstanceOfSet(new Set(["a"]))
    // .toBeInstanceOfStorage()
    .toBeInstanceOfString("a")
    .toBeInstanceOfSyntaxError(new SyntaxError("syntax"))
    .toBeInstanceOfTypeError(new TypeError("type"))
    .toBeInstanceOfURIError(new URIError("URI"))
    .toBeInstanceOfWeakSet(new WeakSet([]))

    .toBeKey("a")
    .toBeKey(27)
    .toBeKey(Symbol(27))


    // toBeLessThan
    .toBeLessThan(27, 37)
    .toBeLessThanOrEqual(27, 27)

    .toBeNaN(NaN)
    .toBeNegativeInfinity(-Infinity)
    .toBeNull(null)

    // toBeNumber
    .toBeNumber(27)
    .toBeNumberBetween(37, 27, 47)
    .toBeNumberType(27)

    // toBeObject
    .toBeObject(classA)
    .toBeObjectKey(classA, "propertyA")
    .toBeObjectKeyIn(classA, "propertyB")
    .toBeObjectKeys(classA, ["propertyA", "propertyB"])
    .toBeObjectKeysIn(classA, ["_propertyA", "_propertyB"])
    .toBeObjectSomeKeys(classA, ["propertyA", "propertyC", "propertyB"])

    .toBePending(new Promise((resolve, reject) => {}))
    .toBePositiveInfinity(Infinity)
    .toBeRegExp(new RegExp(/a/))

    // toBeRejected 
    .toBeRejected(new Promise((resolve, reject) => reject("a")))
    .toBeRejectedWith(new Promise((resolve, reject) => reject("a")), "a")
    .toBeRejectedWithError(new Promise((resolve, reject) => reject(new Error('Test'))), Error, "Test")

    .toBeResolved(new Promise((resolve, reject) => resolve("a")))
    .toBeResolvedTo(new Promise((resolve, reject) => resolve("a")), "a")

    // toBeString
    .toBeString("a")
    .toBeStringIncludes("a b c d e f g h", ["h", "c"])
    .toBeStringIncludesSome("a b c d e f g h", ["h", "c", "z"])
    .toBeStringOfLength("a b c d e f g h i j k l m o p r", 31)

    .toBeStringOfLengthBetween("a b c d e f g h i j k l m o p r", 17, 33)
    .toBeStringOfLengthBetween("a b c d e f g h i j k l m o p r", 17, 31)

    .toBeStringType("a b c d e f g h i j k l m o p r",)

    .toBeSymbol(Symbol("a b c d e f g h i j k l m o p r",))

    .toBeTrue(true)
    .toBeTruthy(true)

    .toBeUndefined(undefined)

    .toContain(["a", "b"], "b")

    .toEqual("a", "a")

    // toHaveBeenCalled
    .beforeEach(() => {
      spyOn(classA, "methodA");
      spyOn(classA, "methodB");
      spyOn(classA, "methodC");
      classA.methodB();
      classA.methodA();
      classA.methodA({test: 27});
      classA.methodC({test: 37});
    })
    .toHaveBeenCalled(() => classA.methodA)

    // Spy multiple methods.
    .toHaveBeenCalled(() => [classA.methodA, classA.methodB])
    .toHaveBeenCalledBefore(() => [classA.methodB, classA.methodA])
    .toHaveBeenCalledOnceWith(() => classA.methodC, {expectation: `toHaveBeenCalledOnceWith`}, {test: 37})
    .toHaveBeenCalledWith(() => classA.methodA, {expectation: `toHaveBeenCalledWith`}, {test: 27})

    // toHave
    .toHaveClass(el, 'baz')
    .toHaveSize([27, 37, 47], 3)
    .toHaveSpyInteractions(() => classA)
    .toHaveSpyInteractions(() => [classA, classA])

    .toMatch("my string", /string$/)
    .toMatch("other string", "ing")


    // toThrow
    .toThrow(() => {throw 'a'}, 'a')
    .toThrowError(() => { throw new Error('Error') }, 'Error')
    .toThrowMatching(function() { throw new Error('nope'); }, function(thrown) { return thrown.message === 'nope'; })

});


// t.describe(`All methods fails`, () => {
//   t
//     // .toBe("a", "b", undefined, "a")
//     // .toBeArray(new Map())

//     // toBeArrayOf
//     // .toBeArrayOfBigInt(["a", "b", "c"])
//     // .toBeArrayOfDate([new Date()])
//     // .toBeArrayOfDefined(["a", "b"])
//     // .toBeArrayOfFalse([false, false])
//     // .toBeArrayOfNull([null, null])
//     // .toBeArrayOfRegExp([new RegExp(/a/)])
//     // .toBeArrayOfString(["a", "b"])
//     // .toBeArrayOfSymbol([Symbol("a")])
//     // .toBeArrayOfTrue([true, true])
//     // .toBeArrayOfUndefined([undefined, undefined])

//     // .toBeBigInt(BigInt(27))

//     // // Boolean
//     // .toBeBoolean(false)
//     // .toBeBooleanType(false)

//     // .toBeClass(class ClassC {})
//     // // .toBeCloseTo()
//     // .toBeDate(new Date())
//     // .toBeDefined("a")

//     // .toBeFalse(false)
//     // .toBeFalsy(false)

//     // .toBeFunction(() => {})

//     // // toBeGreaterThan
//     // .toBeGreaterThan(37, 27)
//     // .toBeGreaterThanOrEqual(37, 37)

//     // .toBeInstance(classA, ClassA)

//     // // toBeInstanceOf
//     // .toBeInstanceOf(classA, ClassA)
//     // .toBeInstanceOfArray(["a", "b"])
//     // .toBeInstanceOfBoolean(false)
//     // .toBeInstanceOfDate(new Date())
//     // .toBeInstanceOfError(new Error())
//     // .toBeInstanceOfFunction(() => {})
//     // .toBeInstanceOfMap(new Map([]))
//     // .toBeInstanceOfNumber(27)
//     // .toBeInstanceOfObject({})
//     // .toBeInstanceOfPromise(new Promise((resolve, reject) => {}))
//     // .toBeInstanceOfRangeError(new RangeError("error"))
//     // .toBeInstanceOfReferenceError(new ReferenceError("error"))
//     // .toBeInstanceOfRegExp(new RegExp(/a/))
//     // .toBeInstanceOfSet(new Set(["a"]))
//     // // .toBeInstanceOfStorage()
//     // .toBeInstanceOfString("a")
//     // .toBeInstanceOfSyntaxError(new SyntaxError("syntax"))
//     // .toBeInstanceOfTypeError(new TypeError("type"))
//     // .toBeInstanceOfURIError(new URIError("URI"))
//     // .toBeInstanceOfWeakSet(new WeakSet([]))

//     // .toBeKey("a")
//     // .toBeKey(27)
//     // .toBeKey(Symbol(27))


//     // // toBeLessThan
//     // .toBeLessThan(27, 37)
//     // .toBeLessThanOrEqual(27, 27)

//     // .toBeNaN(NaN)
//     // .toBeNegativeInfinity(-Infinity)
//     // .toBeNull(null)

//     // // toBeNumber
//     // .toBeNumber(27)
//     // .toBeNumberBetween(37, 27, 47)
//     // .toBeNumberType(27)

//     // // toBeObject
//     // .toBeObject(classA)
//     // .toBeObjectKey(classA, "propertyA")
//     // .toBeObjectKeyIn(classA, "propertyB")
//     // .toBeObjectKeys(classA, ["propertyA", "propertyB"])
//     // .toBeObjectKeysIn(classA, ["_propertyA", "_propertyB"])
//     // .toBeObjectSomeKeys(classA, ["propertyA", "propertyC", "propertyB"])

//     // .toBePending(new Promise((resolve, reject) => {}))
//     // .toBePositiveInfinity(Infinity)
//     // .toBeRegExp(new RegExp(/a/))

//     // // toBeRejected 
//     // .toBeRejected(new Promise((resolve, reject) => reject("a")))
//     // .toBeRejectedWith(new Promise((resolve, reject) => reject("a")), "a")
//     // .toBeRejectedWithError(new Promise((resolve, reject) => reject(new Error('Test'))), Error, "Test")

//     // .toBeResolved(new Promise((resolve, reject) => resolve("a")))
//     // .toBeResolvedTo(new Promise((resolve, reject) => resolve("a")), "a")

//     // // toBeString
//     // .toBeString("a")
//     // .toBeStringIncludes("a b c d e f g h", ["h", "c"])
//     // .toBeStringIncludesSome("a b c d e f g h", ["h", "c", "z"])
//     // .toBeStringOfLength("a b c d e f g h i j k l m o p r", 31)

//     // .toBeStringOfLengthBetween("a b c d e f g h i j k l m o p r", 17, 33)
//     // .toBeStringOfLengthBetween("a b c d e f g h i j k l m o p r", 17, 31)

//     // .toBeStringType("a b c d e f g h i j k l m o p r",)

//     // .toBeSymbol(Symbol("a b c d e f g h i j k l m o p r",))

//     // .toBeTrue(true)
//     // .toBeTruthy(true)

//     // .toBeUndefined(undefined)

//     // .toContain(["a", "b"], "b")

//     // .toEqual("a", "a")

//     // // toHaveBeenCalled
//     // .beforeEach(() => {
//     //   spyOn(classA, "methodA");
//     //   spyOn(classA, "methodB");
//     //   spyOn(classA, "methodC");
//     //   classA.methodB();
//     //   classA.methodA();
//     //   classA.methodA({test: 27});
//     //   classA.methodC({test: 37});
//     // })
//     // .toHaveBeenCalled(() => classA.methodA)

//     // // Spy multiple methods.
//     // .toHaveBeenCalled(() => [classA.methodA, classA.methodB])
//     // .toHaveBeenCalledBefore(() => [classA.methodB, classA.methodA])
//     // .toHaveBeenCalledOnceWith(() => classA.methodC, {expectation: `toHaveBeenCalledOnceWith`}, {test: 37})
//     // .toHaveBeenCalledWith(() => classA.methodA, {expectation: `toHaveBeenCalledWith`}, {test: 27})

//     // // toHave
//     // .toHaveClass(el, 'baz')
//     // .toHaveSize([27, 37, 47], 3)
//     // .toHaveSpyInteractions(() => classA)
//     // .toHaveSpyInteractions(() => [classA, classA])

//     // .toMatch("my string", /string$/)
//     // .toMatch("other string", "ing")


//     // // toThrow
//     // .toThrow(() => {throw 'a'}, 'a')
//     // .toThrowError(() => { throw new Error('Error') }, 'Error')
//     // .toThrowMatching(function() { throw new Error('nope'); }, function(thrown) { return thrown.message === 'nope'; })
// });

t.describe(`Methods with not`, () => {
  t
    .toBe("a", "b", true, "a")
    .toBeArray(new Map(), false)

    // toBeArrayOf
    .toBeArrayOfBigInt(["a", "b", "c"], false)
    .toBeArrayOfDate([27], false)
    .toBeArrayOfDefined([undefined, undefined], false)

    .toBeArrayOfFalse([true, true], false)

    .toBeArrayOfNull([undefined, undefined], false)

    .toBeArrayOfRegExp(["a", "b"], false)

    .toBeArrayOfString([27, 37, 47], false)

    .toBeArrayOfSymbol([new Map(), new Map()], false)

    .toBeArrayOfTrue([false, false], false)

    .toBeArrayOfUndefined([null, null], false)

    .toBeBigInt(37, false)

    // Boolean
    .toBeBoolean(47, false)
    .toBeBooleanType(new Boolean(false), false)

    .toBeClass(new (class ClassC {}), false)
    // // .toBeCloseTo()
    .toBeDate('20.20.2024', false)
    .toBeDefined(undefined, false)

    .toBeFalse(null, false)
    .toBeFalsy("a", false)

    .toBeFunction(class ClassB {}, false)

    // toBeGreaterThan
    .toBeGreaterThan(47, 37, false)
    .toBeGreaterThanOrEqual(47, 37, false)

    .toBeInstance(classA, class ClassB {}, false)

    // toBeInstanceOf
    .toBeInstanceOf(classA, class ClassB {}, true)
    .toBeInstanceOfArray(new Map(), false)
    .toBeInstanceOfBoolean(new Boolean(false), false)
    .toBeInstanceOfDate('20.20.2024', false)
    .toBeInstanceOfError("Error", false)
    .toBeInstanceOfFunction(null, false)
    .toBeInstanceOfMap([27, 37], false)
    .toBeInstanceOfNumber(BigInt(27), false)
    .toBeInstanceOfObject('a', false)
    .toBeInstanceOfPromise(new WeakMap(), false)
    .toBeInstanceOfRangeError(new Error("Error"), false)
    .toBeInstanceOfReferenceError(new Error("Error"), false)
    .toBeInstanceOfRegExp("a", false)
    .toBeInstanceOfSet("b", false)
    .toBeInstanceOfString(27, false)
    .toBeInstanceOfSyntaxError(new Error("Syntax"), false)
    .toBeInstanceOfTypeError(new Error("Type"), false)
    .toBeInstanceOfURIError(new Error("URI"), false)
    .toBeInstanceOfWeakSet(new WeakMap(), false)

    .toBeKey(false, false)

    // toBeLessThan
    .toBeLessThan(37, 37, true)
    .toBeLessThanOrEqual(37, 27, true)

    .toBeNaN(Infinity, false)
    .toBeNegativeInfinity(Infinity, false)
    .toBeNull(undefined, false)

    // toBeNumber
    .toBeNumber("27", false)
    .toBeNumberBetween(37, 27, 17, false)
    .toBeNumberType("27", false)

    // toBeObject
    .toBeObject(false, false)
    .toBeObjectKey(classA, "propertyE", false)
    .toBeObjectKeyIn(classA, "propertyC", false)
    .toBeObjectKeys(classA, ["propertyA", "propertyB", "C"], false)
    .toBeObjectKeysIn(classA, ["_propertyA", "_propertyB", "_propertyC"], false)
    .toBeObjectSomeKeys(classA, ["propertyG"], false)

    .toBePending(new Promise((resolve, reject) => {resolve("a")}), true)
    .toBePositiveInfinity(-Infinity, false)
    .toBeRegExp([], false)

    // toBeRejected 
    .toBeRejected(new Promise((resolve, reject) => resolve("a")), true)
    .toBeRejectedWith(new Promise((resolve, reject) => resolve("a")), "a", true)
    .toBeRejectedWithError(new Promise((resolve, reject) => resolve(new Error('Test'))), Error, "Test", true)

    .toBeResolved(new Promise((resolve, reject) => reject("a")), true)
    .toBeResolvedTo(new Promise((resolve, reject) => reject("a")), "a", true)

    // toBeString
    .toBeString(27, false)
    .toBeStringIncludes("a b c d e f g h", ["z", "c"], false)
    .toBeStringIncludesSome("a b c d e f g h", ["x", "y", "z"], false)
    .toBeStringOfLength("a b c d e f g h i j k l m o p r", 30, false)

    .toBeStringOfLengthBetween("a b c d e f g h i j k l m o p r", 17, 18, false)

    .toBeStringType(new String("a b c d e f g h i j k l m o p r"), false)

    .toBeSymbol("a b c d e f g h i j k l m o p r", false)

    .toBeTrue(null, false)
    .toBeTruthy(undefined, false)

    .toBeUndefined(null, false)

    .toContain(["a", "b"], "c", true)

    .toEqual("a", "b", true)

    // toHaveBeenCalled
    .beforeEach(() => {
      spyOn(classA, "methodA");
      spyOn(classA, "methodB");
      spyOn(classA, "methodC");
      // classA.methodB();
      // classA.methodA();
      // classA.methodA({test: 27});
      // classA.methodC({test: 37});
    })
    .toHaveBeenCalled(() => classA.methodB, true )

    // Spy multiple methods.
    .toHaveBeenCalled(() => [classA.methodA, classA.methodB], true)
    .toHaveBeenCalledBefore(() => [classA.methodB, classA.methodA], true)
    .toHaveBeenCalledOnceWith(() => classA.methodC, {not: true, expectation: `toHaveBeenCalledOnceWith`}, {test: 37})
    .toHaveBeenCalledWith(() => classA.methodA, {not: true, expectation: `toHaveBeenCalledWith`}, {test: 27})

    // toHave
    .toHaveClass(el, 'baz27', true)
    .toHaveSize([27, 37, 47], 27, true)
    .toHaveSpyInteractions(() => classA, true)
    .toHaveSpyInteractions(() => [classA, classA], true)

    .toMatch("my", /string$/, true)
    .toMatch("other string", "xyz", true)


    // toThrow
    .toThrow(() => {throw 'a'}, 'b', true)
    .toThrowError(() => { throw new Error('Error') }, 'Syntax', true)
    .toThrowMatching(function() { throw new Error('nope'); }, function(thrown) { return thrown.message === 'xyz'; }, true)
});