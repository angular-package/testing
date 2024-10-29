# angular-package

<a href='https://angular-package.dev' target='_blank'>
  <img align="right"  width="92" height="92" src="https://avatars.githubusercontent.com/u/31412194?s=400&u=c9929aa36826318ccac8f7b84516e1ce3af7e21c&v=4" />
</a>

The angular-package supports the development process of [angular](https://angular.io)-based applications in varied ways through the thoughtful, reusable, easy-to-use small pieces of code called packages.

<br>

<a href="https://jasmine.github.io/">
  <img src="https://raw.githubusercontent.com/angular-package/testing/5f7317739d3e1b678e09a49cb2c3fa6e8b9049b1/logo/Jasmine.svg" width="200" height="122" />
</a>

## Testing

@angular-package/testing

Jasmine unit testing wrapper with additional custom testing features.

[![Gitter][gitter-badge]][gitter-chat]
[![Discord][discord-badge]][discord-channel]
[![Twitter][twitter-badge]][twitter-follow]
<!-- npm badge -->
[![npm version][testing-npm-badge-svg]][testing-npm-badge]
<!-- GitHub badges -->
[![GitHub issues][testing-badge-issues]][testing-issues]
[![GitHub forks][testing-badge-forks]][testing-forks]
[![GitHub stars][testing-badge-stars]][testing-stars]
[![GitHub license][testing-badge-license]][testing-license]
<!-- Sponsors badges -->
[![GitHub sponsors][github-badge-sponsor]][github-sponsor-link]
[![Support me on Patreon][patreon-badge]][patreon-link]

<br>

## Table of contents

* [Basic concepts](#basic-concepts)
* [Skeleton](#skeleton)
* [Installation](#installation)
* [Api](#api)
* [Usage](#usage)
* [Features](#features)
  * [Expectations](#expectations)
  * [It](#it)
    * [Nested](#nested)
    * [Standalone](#standalone)
* [Changelog](#changelog)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

<br>

## Basic concepts

Checks
> It's to check the provided value to be **the same** as **expected**.

Type guard (constrain)
> Constrains the parameter type to **not let** input **unexpected** value in the **code editor**.

Guards
> It's a **combination** of both above, **constrains** the type of the parameter in the **code editor**, and checks its provided argument.

Defines
> Returns defined value from a method of an object.  
> Defines new value in an object and returns a defined value.  

Gets
> Returns a value from an object.

Sets
> Adds or updates an element with a specified key and a value to an object and returns an object.  

<br>

## Skeleton

This package was built by the [library skeleton][skeleton] which was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

Copy this package to the `packages/testing` folder of the [library skeleton][skeleton] then run the commands below.

### Build

Run `ng build testing` to build the package. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test testing` to execute the unit tests via [Karma](https://karma-runner.github.io).

<br>

## Installation

Install `@angular-package/testing` package with command:

```bash
npm i --save @angular-package/testing
```

<br>

## Api

```typescript
/**
 * Main.
 */
export {
  // Class.
  Testing,
  TestingActual,

  // Class to handle `describe`, `it`, `expect` of jasmine.
  TestingCore,

  // Class to customize testing.
  TestingCustom,

  // Class to handle `describe()` function of jasmine.
  TestingDescribe,

  // Class to handle `expect()` function of jasmine.
  TestingExpect,

  // Abstract class to handle executable tests.
  TestingExecutable,

  // Full named expectations. Methods with `expect()` + jasmine matchers.
  TestingExpectation,

  // Class to handle `it()` function of jasmine.
  TestingIt,
} from '@angular-package/testing';

// Specific expectations.
export {
  TestingExpectTo,
  TestingExpectToBe,
  TestingExpectToBeArrayOf,
  TestingExpectToBeInstanceOf,
  TestingExpectToHave,
  TestingExpectToHaveBeen,
  TestingExpectToHaveBeenCalled,
  TestingExpectToThrow,
} from '@angular-package/testing';

// Methods with `it()` function of jasmine.
export {
  TestingItTo,
  TestingItToBe,
  TestingItToBeArrayOf,
  TestingItToBeInstanceOf,
  TestingItToHave,
  TestingItToHaveBeen,
  TestingItToHaveBeenCalled,
  TestingItToThrow,
} from '@angular-package/testing';

// Testing for customization.
export {
  TestingTo,
  TestingToBe,
  TestingToBeArrayOf,
  TestingToBeBoolean,
  TestingToBeGreaterThan,
  TestingToBeInstanceOf,
  TestingToBeLessThan,
  TestingToBeNumber,
  TestingToBeObject,
  TestingToBeString,
  TestingToHave,
  TestingToThrow,
} from '@angular-package/testing';
```

```typescript
// Helper constants.
import {
  // Example class for testing.
  TestingClass,
  TestingPerson,

  // Array.
  TESTING_ARRAY_BIGINT,
  TESTING_ARRAY_BOOLEAN,
  TESTING_ARRAY_CLASS,
  TESTING_ARRAY_FUNCTION,
  TESTING_ARRAY_NULL,
  TESTING_ARRAY_NUMBER,
  TESTING_ARRAY_OBJECT_ONE,
  TESTING_ARRAY_STRING,
  TESTING_ARRAY_SYMBOL_NUMBER,
  TESTING_ARRAY_SYMBOL_STRING,
  TESTING_ARRAY_UNDEFINED,
  // BigInt
  TESTING_BIGINT,
  // Class.
  TESTING_CLASS,
  TESTING_PERSON,
  // Date.
  TESTING_DATE,
  // Boolean.
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
  // Function.
  TESTING_FUNCTION,
  TESTING_FUNCTION_CONSTRUCTOR,
  TESTING_FUNCTION_CONSTRUCTOR_PERSON,
  // null.
  TESTING_NULL,
  // Number.
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
  // Object.
  TESTING_OBJECT,
  // RegExp.
  TESTING_REGEXP,
  // String.
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
  TESTING_STRING_INSTANCE,
  // Symbol.
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  // Undefined.
  TESTING_UNDEFINED,
} from '@angular-package/testing';
```

```typescript
import {
  // Interface. 
  TestingObject,
  TestingPersonShape
} from '@angular-package/testing';
```

<br>

## Usage

### `Testing`

Use `Testing` class for testing.

```typescript
import { Testing } from "@angular-package/testing";


```

### `TestingCustom`

Use `TestingCustom` class for custom testing.

```typescript
import { TestingDescribe, TestingCustom, TestingIt, TestingToBe } from "@angular-package/testing";

const t = new TestingCustom(
  [TestingToBe], // List of test.
  true, // Describe executable.
  true, // It executable.
  { describe: [], it: [] }, // Executable numbers of `describe` and `it`.
  ['DescribeA'], // Descriptions for `describe`.
  ['ItA'], // Expectations for `it`.
  [false, false], // `boolean` or list of [`boolean`, `boolean`]
  new TestingDescribe(), // Instance for `TestingDescribe` for `counter` purposes
  new TestingIt()  // Instance for `TestingIt` for `counter` purposes
);
```

<br>

## Features

### Expectations

Expectation is a method built from `expect()` and `jasmine` matcher.

```typescript
expect(expect).matcher(expected)
```

```typescript
import { TestingExpectation } from "@angular-package/testing";
```

Jasmine matchers in use.

- [x] `toBe()`
- [x] `toBeCloseTo()`
- [x] `toBeDefined()`
- [x] `toBeFalse()`
- [x] `toBeFalsy()`
- [x] `toBeGreaterThan()`
- [x] `toBeGreaterThanOrEqual()`
- [x] `toBeInstanceOf()`
- [x] `toBeLessThan()`
- [x] `toBeLessThanOrEqual()`
- [x] `toBeNaN()`
- [x] `toBeNegativeInfinity()`
- [x] `toBeNull()`
- [x] `toBePositiveInfinity()`
- [x] `toBeTrue()`
- [x] `toBeTruthy()`
- [x] `toBeUndefined()`
- [x] `toContain()`
- [x] `toEqual()`
- [x] `toHaveBeenCalled()`
- [x] `toHaveBeenCalledBefore()`
- [x] `toHaveBeenCalledOnceWith()`
- [x] `toHaveBeenCalledTimes()`
- [x] `toHaveBeenCalledWith()`
- [x] `toHaveClass()`
- [x] `toHaveSize()`
- [x] `toHaveSpyInteractions()`
- [x] `toMatch()`
- [x] `toThrow()`
- [x] `toThrowError()`
- [x] `toThrowMatching()`

Expectations based on the `instanceOf` matcher of `jasmine`.

- [x] `toBeInstanceOfArray()`
- [x] `toBeInstanceOfBoolean()`
- [x] `toBeInstanceOfDate()`
- [x] `toBeInstanceOfError()`
- [x] `toBeInstanceOfFunction()`
- [x] `toBeInstanceOfMap()`
- [x] `toBeInstanceOfNumber()`
- [x] `toBeInstanceOfObject()`
- [x] `toBeInstanceOfPromise()`
- [x] `toBeInstanceOfRangeError()`
- [x] `toBeInstanceOfReferenceError()`
- [x] `toBeInstanceOfRegExp()`
- [x] `toBeInstanceOfSet()`
- [ ] `toBeInstanceOfStorage()`
- [x] `toBeInstanceOfString()`
- [x] `toBeInstanceOfSyntaxError()`
- [x] `toBeInstanceOfTypeError()`
- [x] `toBeInstanceOfURIError()`
- [x] `toBeInstanceOfWeakSet()`

Expectations based on the `is` of `@angular-package/type` and `toBe()` matcher of `jasmine`.

- [x] `toBeArray()`
- [x] `toBeBigInt()`
- [x] `toBeBoolean()`
- [x] `toBeBooleanType()`
- [x] `toBeClass()`
- [x] `toBeDate()`
- [x] `toBeFunction()`
- [x] `toBeInstance()`
- [x] `toBeKey()`

Number

- [x] `toBeNumber()`
- [x] `toBeNumberBetween()`
- [x] `toBeNumberType()`

Object

- [x] `toBeObject()`
- [x] `toBeObjectKey()`
- [x] `toBeObjectKeyIn()`
- [x] `toBeObjectKeys()`
- [x] `toBeObjectKeysIn()`
- [x] `toBeObjectSomeKeys()`

String

- [x] `toBeString()`
- [x] `toBeStringIncludes()`
- [x] `toBeStringIncludesSome()`
- [x] `toBeStringOfLength()`
- [x] `toBeStringOfLengthBetween()`
- [x] `toBeStringType()`

Other

- [x] `toBeRegExp()`
- [x] `toBeSymbol()`
- [x] `toBeTypeOf()`

Expectations based on the `are` of `@angular-package/type` and `toBe()` matcher of `jasmine`.

- [x] `toBeArrayOfBigInt()`
- [x] `toBeArrayOfBoolean()`
- [x] `toBeArrayOfDate()`
- [x] `toBeArrayOfDefined()`
- [x] `toBeArrayOfFalse()`
- [x] `toBeArrayOfNull()`
- [x] `toBeArrayOfNumber()`
- [x] `toBeArrayOfRegExp()`
- [x] `toBeArrayOfString()`
- [x] `toBeArrayOfSymbol()`
- [x] `toBeArrayOfTrue()`
- [x] `toBeArrayOfUndefined()`

### It

Prepared specs `it` of `jasmine` built. Spec is a method built from `it` with expectation - `expect()` and `jasmine` matcher.

```typescript
it(description, () => expect(expect).matcher(expected))
```

### Nested

It methods accessed by using nested object structure and method names.

### `TestingItTo`

Prepared `it` tests of `jasmine`.

```typescript
import { TestingItTo } from "@angular-package/testing";

const t = new TestingItTo();

// `to{Method}`
t.describe('TestingItTo', () => t
  .contain(['a', 'b', 'c'], 'b')
  .equal(['27', 37, 47], ['27', 37, 47])
  .match("my string", /string$/)
  .match("other string", "ing")
);

// `toBe{Method}`
t.describe('TestingItTo', () => t.be
  .array([27, 37])
  .key(74)
);

// `toBeArrayOf{Method}`
t.describe('TestingItTo', () => t.be.arrayof
  .boolean([false, false])
  .date([new Date(), new Date()])
);

// `toBeBoolean{Method}`
t.describe('TestingItTo', () => t.be.boolean
  .boolean(false)
  .type(false)
);

// `toBeInstanceOf{Method}`
t.describe('TestingItTo', () => t.be.instanceof
  .array([27, 37])
  .map(new Map())
);

// `toHave{Method}`
t.describe('TestingItTo', () => t.have
  .size([27, 37], 2)
);

// `toHaveBeenCalled{Method}`
class ClassA {
  methodA(value?: any) {
    return "methodA";
  }
  methodB(value?: any) {
    return "methodB";
  }
}
let classA: ClassA;
t.describe('TestingItTo', () => t.have.been.called
  .beforeEach(() => {
    classA = new ClassA();
    spyOn(classA, "methodA");
    classA.methodA();
    spyOn(classA, "methodB");
    classA.methodB();
  })
  .called(() => classA.methodA)
  // multiple calls
  .called(() => [classA.methodA, classA.methodB])
);

// `toThrow{Method}`
t.describe('TestingItTo', () => t.throw
  .error(function() { throw new Error('Error') }, 'Error')
  .matching(function() { throw new Error('nope'); }, function(thrown) { return thrown.message === 'nope'; })
  .throw(function() { throw 'things'; }, 'things')
);
```

It under specific getter

- [x] `get be(): TestingItToBe`
- [x] `get have(): TestingItToHave`
- [x] `get throw(): TestingItToThrow`

Method

- [x] `contain()`
- [x] `equal()`
- [x] `match()`

### `TestingItToBe`

```typescript
import { TestingItToBe } from "@angular-package/testing";

const t = new TestingItToBe();

t.describe(`TestingItToBe`, () => {
  t
    .arrayof
    .bigint([BigInt(27)])

  t
    .boolean
    .boolean([true, false])
    .type([true, false]);

  t
    .instanceof

  t
    .array([27, 37])
    .bigInt([BigInt(27)])
    .class(t)
    .date(new Date())
    .defined('a')
    .false(false)
    .falsy(false)
    .function(() => {})
    .greaterThan(37, 27)
    .greaterThanOrEqual(37, 37)
    .instance(t, TestingItToBe)
    .instanceOf(t, TestingItToBe)
    .key('PropertyKey')
    .lessThan(37, 47)
    .lessThanOrEqual(47, 47)
    .naN(NaN)
    .negativeInfinity(-Infinity)
    .null(null)
    .number(47)
    .numberBetween(37, 27, 47)
    .numberType(37)
    .object({})
    .objectKey({a: 1}, "a")
    .objectKeyIn(t, "except")

    .objectKeys({a: 1, b: 2}, ["a", "b"])
    .objectKeysIn(t, ["except"])
    // .objectSomeKeys()
    .pending(new Promise((resolve, reject) => {}))

    .positiveInfinity(Infinity)
    .regExp(new RegExp(/a/))
    .rejected(new Promise((resolve, reject) => { reject("a") }))
    .rejectedWith(new Promise((resolve, reject) => { reject("a")}), "a")
    .rejectedWithError(new Promise((resolve, reject) => { throw new Error("Error") }), Error, "Error")

    .resolved(new Promise((resolve, reject) => { resolve("a") }))
    .resolvedTo(new Promise((resolve, reject) => { resolve("a") }), "a")

    .string("a")
    .stringIncludes("a b c d", ["d"])
    .stringIncludesSome(" a b  c d ", ["a", "e", "c"])
    .stringOfLength("a b c d e f g h i j k l m n o p r s", 18)
    .stringOfLengthBetween("a b c d e f g h i j k l m n o p r s", 17, 18)
    .stringType("a b c d e f")
});
```

It under specific getter

- [x] `get arrayof(): TestingItToBeArrayOf`
- [x] `get boolean(): TestingItToBeBoolean`
- [x] `get instanceof(): TestingItToBeInstanceOf`

Method

- [x] `be()`
- [x] `array()`
- [x] `bigInt()`
- [x] `class()`
- [x] `closeTo()`
- [x] `date()`
- [x] `defined()`
- [x] `false()`
- [x] `falsy()`
- [x] `function()`
- [x] `greaterThan()`
- [x] `greaterThanOrEqual()`
- [x] `instance()`
- [x] `instanceOf()`
- [x] `key()`
- [x] `lessThan()`
- [x] `lessThanOrEqual()`
- [x] `naN()`
- [x] `negativeInfinity()`
- [x] `null()`
- [x] `number()`
- [x] `numberBetween()`
- [x] `numberType()`
- [x] `object()`
- [x] `objectKey()`
- [x] `objectKeyIn()`
- [x] `objectKeys()`
- [x] `objectKeysIn()`
- [x] `objectSomeKeys()`
- [x] `positiveInfinity()`
- [x] `regExp()`
- [x] `pending()`
- [x] `rejected()`
- [x] `rejectedWith()`
- [x] `rejectedWithError()`
- [x] `resolved()`
- [x] `resolvedTo()`
- [x] `string()`
- [x] `stringIncludes()`
- [x] `stringIncludesSome()`
- [x] `stringOfLength()`
- [x] `stringOfLengthBetween()`
- [x] `stringType()`
- [x] `symbol()`
- [x] `true()`
- [x] `truthy()`
- [x] `undefined()`

### `TestingItToBeArrayOf`

```typescript
import { TestingItToBeArrayOf } from "@angular-package/testing";

const t = new TestingItToBeArrayOf();

t.describe(`TestingItToBeArrayOf`, () => t
  .bigint([BigInt(27), BigInt(37), BigInt(47)])
  .boolean([false, true, false, false, true])
  .date([new Date(), new Date(), new Date(), new Date()])
  .defined(['b', 'c', 'd', 'e'])
  .false([false, false, false, false, false])
  .null([null, null, null])
  .number([27, 37, 47])
  .regExp([new RegExp('a'), new RegExp(/a/), new RegExp('b')])
  .string(['a', 'b', 'c'])
  .symbol([Symbol(27), Symbol('a'), Symbol('b')])
  .true([true, true, true])
  .undefined([undefined, undefined, undefined])
);
```

Method

- [x] `bigint()`
- [x] `boolean()`
- [x] `date()`
- [x] `defined()`
- [x] `false()`
- [x] `null()`
- [x] `number()`
- [x] `regExp()`
- [x] `string()`
- [x] `symbol()`
- [x] `true()`
- [x] `undefined()`

### `TestingItToBeBoolean`

```typescript
import { TestingItToBeBoolean } from "@angular-package/testing";

```

Method

- [x] `boolean()`
- [x] `type()`

### `TestingItToBeInstanceOf`

```typescript
import { TestingItToBeInstanceOf } from "@angular-package/testing";

const t = new TestingItToBeInstanceOf();

t.describe(`TestingItToBeInstanceOf`, () => t
  .array(['a', 'b', 'c'])
  .boolean(false)
  .date(new Date())
  .error(new Error())
  .function(function() {})
  .map(new Map())
  .number(new Number(27))
  .object(new Object({}))
  .promise(new Promise((resolve, reject) => { resolve('a') }))
  .rangeError(new RangeError('range error'))
  .referenceError(new ReferenceError('reference'))
  .regExp(new RegExp('a'))
  .set(new Set('a'))
  // .storage()
  .string('a')
  .syntaxError(new SyntaxError('syntax error'))
  .typeError(new TypeError('type error'))
  .weakSet(new WeakSet())
);  
```

Method

- [x] `array()`
- [x] `boolean()`
- [x] `date()`
- [x] `error()`
- [x] `function()`
- [x] `map()`
- [x] `number()`
- [x] `object()`
- [x] `promise()`
- [x] `rangeError()`
- [x] `referenceError()`
- [x] `regExp()`
- [x] `set()`
- [ ] `storage()`
- [x] `string()`
- [x] `syntaxError()`
- [x] `typeError()`
- [x] `URIError()`
- [x] `weakMap()`
- [x] `weakSet()`

### `TestingItToHave`

```typescript
import { TestingItToHave } from "@angular-package/testing";

const t = new TestingItToHave();

const el = document.createElement('div');
el.className = 'foo bar baz';

class ClassA {
  public methodA() {
    return "methodA";
  }
}
const classA = new ClassA();

t.describe('TestingItToHave', () => t
  .beforeEach(() => {
    spyOn(classA, "methodA");
    classA.methodA();
  })
  .class(el, 'bar')
  .size(['a', 'b'], 2)
  .spyInteractions(classA)
);
```

- [x] `URIError()`
- [x] `URIError()`

### `TestingItToHaveBeen`

```typescript
import { TestingItToHaveBeen } from "@angular-package/testing";
```

### `TestingItToHaveBeenCalled`

Prepared `toThrow` tests.

```typescript
import { TestingItToHaveBeenCalled } from "@angular-package/testing";

const t = new TestingItToThrow();

t.describe('TestingItToThrow', () => t
  .error(function() { throw new Error('Error') }, 'Error')
  .matching(
    function() { throw new Error('nope'); },
    function(thrown) { return thrown.message === 'nope'; }
  )
  .throw(function() { throw 'things'; }, 'things')
);
```

Method

- [x] `before()`
- [x] `called()`
- [x] `onceWith()`
- [x] `with()`

### `TestingItToThrow`

Method

- [x] `error()`
- [x] `matching()`
- [x] `throw()`

### Standalone

`it` methods directly accessed by using method names instead of nested structure, but using it.

<br>

## Changelog

The **changelog** of this package is based on [*keep a changelog*](https://keepachangelog.com/en/1.0.0/). To read it, click on the [CHANGELOG.md](https://github.com/angular-package/testing/blob/main/CHANGELOG.md) link.

> A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of a project. - [*keep a changelog*](https://keepachangelog.com/en/1.0.0/)

<br>

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][git-commit-angular]
* [Karma Git Commit Msg][git-commit-karma]
* [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular-package ([license][testing-license])

## Packages

Useful and simple packages.

| Package                                      | Description                                                       | Status |
| :------------------------------------------- | :---------------------------------------------------------------- | -----: |
| [callback][callback-github-readme]           | Manages the callback [`function`][js-function].                   | [![npm version][callback-npm-badge-png]][callback-npm-badge] |
| [change-detection][cd-github-readme]         | Improves application performance.                                 | [![npm version][cd-npm-badge-png]][cd-npm-badge] |
| [component-loader][cl-github-readme]         | Handles dynamic loading components.                               | [![npm version][cl-npm-badge-png]][cl-npm-badge] |
| [core][core-github-readme]                   | Core features.                                                    | [![npm version][core-npm-badge-png]][core-npm-badge] |
| [error][error-github-readme]                 | Manages an [`Error`][js-error].                                   | [![npm version][error-npm-badge-png]][error-npm-badge] |
| [indexeddb][indexeddb-github-readme]         | Wrapper to IndexedDB client-side storage.                         | [![npm version][indexeddb-npm-badge-png]][indexeddb-npm-badge] |
| name                                         | The name with prefix and suffix.                                  | ![inprogress] |
| preferences                                  | Preferences, settings, options, configuration and setup in steps. | ![inprogress] |
| [prism][prism-github-readme]                 | [`Prism`][prism-js] highlighter module.                           | [![npm version][prism-npm-badge-png]][prism-npm-badge] |
| [property][property-github-readme]           | Handles object properties.                                        | [![npm version][property-npm-badge-png]][property-npm-badge] |
| [range][range-github-readme]                 | The range between a minimum and maximum.                          | [![npm version][range-npm-badge-png]][range-npm-badge] |
| [reactive][reactive-github-readme]           | Automatize the process of creating some rxjs features.            | [![npm version][reactive-npm-badge-png]][reactive-npm-badge] |
| [sass][sass-github-readme]                   | Extension for sass modules and new modules.                       | [![npm version][sass-npm-badge-png]][sass-npm-badge] |
| [sass-list][sass-list-github-readme]         | Modified list Sass module.                                        | [![npm version][sass-list-npm-badge-png]][sass-list-npm-badge] |
| [sass-string][sass-string-github-readme]     | Modified string Sass module.                                      | [![npm version][sass-string-npm-badge-png]][sass-string-npm-badge] |
| [spectre.css][spectrecss-github-readme]      | Modified Spectre.css - a lightweight, responsive, and modern CSS framework originally designed by Yan Zhu. | [![npm version][spectrecss-npm-badge-png]][spectrecss-npm-badge] |
| storage                                      | The storage of data under allowed names.                          | ![inprogress] |
| tag                                          | Any tag with optional attributes.                                 | ![inprogress] |
| [testing][testing-github-readme]             | Support for testing other packages.                               | [![npm version][testing-npm-badge-png]][testing-npm-badge] |
| text                                         | Text on the template with replaceable tags.                       | ![inprogress] |
| [type][type-github-readme]                   | Common types, type guards, and type checkers.                     | [![npm version][type-npm-badge-png]][type-npm-badge] |
| [ui][ui-github-readme]                       | User interface.                                                   | [![npm version][ui-npm-badge-png]][ui-npm-badge] |
| [wrapper][wrapper-github-readme]             | Wrap the text with the opening and closing chars.                 | [![npm version][wrapper-npm-badge-png]][wrapper-npm-badge] |

Click on the package name to visit its [GitHub](https://github.com/) page.

<!-- Funding -->
[github-badge-sponsor]: https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/angular-package
[github-sponsor-link]: https://github.com/sponsors/angular-package
[patreon-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dsciborrudnicki%26type%3Dpatrons&style=flat
[patreon-link]: https://patreon.com/sciborrudnicki

[angulario]: https://angular.io
[skeleton]: https://github.com/angular-package/skeleton

<!-- Update status -->
[experimental]: https://img.shields.io/badge/-Experimental-orange
[fix]: https://img.shields.io/badge/-fix-red
[new]: https://img.shields.io/badge/-new-green
[update]: https://img.shields.io/badge/-update-red
[inprogress]: https://img.shields.io/badge/-In%20progress-gray
[documentation]: https://img.shields.io/badge/-Documentation-informational
[demonstration]: https://img.shields.io/badge/-Demonstration-green

<!-- Discord -->
[discord-badge]: https://img.shields.io/discord/925168966098386944
[discord-channel]: https://discord.com/channels/925168966098386944/925168966098386948

<!-- Gitter -->
[gitter-badge]: https://badges.gitter.im/angularpackage/Lobby.svg
[gitter-chat]: https://gitter.im/angularpackage/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge

<!-- Twitter -->
[twitter-badge]: https://img.shields.io/twitter/url?style=social&label=Follow%20%40angularpackage&url=https%3A%2F%2Ftwitter.com%2Fangularpackage
[twitter-follow]: https://twitter.com/angularpackage

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/

<!-- This package: testing  -->
  <!-- GitHub: badges -->
  [testing-badge-issues]: https://img.shields.io/github/issues/angular-package/testing
  [testing-badge-forks]: https://img.shields.io/github/forks/angular-package/testing
  [testing-badge-stars]: https://img.shields.io/github/stars/angular-package/testing
  [testing-badge-license]: https://img.shields.io/github/license/angular-package/testing
  <!-- GitHub: badges links -->
  [testing-issues]: https://github.com/angular-package/testing/issues
  [testing-forks]: https://github.com/angular-package/testing/network
  [testing-license]: https://github.com/angular-package/testing/blob/master/LICENSE
  [testing-stars]: https://github.com/angular-package/testing/stargazers
<!-- This package -->

<!-- Package: callback -->
  <!-- npm -->
  [callback-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcallback.svg
  [callback-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcallback.png
  [callback-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcallback
  [callback-npm-readme]: https://www.npmjs.com/package/@angular-package/callback#readme

  <!-- GitHub -->
  [callback-github-readme]: https://github.com/angular-package/callback#readme

  [package-callback-resultcallback]: https://github.com/angular-package/callback#resultcallback

<!-- Package: change-detection -->
  <!-- npm -->
  [cd-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.svg
  [cd-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.png
  [cd-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fchange-detection
  [cd-npm-readme]: https://www.npmjs.com/package/@angular-package/change-detection#readme

  <!-- GitHub -->
  [cd-github-readme]: https://github.com/angular-package/change-detection#readme

<!-- Package: component-loader -->
  <!-- npm -->
  [cl-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.svg
  [cl-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.png
  [cl-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader
  [cl-npm-readme]: https://www.npmjs.com/package/@angular-package/component-loader#readme

  <!-- GitHub -->
  [cl-github-readme]: https://github.com/angular-package/component-loader#readme

<!-- Package: core -->
  <!-- npm -->
  [core-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcore.svg
  [core-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcore.png
  [core-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcore
  [core-npm-readme]: https://www.npmjs.com/package/@angular-package/core#readme

  <!-- GitHub -->
  [core-github-readme]: https://github.com/angular-package/core#readme

<!-- Package: error -->
  <!-- npm -->
  [error-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ferror.svg
  [error-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ferror.png
  [error-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ferror
  [error-npm-readme]: https://www.npmjs.com/package/@angular-package/error#readme

  <!-- GitHub -->
  [error-github-readme]: https://github.com/angular-package/error#readme

<!-- Package: indexeddb -->
  <!-- npm -->
  [indexeddb-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Findexeddb.svg
  [indexeddb-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Findexeddb.png
  [indexeddb-npm-badge]: https://badge.fury.io/js/%40angular-package%2Findexeddb
  [indexeddb-npm-readme]: https://www.npmjs.com/package/@angular-package/indexeddb#readme

  <!-- GitHub -->
  [indexeddb-github-readme]: https://github.com/angular-package/indexeddb#readme

<!-- Package: name -->
  <!-- npm -->
  [name-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fname.svg
  [name-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fname.png
  [name-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fname
  [name-npm-readme]: https://www.npmjs.com/package/@angular-package/name#readme

  <!-- GitHub -->
  [name-github-readme]: https://github.com/angular-package/name#readme

<!-- Package: preferences -->
  <!-- npm -->
  [preferences-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fpreferences.svg
  [preferences-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fpreferences.png
  [preferences-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fpreferences
  [preferences-npm-readme]: https://www.npmjs.com/package/@angular-package/preferences#readme

  <!-- GitHub -->
  [preferences-github-readme]: https://github.com/angular-package/preferences#readme

<!-- Package: prism -->
  <!-- npm -->
  [prism-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fprism.svg
  [prism-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fprism.png
  [prism-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fprism
  [prism-npm-readme]: https://www.npmjs.com/package/@angular-package/prism#readme

  <!-- GitHub -->
  [prism-github-readme]: https://github.com/angular-package/prism#readme

<!-- Package: property -->
  <!-- npm -->
  [property-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fproperty.svg
  [property-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fproperty.png
  [property-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fproperty
  [property-npm-readme]: https://www.npmjs.com/package/@angular-package/property#readme

  <!-- GitHub -->
  [property-github-readme]: https://github.com/angular-package/property#readme

<!-- Package: range -->
  <!-- npm -->
  [range-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Frange.svg
  [range-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Frange.png
  [range-npm-badge]: https://badge.fury.io/js/%40angular-package%2Frange
  [range-npm-readme]: https://www.npmjs.com/package/@angular-package/range#readme

  <!-- GitHub -->
  [range-github-readme]: https://github.com/angular-package/range#readme

<!-- Package: reactive -->
  <!-- npm -->
  [reactive-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Freactive.svg
  [reactive-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Freactive.png
  [reactive-npm-badge]: https://badge.fury.io/js/%40angular-package%2Freactive
  [reactive-npm-readme]: https://www.npmjs.com/package/@angular-package/reactive#readme

  <!-- GitHub -->
  [reactive-github-readme]: https://github.com/angular-package/reactive#readme

<!-- Package: sass -->
  <!-- npm -->
  [sass-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fsass.svg
  [sass-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fsass.png
  [sass-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fsass
  [sass-npm-readme]: https://www.npmjs.com/package/@angular-package/sass#readme

  <!-- GitHub -->
  [sass-github-readme]: https://github.com/angular-package/sass#readme

<!-- Package: sass-list -->
  <!-- npm -->
  [sass-list-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fsass-list.svg
  [sass-list-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fsass-list.png
  [sass-list-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fsass-list
  [sass-list-npm-readme]: https://www.npmjs.com/package/@angular-package/sass-list#readme

  <!-- GitHub -->
  [sass-list-github-readme]: https://github.com/angular-package/sass-string#readme

<!-- Package: sass-string -->
  <!-- npm -->
  [sass-string-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fsass-string.svg
  [sass-string-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fsass-string.png
  [sass-string-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fsass-string
  [sass-string-npm-readme]: https://www.npmjs.com/package/@angular-package/sass-string#readme

  <!-- GitHub -->
  [sass-string-github-readme]: https://github.com/angular-package/sass-string#readme

<!-- Package: spectre.css -->
  <!-- npm -->
  [spectrecss-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fspectrecss.svg
  [spectrecss-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fspectrecss.png
  [spectrecss-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fspectre.css
  [spectrecss-npm-readme]: https://www.npmjs.com/package/@angular-package/spectre.css#readme

  <!-- GitHub -->
  [spectrecss-github-readme]: https://github.com/angular-package/spectre.css#readme

<!-- Package: storage -->
  <!-- npm -->
  [storage-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fstorage.svg
  [storage-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fstorage.png
  [storage-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fstorage
  [storage-npm-readme]: https://www.npmjs.com/package/@angular-package/storage#readme

  <!-- GitHub -->
  [storage-github-readme]: https://github.com/angular-package/storage#readme

<!-- Package: tag -->
  <!-- npm -->
  [tag-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftag.svg
  [tag-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftag.png
  [tag-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftag
  [tag-npm-readme]: https://www.npmjs.com/package/@angular-package/tag#readme

  <!-- GitHub -->
  [tag-github-readme]: https://github.com/angular-package/tag#readme

<!-- Package: testing -->
  <!-- npm -->
  [testing-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftesting.svg
  [testing-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftesting.png
  [testing-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftesting
  [testing-npm-readme]: https://www.npmjs.com/package/@angular-package/testing#readme

  <!-- GitHub -->
  [testing-github-readme]: https://github.com/angular-package/testing#readme
  [testing-github-changelog]: https://github.com/angular-package/testing/blob/main/CHANGELOG.md

<!-- Package: text -->
  <!-- npm -->
  [text-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftext.svg
  [text-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftext.png
  [text-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftext
  [text-npm-readme]: https://www.npmjs.com/package/@angular-package/text#readme

  <!-- GitHub -->
  [text-github-readme]: https://github.com/angular-package/text#readme

<!-- Package: type -->
  <!-- npm -->
  [type-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftype.svg
  [type-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftype.png
  [type-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftype
  [type-npm-readme]: https://www.npmjs.com/package/@angular-package/type#readme

  <!-- GitHub -->
  [type-github-readme]: https://github.com/angular-package/type#readme

  [package-type-key]: https://github.com/angular-package/type#key
  [package-type-minmax]: https://github.com/angular-package/type#minmax
  [package-type-resultcallback]: https://github.com/angular-package/type#resultcallback
  [package-type-type]: https://github.com/angular-package/type#type
  [package-type-types]: https://github.com/angular-package/type#types
  [package-type-valueparser]: https://github.com/angular-package/type#valueparser

<!-- Package: ui -->
  <!-- npm -->
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fui.png
  [ui-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fui
  [ui-npm-readme]: https://www.npmjs.com/package/@angular-package/ui#readme

  <!-- GitHub -->
  [ui-github-readme]: https://github.com/angular-package/ui#readme

<!-- Package: wrapper -->
  <!-- npm -->
  [wrapper-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fwrapper.svg
  [wrapper-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fwrapper.png
  [wrapper-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fwrapper
  [wrapper-npm-readme]: https://www.npmjs.com/package/@angular-package/wrapper#readme

  <!-- GitHub -->
  [wrapper-github-readme]: https://github.com/angular-package/wrapper#readme

<!-- Angular -->
[angular-component-factory-resolver]: https://angular.io/api/core/ComponentFactoryResolver
[angular-view-container-ref]: https://angular.io/api/core/ViewContainerRef

<!-- Jasmine -->
[jasmine]: https://jasmine.github.io/api/3.9
[jasmine-beforeeach]: https://jasmine.github.io/api/3.9/global.html#beforeEach
[jasmine-describe]: https://jasmine.github.io/api/3.8/global.html#describe
[jasmine-expect]: https://jasmine.github.io/api/3.8/global.html#expect
[jasmine-it]: https://jasmine.github.io/api/3.8/global.html#it
[jasmine-matchers]: https://jasmine.github.io/api/3.9/matchers.html

<!-- Javascript  -->
[js-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[js-array-every]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
[js-array-some]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

[js-bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[js-bigintconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt

[js-boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[js-booleanconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean

[js-classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

[js-date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

[js-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[js-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
[js-rest-parameter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

[js-getter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[js-object-getownpropertydescriptor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
[js-object-getOwnpropertydescriptors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors

[js-setter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

[js-hasownproperty]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

[js-instanceof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
[js-in-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

[js-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

[js-null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[js-number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[js-numberconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number

[js-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[js-object-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

[js-primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[js-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

[js-rangeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
[js-referenceerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
[js-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

[js-set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[js-static]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
[js-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Storage
[js-string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[js-stringconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String

[js-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
[js-symbolconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
[js-syntaxerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

[js-typeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

[js-undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
[js-urlerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError

[js-weakset]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

<!-- Karma -->
[karma]: http://karma-runner.github.io/0.10/index.html

<!-- Prism -->
[prism-js]: https://prismjs.com/

<!-- Typescript -->
[ts-any]: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
[ts-boolean]: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
[ts-classes]: https://www.typescriptlang.org/docs/handbook/2/classes.html
[ts-enums]: https://www.typescriptlang.org/docs/handbook/enums.html
[ts-function]: https://www.typescriptlang.org/docs/handbook/2/functions.html
[ts-interface]: https://www.typescriptlang.org/docs/handbook/interfaces.html#our-first-interface
[ts-never]: https://www.typescriptlang.org/docs/handbook/basic-types.html#never
[ts-null]: https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined
[ts-number]: https://www.typescriptlang.org/docs/handbook/basic-types.html#number
[ts-object]: https://www.typescriptlang.org/docs/handbook/basic-types.html#object
[ts-string]: https://www.typescriptlang.org/docs/handbook/basic-types.html#string
[ts-undefined]: https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined
[ts-unknown]: https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown
