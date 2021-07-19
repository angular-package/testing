# Packages

Useful and simple to use packages based on the [angular.io][angulario].

| Package                              | Description                                        | Status                                                       |
| :----------------------------------- | :------------------------------------------------- | -----------------------------------------------------------: |
| [change-detection][cd-github-readme] | Improve application performance.                   | [![npm version][cd-npm-badge-svg]][cd-npm-badge]             |
| [core][core-github-readme]           | Core features.                                     | [![npm version][core-npm-badge-svg]][core-npm-badge]         |
| [prism][prism-github-readme]         | `Prism` highlighter module.                        | [![npm version][prism-npm-badge-svg]][prism-npm-badge]       |
| [property][property-github-readme]   | Features to handle object properties.              | [![npm version][property-npm-badge-svg]][property-npm-badge] |
| [reactive][reactive-github-readme]   | Automatize process of creating some rxjs features. | [![npm version][reactive-npm-badge-svg]][reactive-npm-badge] |
| [ui][ui-github-readme]               | User interface.                                    | *In Progress*                                                |
| [type][type-github-readme]           | Common types, type guards and type checkers.       | [![npm version][type-npm-badge-svg]][type-npm-badge]         |
| [testing][testing-github-readme]     | Support for testing other packages.                | [![npm version][testing-npm-badge-svg]][testing-npm-badge]   |

> Click on the package name to visit the package GitHub README.md

## angular-package/testing

Support for testing other packages.

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

## Table of contents

* [Skeleton](#skeleton)
* [Installation](#installation)
* [Instance of](#instance-of)
* Testing
  * [`Testing`](#testing)
  * [`TestingToBeMatchers`](#testingtobematchers)
* [Constants](#constants)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

<br>

## How angular-package understands

Checks
> Is to check the provided value to be **the same** as **expected**.

Type guard (constrain)
> Constrains the parameter type to **not let** input **unexpected** value in the **code editor**.

Guards
> Is a **combination** of both above, **constrains** the type of the parameter in the **code editor**, and checks its argument.

Sets
> Sets the provided value in the `object`.

Defines
> Returns defined value from the method, instead of storing it in the `object`.

<br>

## Skeleton

This package was built by the [library skeleton][skeleton] which was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

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

## Instance of

Possible names of javascript objects that can be checked by the [`instanceof`][js-instanceof] operator.

```typescript
const value: any = new Object({});
value instanceof Array
value instanceof ArrayBuffer;
value instanceof Boolean;
value instanceof DataView;
value instanceof Date;
value instanceof Error;
value instanceof EvalError;
value instanceof Int16Array;
value instanceof Int32Array;
value instanceof Int8Array;
value instanceof Map;
value instanceof Promise;
value instanceof RangeError
value instanceof RangeError;
value instanceof ReferenceError;
value instanceof RegExp;
value instanceof Set;
value instanceof SharedArrayBuffer;
value instanceof SyntaxError;
value instanceof Float32Array;
value instanceof Float64Array;
value instanceof Function;
value instanceof Number;
value instanceof Object;
value instanceof String;
value instanceof Storage;
value instanceof TypeError;
value instanceof Uint16Array;
value instanceof Uint32Array;
value instanceof Uint8Array;
value instanceof Uint8ClampedArray;
value instanceof URIError;
value instanceof WeakMap;
value instanceof WeakSet;
```

<br>

## Testing

### `Testing`

Simple `class` to support testing.

> Methods prefixed with the `toBe` aren't working with the `beforeEach()` function of jasmine.

**Static methods:**

| Testing.                                     | Description |
| :------------------------------------------- | :---------- |
| [`defineDescribe()`](#testingdefinedescribe) | Defines the wrapper function of the [`describe()`][jasmine-describe] function of jasmine with the ability to decide its execution |
| [`defineIt()`](#testingdefineit)             | Defines the wrapper function of the [`it()`][jasmine-it] function of jasmine with the ability to decide its execution |

**Constructor:**

| Testing                             | Description |
| :---------------------------------- | :---------- |
| [constructor](#testing-constructor) | Creates an instance with setting for global allow executing of the [`describe()`](#testingprototypedescribe) and [`it()`](#testingprototypeit) methods, and optionally sets the list of allowed executable tests (those that execute even on the disallowed state) |

**Instance methods:**

| Testing.prototype.                                                                | Description                                                                                                   |
| :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| [`describe()`](#testingprototypedescribe)                                         | Executes defined [`describe()`][jasmine-describe] function of jasmine on a state `true` from the `execute` |
| [`it()`](#testingprototypeit)                                                     | Executes defined [`it()`][jasmine-it] function of jasmine on a state `true` from the `execute` |
| [`toBe()`](#testingprototypetobe)                                                 | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be the given `expected` value |
| [`toBeBigInt()`](#testingprototypetobebigint)                                     | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `bigint` type on the given `expected` state of `true` |
| [`toBeBooleanType()`](#testingprototypetobebooleantype)                           | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `boolean` type on the given `expected` state of `true` |
| [`toBeClass()`](#testingprototypetobeclass)                                       | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `class` on the given `expected` state of `true` |
| [`toBeInstanceOfArray()`](#testingprototypetobeinstanceofarray)                   | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of an [`Array`][js-array] on the given `expected` state of `true` |
| [`toBeInstanceOfBoolean()`](#testingprototypetobeinstanceofboolean)               | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`Boolean`][js-boolean] on the given `expected` state of `true` |
| [`toBeInstanceOfDate()`](#testingprototypetobeinstanceofdate)                     | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`Date`][js-date] on the given `expected` state of `true` |
| [`toBeInstanceOfError()`](#testingprototypetobeinstanceoferror)                   | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of an [`Error`][js-error] on the given `expected` state of `true` |
| [`toBeInstanceOfFunction()`](#testingprototypetobeinstanceoffunction)             | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a [`Function`][js-function] on the given `expected` state of `true` |
| [`toBeInstanceOfMap()`](#testingprototypetobeinstanceofmap)                       | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a [`Map`][js-map] on the given `expected` state of `true` |
| [`toBeInstanceOfNumber()`](#testingprototypetobeinstanceofnumber)                 | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a [`Number`][js-number] on the given `expected` state of `true` |
| [`toBeInstanceOfObject()`](#testingprototypetobeinstanceofobject)                 | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of an [`Object`][js-object] on the given `expected` state of `true` |
| [`toBeInstanceOfPromise()`](#testingprototypetobeinstanceofpromise)               | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`Promise`][js-promise] on the given `expected` state of `true` |
| [`toBeInstanceOfRangeError()`](#testingprototypetobeinstanceofrangeerror)         | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`RangeError`][js-rangeerror] on the given `expected` state of `true` |
| [`toBeInstanceOfReferenceError()`](#testingprototypetobeinstanceofreferenceerror) | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`ReferenceError`][js-referenceerror] on the given `expected` state of `true` |
| [`toBeInstanceOfRegExp()`](#testingprototypetobeinstanceofregexp)                 | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`RegExp`][js-regexp] on the given `expected` state of `true` |
| [`toBeInstanceOfSet()`](#testingprototypetobeinstanceofset)                       | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`Set`][js-set] on the given `expected` state of `true` |
| [`toBeInstanceOfStorage()`](#testingprototypetobeinstanceofstorage)               | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`Storage`][js-storage] on the given `expected` state of `true` |
| [`toBeInstanceOfString()`](#testingprototypetobeinstanceofstring)                 | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a [`String`][js-string] on the given `expected` state of `true` |
| [`toBeInstanceOfSyntaxError()`](#testingprototypetobeinstanceofsyntaxerror)       | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`SyntaxError`][js-syntaxerror] on the given `expected` state of `true` |
| [`toBeInstanceOfTypeError()`](#testingprototypetobeinstanceoftypeerror)           | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`TypeError`][js-typeerror] on the given `expected` state of `true` |
| [`toBeInstanceOfURIError()`](#testingprototypetobeinstanceofurierror)             | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`URIError`][js-urlerror] on the given `expected` state of `true` |
| [`toBeInstanceOfWeakSet()`](#testingprototypetobeinstanceofweakset)               | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a [`WeakSet`][js-weakset] on the given `expected` state of `true` |
| [`toBeNull()`](#testingprototypetobenull)                                         | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be [`null`][js-null] on the given `expected` state of `true` |
| [`toBeNumberType()`](#testingprototypetobenumbertype)                             | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a [`number`][js-number] type on the given `expected` state of `true` |
| [`toBeStringType()`](#testingprototypetobestringtype)                             | Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a [`string`][js-string] type on the given `expected` state of `true` |
| [`toEqual()`](#testingprototypetoequal)                                           | Executes the spec on a state `true` from the `execute` expecting the provided `value` to equal to the given `expected` |

<br>

### `Testing` constructor

Creates an instance with setting for global allow executing of the [`describe()`](#testingprototypedescribe) and [`it()`](#testingprototypeit) methods, and optionally sets the list of allowed executable tests (those that execute even on the disallowed state).

```typescript
const testing = new Testing(
  true, // Allows executing the `describe()` method globally.
  true, // Allows executing the `it()` method globally.
  {
    describe: [], // Executable unique numbers from the `[counter]` of `describe()` methods to execute when global executing is disallowed.
    it: []        // Executable unique numbers from the `[counter]` of `it()` methods to execute when global executing is disallowed.
  }
);
```

**Parameters:**

| Name: type                    | Description |
| :---------------------------- | :---------- |
| `allowDescribe: boolean`      | Allow executing [`describe()`](#testingprototypedescribe) methods |
| `allowIt: boolean`            | Allow executing [`it()`](testingprototypeit) methods |
| `executable: ExecutableTests` | An optional `object` with unique numbers of executable tests for [`describe()`](#testingprototypedescribe) and [`it()`](testingprototypeit) method |

**Returns:**

The **return value** is new instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(
  true, // Allows executing the `describe()` method globally.
  true, // Allows executing the `it()` method globally.
  {
    describe: [], // Executable unique numbers of `describe()` methods to execute when global executing is disallowed.
    it: [], // Executable unique numbers of `it()` methods to execute when global executing is disallowed.
  }
);
```

Example of using allow.

```typescript
/**
 * Initialize testing.
 */
const testing = new Testing(
  false, // Disallows executing the `describe()` method globally.
  false, // Disallows executing the `it()` method globally.
  {
    describe: [1, 2, 3, 5], // Executable unique numbers of `describe()` methods to execute when global executing is disallowed.
    it: [1], // Executable unique numbers of `it()` methods inside the `describe()` to execute when global executing is disallowed.
  }
);

testing.describe('[counter] First describe', () => {
  testing
    .it('[counter] First it() in first describe 1-1', () =>
      expect(false).toBeFalse()
    )
    .it('[counter] Second it() in first describe 1-2', () =>
      expect(true).toBeTrue()
    )
    .it('[counter] Second it() in first describe 1-3', () =>
      expect(true).toBeTrue()
    )
    .it('[counter] Fourth it() in first describe() 1-4', () =>
      expect(true).toBeTrue()
    )
    .describe('[counter] Second describe()', () => {
      testing.it('[counter] First it() in second describe() 2-1', () =>
        expect(true).toBeTrue()
      );
    })
    .describe('[counter] Third describe()', () => {
      testing.it('[counter] First it() in third describe() 3-1', () =>
        expect(true).toBeTrue()
      );
    })
    .describe('[counter] Fourth describe()', () => {
      testing.it('[counter] First it() in fourth describe() 3-1', () =>
        expect(true).toBeTrue()
      );
    });
});
testing.describe('[counter] Fifth describe', () =>
  testing.it('[counter] First it() in fifth describe 5-1', () =>
    expect(false).toBeFalse()
  )
);
/*
  Karma returns
  1 First describe
      1 First it() in first describe 1-1
    3 Third describe()
      1 First it() in third describe() 3-1
    2 Second describe()
      1 First it() in second describe() 2-1
  5 Fifth describe
    1 First it() in fifth describe 5-1 
*/
```

<br>

### `Testing` static methods

### `Testing.defineDescribe()`

Defines the wrapper function of the [`describe()`][jasmine-describe] function of jasmine with the ability to decide its execution.

```typescript
static defineDescribe(
  description: string,
  specDefinitions: () => void
): (execute: boolean) => void {
  return TestingDescribe.define(description, specDefinitions);
}
```

**Parameters:**

| Name: type                    | Description |
| :---------------------------- | :---------- |
| `description: string`         | "Textual description of the group" - jasmine |
| `specDefinitions: () => void` | "Function for Jasmine to invoke that will define" - jasmine |

**Returns:**

The **return value** is a `function` that contains the [`describe()`][jasmine-describe] function of jasmine with the ability to decide its execution.

**Usage:**

```typescript
// Example usage.
// Object.
import { is } from '@angular-package/type';
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * Tests.
 */
const testingDescribe = Testing.defineDescribe('Primitives values', () => {
  const numberSpec = Testing.defineIt('The value must be a number type', () => {
    expect(is.number(5)).toBeTruthy();
  }, 3000);
  numberSpec(false); // Do not execute.
  numberSpec(true); // Execute.
});

testingDescribe(false); // Do not execute.
testingDescribe(true); // Execute.
```

<br>

### `Testing.defineIt()`

Defines the wrapper function of the [`it()`][jasmine-it] function of jasmine with the ability to decide its execution.

```typescript
static defineIt(
  expectation: string,
  assertion: jasmine.ImplementationCallback,
  timeout?: number | undefined,
): (execute: boolean) => void {
  return TestingIt.define(expectation, assertion, timeout);
}
```

**Parameters:**

| Name: type                    | Description |
| :---------------------------- | :---------- |
| `description: string`         | "Textual description of the group" - jasmine |
| `specDefinitions: () => void` | "Function for Jasmine to invoke that will define" - jasmine |

**Returns:**

The **return value** is a `function` that contains the [`describe()`][jasmine-describe] function of jasmine with the ability to decide its execution.

**Usage:**

```typescript
// Example usage.
// Object.
import { is } from '@angular-package/type';
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * defineIt().
 */
testing.describe('defineIt()', () => {
  const numberSpec = Testing.defineIt('The value must be a number type', () => {
    expect(is.number(5)).toBeTruthy();
  }, 3000);
  numberSpec(false); // Do not execute.
  numberSpec(true); // Execute.
});
```

<br>

### `Testing` instance methods

### `Testing.prototype.describe()`

Executes defined [`describe()`][jasmine-describe] function of jasmine on provided state `true` from the `execute`, and resets the counter to `0`.

```typescript
public describe(
  description: string,
  specDefinitions: () => void,
  execute?: boolean
): this {
  this.#testingIt.resetCounter();
  this.#testingDescribe.describe(description, specDefinitions, execute);
  return this;
}
```

**Parameters:**

| Name: type                    | Description |
| :---------------------------- | :---------- |
| `description: string`         | "Textual description of the group" with an optional its unique number inside the describe when adding `[counter]`  |
| `specDefinitions: () => void` | "Function for Jasmine to invoke that will define inner suites a specs" |
| `execute: boolean`            | A [`boolean`][js-boolean] type value to decide whether or not execute defined [`describe()`][jasmine-describe] of jasmine function |

**Returns:**

The **return value** is an instance of a child class, which in this case is [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Object.
import { is } from '@angular-package/type';
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * describe().
 */
testing.describe(
  '[counter] describe()',
  () => {},
  true // Whether or not execute suite
);
```

<br>

### `Testing.prototype.it()`

Executes defined [`it()`][jasmine-it] function of jasmine on provided state `true` from the `execute`.

```typescript
public it(
  expectation: string,
  assertion: jasmine.ImplementationCallback,
  execute?: boolean
): this {
  this.#testingIt.it(expectation, assertion, execute);
  return this;
}
```

**Parameters:**

| Name: type                    | Description |
| :---------------------------- | :---------- |
| `description: string`         | "Textual description of what this spec is checking" with an optional its unique number when adding `[counter]` |
| `specDefinitions: () => void` | "Function that contains the code of your test. If not provided the test will be pending." |
| `execute: boolean`            | A [`boolean`][js-boolean] type value to decide whether or not execute defined [`it()`][jasmine-it] of jasmine function |

**Returns:**

The **return value** is an instance of a child class, which in this case is [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Object.
import { is } from '@angular-package/type';
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * it().
 */
testing.describe(
  '[counter] describe()',
  () => testing.it('[counter] it()', () => {
      expect(true).toBeTruthy();
    },
    true // Whether or not execute spec
  ),
  true // Whether or not execute suite
);
```

<br>

### `Testing.prototype.toBe()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be the given `expected` value.

```typescript
public toBe<Value>(
  expectation: string,
  value: Value,
  expected: any,
  execute?: boolean
): this {
  this.it(expectation, () => expect(value).toBe(expected), execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `expectation: string` | "Textual description of what this spec is checking" with an optional its unique number when adding `[counter]` |
| `value: Value`        | The value of any type passed to the `expect()` function of jasmine |
| `expected: any`       | The value of any type passed to the `toBe()` method of `jasmine.Matchers` |
| `execute?: boolean`   | Whether or not to execute the spec |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Object.
import { is } from '@angular-package/type';
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBe().
 */
testing.describe('string', () => {
  testing.toBe(
    `Checks the value against the string`,
    is.stringType('my name'),
    true
  );
});
```

<br>

### `Testing.prototype.toBeBigInt()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a [`bigint`][js-bigint] type on the `expected` of `true`.

```typescript
public toBeBigInt<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be a \`bigint\` type`,
  expected: boolean = true
): this {
  this.toBe(expectation, is.bigint(value), expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be a bigint type` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Object.
import { is } from '@angular-package/type';
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeBigInt().
 */
testing.describe('bigint', () => testing.toBeBigInt(1n));
```

<br>

### `Testing.prototype.toBeBooleanType()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a [`boolean`][js-boolean] type on the `expected` of `true`.

```typescript
public toBeBooleanType<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be of a \`boolean\` type`,
  expected: boolean = true
): this {
  this.toBe(expectation, is.booleanType(value), expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be of a boolean type` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeBooleanType().
 */
testing.describe('boolean', () => testing.toBeBooleanType(false));
```

<br>

### `Testing.prototype.toBeClass()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a [`class`][js-classes] on the `expected` of `true`.

```typescript
public toBeClass<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be a \`class\``,
  expected: boolean = true
): this {
  this.toBe(expectation, is.class(value), expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be a class` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeClass().
 */
testing.describe('class Person', () => {
  class Person {}
  testing.toBeClass(Person);
});
```

<br>

### `Testing.prototype.toBeInstanceOfArray()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of an [`Array`][js-array] on the `expected` of `true`.

```typescript
public toBeInstanceOfArray<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of an \`${Array.name}\``,
  expected: boolean = true
): this {
  this.toBe(expectation, is.array(value), expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of an Array` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfArray().
 */
testing.describe('Array', () => testing.toBeInstanceOfArray(['1']));
```

<br>

### `Testing.prototype.toBeInstanceOfBoolean()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`Boolean`][js-boolean] on the `expected` of `true`.

```typescript
public toBeInstanceOfBoolean<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of \`${Boolean.name}\``,
  expected: boolean = true
): this {
  this.toBe(expectation, is.booleanObject(value), expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of an Boolean` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfBoolean().
 */
testing.describe('Boolean', () => testing.toBeInstanceOfBoolean(new Boolean()));
```

<br>

### `Testing.prototype.toBeInstanceOfDate()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`Date`][js-date] on the `expected` of `true`.

```typescript
public toBeInstanceOfDate<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of \`${Date.name}\``,
  expected: boolean = true
): this {
  this.toBe(expectation, is.date(value), expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of Date` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfDate().
 */
testing.describe('Date', () => testing.toBeInstanceOfDate(new Date()));
```

<br>

### `Testing.prototype.toBeInstanceOfError()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of an [`Error`][js-error]  the `expected` of `true`.

```typescript
public toBeInstanceOfError<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of an \`${Error.name}\``,
  expected: boolean = true
): this {
  this.toBe(expectation, value instanceof Error, expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of an Error` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfError().
 */
testing.describe('Error', () => {
  try {
    throw new Error();
  } catch (e) {
    testing.toBeInstanceOfError(e);
  }
});
```

<br>

### `Testing.prototype.toBeInstanceOfFunction()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a [`Function`][js-function] on the `expected` of `true`.

```typescript
public toBeInstanceOfFunction<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of a \`${Function.name}\``,
  expected: boolean = true
): this {
  this.toBe(expectation, is.function(value), expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of a Function` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfFunction().
 */
testing.describe(`Function`, () => testing.toBeInstanceOfFunction(() => {}));
```

<br>

### `Testing.prototype.toBeInstanceOfMap()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a [`Map`][js-map] on the `expected` of `true`.

```typescript
public toBeInstanceOfMap<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of a \`${Map.name}\``,
  expected: boolean = true,
): this {
  this.toBe(expectation, value instanceof Map, expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of a Map` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfMap().
 */
testing.describe(`Map`, () => testing.toBeInstanceOfMap(new Map()));
```

<br>

### `Testing.prototype.toBeInstanceOfNumber()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a [`Number`][js-number] on the `expected` of `true`.

```typescript
public toBeInstanceOfNumber<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of a \`${Number.name}\``,
  expected: boolean = true,
): this {
  this.toBe(expectation, is.numberObject(value), expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of a Number` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * Tests.
 */
testing.describe(`Number`, () =>
  testing.toBeInstanceOfNumber(new Number(27))
);
```

<br>

### `Testing.prototype.toBeInstanceOfObject()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of an [`Object`][js-object] on the `expected` of `true`.

```typescript
public toBeInstanceOfObject<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of an \`${Object.name}\``,
  expected: boolean = true,
): this {
  this.toBe(expectation, is.object(value), expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of an Object` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfObject()
 */
testing.describe(`Object`, () =>
  testing
    .toBeInstanceOfObject(new Object({}))
    .toBeInstanceOfObject({})
);
```

<br>

### `Testing.prototype.toBeInstanceOfPromise()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`Promise`][js-promise] on the `expected` of `true`.

```typescript
public toBeInstanceOfPromise<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of \`${Promise.name}\``,
  expected: boolean = true,
): this {
  this.toBe(expectation, value instanceof Promise, expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of Promise` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfPromise()
 */
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
    // reject('foo');
  }, 300);
});
testing.describe(`Promise`, () => testing.toBeInstanceOfPromise(myPromise));
```

<br>

### `Testing.prototype.toBeInstanceOfRangeError()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`RangeError`][js-rangeerror] on the `expected` state.

```typescript
public toBeInstanceOfRangeError<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of \`${RangeError.name}\``,
  expected: boolean = true,
): this {
  this.toBe(expectation, value instanceof RangeError, expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of RangeError` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfRangeError()
 */
testing.describe('RangeError', () => {
  try {
    throw new RangeError();
  } catch (e) {
    testing.toBeInstanceOfRangeError(e);
  }
});
```

<br>

### `Testing.prototype.toBeInstanceOfReferenceError()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`ReferenceError`][js-referenceerror] on the `expected` of `true`.

```typescript
public toBeInstanceOfReferenceError<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of \`${ReferenceError.name}\``,
  expected: boolean = true,
): this {
  this.toBe(expectation, value instanceof ReferenceError, expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of ReferenceError` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfRangeError()
 */
testing.describe('RangeError', () => {
  try {
    throw new RangeError();
  } catch (e) {
    testing.toBeInstanceOfRangeError(e);
  }
});
```

<br>

### `Testing.prototype.toBeInstanceOfRegExp()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`RegExp`][js-regexp] on the `expected` of `true`.

```typescript
public toBeInstanceOfRegExp<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of \`${RegExp.name}\``,
  expected: boolean = true
): this {
  this.toBe(expectation, is.regexp(value), expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of RegExp` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfRegExp()
 */
testing.describe(`RegExp`, () =>
  testing.toBeInstanceOfRegExp(new RegExp(/[]/g))
);
```

<br>

### `Testing.prototype.toBeInstanceOfSet()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`Set`][js-set] on the `expected` of `true`.

```typescript
public toBeInstanceOfSet<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of \`${Set.name}\``,
  expected: boolean = true
): this {
  this.toBe(expectation, value instanceof Set, expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of Set` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfSet()
 */
testing.describe(`Promise`, () => testing.toBeInstanceOfSet(new Set()));
```

<br>

### `Testing.prototype.toBeInstanceOfStorage()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`Storage`][js-storage] on the `expected` of `true`.

```typescript
public toBeInstanceOfStorage<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of \`${Storage.name}\``,
  expected: boolean = true
): this {
  this.toBe(expectation, value instanceof SyntaxError, expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of Storage` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfStorage()
 */
testing.describe(`Storage`, () => testing.toBeInstanceOfStorage(window.sessionStorage));
```

<br>

### `Testing.prototype.toBeInstanceOfString()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a [`String`][js-string] on the `expected` of `true`.

```typescript
public toBeInstanceOfString<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of a \`${String.name}\``,
  expected: boolean = true
): this {
  this.toBe(expectation, is.stringObject(value), expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of a String` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfString()
 */
testing.describe(`String`, () => testing.toBeInstanceOfString(new String()));
```

<br>

### `Testing.prototype.toBeInstanceOfSyntaxError()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`SyntaxError`][js-syntaxerror] on the `expected` of `true`.

```typescript
public toBeInstanceOfSyntaxError<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of \`${SyntaxError.name}\``,
  expected: boolean = true
): this {
  this.toBe(expectation, value instanceof SyntaxError, expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of SyntaxError` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfSyntaxError()
 */
testing.describe('SyntaxError', () => {
  try {
    throw new SyntaxError();
  } catch (e) {
    testing.toBeInstanceOfSyntaxError(e);
  }
});
```

<br>

### `Testing.prototype.toBeInstanceOfTypeError()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`SyntaxError`][js-syntaxerror] on the `expected` of `true`.

```typescript
public toBeInstanceOfSyntaxError<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of \`${SyntaxError.name}\``,
  expected: boolean = true
): this {
  this.toBe(expectation, value instanceof SyntaxError, expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of SyntaxError` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfTypeError()
 */
testing.describe('TypeError', () => {
  try {
    throw new TypeError();
  } catch (e) {
    testing.toBeInstanceOfTypeError(e);
  }
});
```

<br>

### `Testing.prototype.toBeInstanceOfURIError()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of [`URIError`][js-urlerror] on the `expected` of `true`.

```typescript
public toBeInstanceOfURIError<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of \`${URIError.name}\``,
  expected: boolean = true
): this {
  this.toBe(expectation, value instanceof URIError, expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of URIError` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfURIError()
 */
testing.describe('URIError', () => {
  try {
    throw new URIError();
  } catch (e) {
    testing.toBeInstanceOfURIError(e);
  }
});
```

<br>

### `Testing.prototype.toBeInstanceOfWeakSet()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a [`WeakSet`][js-weakset] on the `expected` of `true`.

```typescript
public toBeInstanceOfWeakSet<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be an instance of a \`${WeakSet.name}\``,
  expected: boolean = true
): this {
  this.toBe(expectation, value instanceof WeakSet, expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be an instance of WeakSet` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeInstanceOfWeakSet()
 */
testing.describe(`WeakSet`, () => testing.toBeInstanceOfWeakSet(new WeakSet()));
```

<br>

### `Testing.prototype.toBeNull()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be [`null`][js-null] on the `expected` of `true`.

```typescript
public toBeNull<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be \`null\``,
  expected: boolean = true
): this {
  this.toBe(expectation, is.null(value), expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be null` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeNull()
 */
testing.describe(`null`, () => testing.toBeNull(null));
```

<br>

### `Testing.prototype.toBeNumberType()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a [`number`][js-number] type on the `expected` of `true`.

```typescript
public toBeNumberType<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be of a \`number\` type`,
  expected: boolean = true
): this {
  this.toBe(expectation, is.numberType(value), expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be of a number type` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeNumberType()
 */
testing.describe(`number`, () => testing.toBeNumberType(5));
```

<br>

### `Testing.prototype.toBeStringType()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a [`string`][js-string] type on the `expected` of `true`.

```typescript
public toBeStringType<Value>(
  value: Value,
  execute: boolean = true,
  expectation: string = `The value must be of a \`string\` type`,
  expected: boolean = true
): this {
  this.toBe(expectation, is.stringType(value), expected, execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `value: Value`        | The value of any type to check |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |
| `expectation: string` | The message for the [karma][karma], which by default is set to `The value must be of a string type` |
| `expected: boolean`   | Expects the result of the expectation must be `true` or `false`, by default it's `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toBeStringType()
 */
testing.describe(`string`, () => testing.toBeStringType('my name'));
```

<br>

### `Testing.prototype.toEqual()`

Executes the spec on a state `true` from the `execute` expecting the provided `value` to equal to the given `expected`.

> "Expect the actual `value` to be equal to the `expected`, using deep equality comparison."

```typescript
public toEqual<Value>(
  expectation: string,
  value: Value,
  expected: any,
  execute?: boolean
): this {
  this.it(expectation, () => expect(value).toEqual(expected), execute);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `expectation: string` | "Textual description of what this spec is checking" with an optional its unique number when adding `[counter]` |
| `value: Value`        | The value of any type passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`   | The value of any type passed to the `toEqual()` method of `jasmine.Matchers`. "The expected value to compare against." |
| `execute: boolean`    | Whether or not to execute the spec, by default it's set to `true` |

**Returns:**

The **return value** is an instance of a [`Testing`](#testing).

**Usage:**

```typescript
// Example usage.
// Class.
import { Testing } from '@angular-package/testing';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
/**
 * toEqual()
 */
const firstName = 'My name';
testing.describe(`toEqual`, () => testing.toEqual('Expects `firstName` to equal to `My name`', firstName, 'My name'));
```

<br>

### `TestingToBeMatchers`

Matchers that use the `toBe()` method of `jasmine.Matchers`.

**Instance methods:**

| TestingToBeMatchers.prototype.                                    | Description |
| :---------------------------------------------------------------- | :---------- |
| [`array()`](#testingtobematchersprototypearray)                   | Expects provided `value` to be an [`array`][js-array] |
| [`bigint()`](#testingtobematchersprototypebigint)                 | Expects provided `value` to be a [`bigint`][js-bigint] |
| [`boolean()`](#testingtobematchersprototypeboolean)               | Expects provided `value` to be a [`boolean`][js-boolean] type |
| [`class()`](#testingtobematchersprototypeclass)                   | Expects provided `value` to be a [`class`][js-classes] |
| [`date()`](#testingtobematchersprototypedate)                     | Expects provided `value` to be a [`Date`][js-date] |
| [`defined()`](#testingtobematchersprototypedefined)               | Expects provided `value` to be defined |
| [`false()`](#testingtobematchersprototypefalse)                   | Expects provided `value` to be [`false`][js-boolean] |
| [`function()`](#testingtobematchersprototypefunction)             | Expects provided `value` to be [`function`][js-function] |
| [`instance()`](#testingtobematchersprototypeinstance)             | Expects provided `value` to be an instance of the given class from the `constructor` |
| [`key()`](#testingtobematchersprototypekey)                       | Expects provided `value` to be a property key |
| [`null()`](#testingtobematchersprototypenull)                     | Expects provided `value` to be [`null`][js-null] |
| [`number()`](#testingtobematchersprototypenumber)                 | Expects provided `value` to be a `number` |
| [`numberBetween()`](#testingtobematchersprototypenumberbetween)   | Expects provided `value` to be a `number` between minimum and maximum |
| [`object()`](#testingtobematchersprototypeobject)                 | Expects provided `value` to be an `object` |
| [`objectKey()`](#testingtobematchersprototypeobjectkey)           | Expects provided `value` to be an `object` with the given keys by using the [`hasOwnProperty`][js-hasownproperty] method of the [`Object`][js-object] |
| [`objectKeyIn()`](#testingtobematchersprototypeobjectkeyin)       | Expects provided `value` to be an `object` with the given keys by using the [`in`][js-in-operator] operator |
| [`objectKeys()`](#testingtobematchersprototypeobjectkeys)         | Expects provided `value` to be an `object` with some given keys by using the [`hasOwnProperty`][js-hasownproperty] method of the [`Object`][js-object] |
| [`regexp()`](#testingtobematchersprototyperegexp)                 | Expects provided `value` to be [`RegExp`][js-regexp] |
| [`string()`](#testingtobematchersprototypestring)                 | Expects provided `value` to be a [`string`][js-string] |
| [`stringOfLength()`](#testingtobematchersprototypestringoflength) | Expects provided `value` to be a [`string`][js-string] of the specified minimum and maximum length |
| [`symbol()`](#testingtobematchersprototypesymbol)                 | Expects provided `value` to be a [`symbol`][js-symbol] |
| [`true()`](#testingtobematchersprototypetrue)                     | Expects provided `value` to be `true` |
| [`undefined()`](#testingtobematchersprototypeundefined)           | Expects provided `value` to be [`undefined`][js-undefined] |

<br>

### `TestingToBeMatchers.prototype.array()`

![new][new]

Expects provided `value` to be an [`array`][js-array]. The method uses [`isArray()`](https://github.com/angular-package/type#isarray) function from the [`@angular-package/type`][type-github-readme].

```typescript
public array(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be an \`array\``
): this {
  this.toBe(is.array(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against the [`array`][js-array] and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the value should be (or not) an [`array`][js-array] |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let testArray: any;
  beforeEach(() => (testArray = [1, 'two', 3]));

  testing.describe('to be or not', () => {
    testing.it('an array', () => toBe.array(testArray).not.array(2));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.bigint()`

![new][new]

Expects provided `value` to be [`bigint`][js-bigint] type. The method uses [`isBigInt()`](https://github.com/angular-package/type#isbigint) function from the [`@angular-package/type`][type-github-readme].

```typescript
public bigint(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be \`bigint\``
): this {
  this.toBe(is.bigint(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against the [`bigint`][js-bigint] and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) [`bigint`][js-bigint]  |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isBigint: any;
  beforeEach(() => (isBigint = 12n));

  testing.describe('to be or not', () => {
    testing.it('bigint', () => toBe.bigint(isBigint).not.bigint(2));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.boolean()`

![new][new]

Expects provided `value` to be [`boolean`][js-boolean]. The method uses [`isBoolean()`](https://github.com/angular-package/type#isboolean) function from the [`@angular-package/type`][type-github-readme].

```typescript
public boolean(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be \`boolean\``
): this {
  this.toBe(is.boolean(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against the [`boolean`][js-boolean] and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) [`boolean`][js-boolean]  |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isBoolean: any;
  beforeEach(() => (isBoolean = false));

  testing.describe('to be or not to be the type of', () => {
    testing.it('boolean', () => toBe.boolean(isBoolean).not.boolean(3));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.class()`

![new][new]

Expects provided `value` to be [`class`][js-classes]. The method uses [`isClass()`](https://github.com/angular-package/type#isclass) function from the [`@angular-package/type`][type-github-readme].

```typescript
public class(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be \`class\``
): this {
  this.toBe(is.class(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against the [`class`][js-classes] and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) [`class`][js-classes]  |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isClass: any;
  beforeEach(() => (isClass = class TestingClass {}));
  testing.describe('to be or not to be', () => {
    testing.it('class', () => toBe.class(isClass).not.class('TestingClass'));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.date()`

![new][new]

Expects provided `value` to be a [`date`][js-date]. The method uses [`isDate()`](https://github.com/angular-package/type#isdate) function from the [`@angular-package/type`][type-github-readme].

```typescript
public date(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be a \`date\``
): this {
  this.toBe(is.date(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against [`date`][js-date] and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) a [`date`][js-date]  |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isDate: any;
  beforeEach(() => (isDate = new Date()));
  testing.describe('to be or not to be the type of', () => {
    testing.it('date', () => toBe.date(isDate).not.date(false));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.defined()`

![new][new]

Expects provided `value` to be defined. The method uses [`isDefined()`](https://github.com/angular-package/type#isdefined) function from the [`@angular-package/type`][type-github-readme].

```typescript
public defined(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be defined`
): this {
  this.toBe(is.defined(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against defined and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) defined  |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isDefined: any;
  testing.describe('to be or not to be', () => {
    testing.it('defined', () => toBe.defined('Defined').not.defined(isDefined));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.false()`

![new][new]

Expects provided `value` to be `false`. The method uses [`isFalse()`](https://github.com/angular-package/type#isfalse) function from the [`@angular-package/type`][type-github-readme].

```typescript
public false(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be \`false\``
): this {
  this.toBe(is.false(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against `false` and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) `false` |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isFalse: any;
  beforeEach(() => (isFalse = false));
  testing.describe('to be or not to be', () => {
    testing.it('`false`', () => toBe.false(isFalse).not.false(true));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.function()`

![new][new]

Expects provided `value` to be [`function`][js-function]. The method uses [`isFunction()`](https://github.com/angular-package/type#isfunction) function from the [`@angular-package/type`][type-github-readme].

```typescript
public function(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be a function`
): this {
  this.toBe(is.function(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against [`function`][js-function] and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) [`function`][js-function] |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isFunction: any;
  beforeEach(() => (isFunction = () => {}));
  testing.describe('to be or not to be', () => {
    testing.it('`function`', () => toBe.function(isFunction).not.function(true));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.instance()`

![new][new]

Expects provided `value` to be [`function`][js-function]. The method uses [`isFunction()`](https://github.com/angular-package/type#isfunction) function from the [`@angular-package/type`][type-github-readme].

```typescript
public instance<Type>(
  value: any,
  constructor: Constructor<Type>,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be an instance of ${constructor.name}`
): this {
  this.toBe(is.instance(value, constructor), expected, expectationFailOutput);
  return this;
}
```

**Generic type variables:**

**Parameters:**

| Name: type                       | Description |
| :------------------------------- | :---------- |
| `value: any`                     | The `value` of any type that is checked against [`function`][js-function] and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `constructor: Constructor<Type>` | A [`class`][js-classes] or [`function`][js-function] that specifies the type of the `constructor` |
| `expected: boolean`              | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any`     | An additional message when the matcher fails, by default, states the `value` should be (or not) an instance of the given [`class`][js-classes] |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers, TestingClass } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isInstance: any;
  beforeEach(() => isInstance = new TestingClass());
  testing.describe('to be or not to be', () => {
    testing.it(`an instance of \`TestingClass\``, () => toBe.instance(isInstance, TestingClass).not.instance(isInstance, class Person {}));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.key()`

![new][new]

Expects provided `value` to be property key. The method uses [`isKey()`](https://github.com/angular-package/type#iskey) function from the [`@angular-package/type`][type-github-readme].

```typescript
public key(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be the property key`
): this {
  this.toBe(is.key(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against the property key and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) the property key |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isKey: any;
  beforeEach(() => (isKey = 'firstName'));
  testing.describe('to be or not to be', () => {
    testing.it('`key`', () => toBe.key(isKey).not.key(true));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.null()`

![new][new]

Expects provided `value` to be property key. The method uses [`isNull()`](https://github.com/angular-package/type#isnull) function from the [`@angular-package/type`][type-github-readme].

```typescript
public null(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be \`null\``
): this {
  this.toBe(is.null(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against `null` and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) `null` |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isNull: any;
  beforeEach(() => (isNull = null));
  testing.describe('to be or not to be', () => {
    testing.it('`null`', () => toBe.null(isNull).not.null(undefined));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.number()`

![new][new]

Expects provided `value` to be [`number`][js-number]. The method uses [`isNumber()`](https://github.com/angular-package/type#isnumber) function from the [`@angular-package/type`][type-github-readme].

```typescript
public number(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be \`number\``
): this {
  this.toBe(is.number(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against `number` and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) a `number` |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isNumber: any;
  beforeEach(() => (isNumber = 27));
  testing.describe('to be or not to be', () => {
    testing.it('`number`', () => toBe.number(isNumber).not.number(undefined));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.numberBetween()`

![new][new]

Expects provided `value` to be [`number`][js-number] between a range. The method uses [`isNumberBetween()`](https://github.com/angular-package/type#isnumberbetween) function from the [`@angular-package/type`][type-github-readme].

```typescript
public numberBetween<Min extends number, Max extends number>(
  value: any,
  min: Min,
  max: Max,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be a number between ${min} to ${max}`
): this {
  this.toBe(
    is.numberBetween(value, min, max),
    expected,
    expectationFailOutput
  );
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against `number` of the specified range and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `min: Min`                   | A `number` of the minimum range of the given `value` |
| `max: Max`                   | A `number` of the maximum range of the given `value` |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) a `number` between minimum to maximum |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isNumberBetween: any;
  let min: any;
  let max: any;
  beforeEach(() => {
    isNumberBetween = 27;
    min = 26;
    max = 28;
  });

  testing.describe('to be or not to be', () => {
    testing.it(`\`number\` between 26 to 28`, () => toBe.numberBetween(isNumber, min, max).not.number(37, min, max));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.object()`

![new][new]

Expects provided `value` to be an [`object`][js-object]. The method uses [`isObject()`](https://github.com/angular-package/type#isobject) function from the [`@angular-package/type`][type-github-readme].

```typescript
public object(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be an \`object\``
): this {
  this.toBe(is.object(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against the [`object`][js-object] of the specified range and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) an [`object`][js-object] |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isObject: any;
  beforeEach(() => isObject = {});
  testing.describe('to be or not to be', () => {
    testing.it(`an \`object\``, () => toBe.object(isObject).not.object(undefined));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.objectKey()`

![new][new]

Expects provided `value` to be an [`object`][js-object] with given keys. The method uses [`isObjectKey()`](https://github.com/angular-package/type#isobjectkey) function from the [`@angular-package/type`][type-github-readme].

```typescript
public objectKey(
  value: any,
  key: Key | Key[],
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be an \`object\` with all given keys`
): this {
  this.toBe(is.objectKey(value, key), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against the `object` that contains given keys and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `key: Key \| Key[]`          | Property name of [`Key`](https://github.com/angular-package/type#key) type or an [`array`][js-array] of property names of [`Key`](https://github.com/angular-package/type#key) type of [`object`][js-object] from the provided `value` |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) an [`object`][js-object] with all given keys |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isObjectKey: any;
  beforeEach(() => isObjectKey = { firstName: '', lastName: ''});
  testing.describe('to be or not to be', () => {
    testing.it(`an \`object\` with all given keys`, () =>
      toBe.objectKey(isObjectKey, ['firstName', 'lastName']).not.objectKey(isObjectKey, ['noFirstName']));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.objectKeyIn()`

![new][new]

Expects provided `value` to be an [`object`][js-object] with given keys. The method uses [`isObjectKeyIn()`](https://github.com/angular-package/type#isobjectkeyin) function from the [`@angular-package/type`][type-github-readme].

```typescript
public objectKeyIn(
  value: any,
  key: Key | Key[],
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be an \`object\` with all given keys`
): this {
  this.toBe(is.objectKeyIn(value, key), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against the [`object`][js-object] that contains given keys and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `key: Key \| Key[]`          | Property name of [`Key`](https://github.com/angular-package/type#key) type or an [`array`][js-array] of property names of [`Key`](https://github.com/angular-package/type#key) type of [`object`][js-object] from the provided `value` |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) an [`object`][js-object] with  all given keys |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isObjectKeyIn: any;
  beforeEach(() => isObjectKeyIn = { get firstName(): string { return 'x '; }, lastName: ''});
  testing.describe('to be or not to be', () =>
    testing.it(`an \`object\` with all given keys`, () =>
      toBe.objectKeyIn(isObjectKeyIn, ['firstName', 'lastName']).not.objectKeyIn(isObjectKeyIn, ['noFirstName'])));
});
```

<br>

### `TestingToBeMatchers.prototype.objectKeys()`

![new][new]

Expects provided `value` to be an [`object`][js-object] with some of the given keys.  The method uses [`isObjectKeyIn()`](https://github.com/angular-package/type#isobjectkeys) function from the [`@angular-package/type`][type-github-readme].

```typescript
public objectKeys(
  value: any,
  keys: Key[],
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be an \`object\` with some of the given keys`
): this {
  this.toBe(is.objectKeys(value, ...keys), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against the [`object`][js-object] that contains some of the given keys and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `key: Key[]`                 | An [`array`][js-array] of property names of the [`Key`](https://github.com/angular-package/type#key) type of [`object`][js-object] from the provided `value` |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) an [`object`][js-object] with some given keys |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isObjectKeys: any;
  beforeEach(() => isObjectKeys = { get firstName(): string { return 'x '; }, lastName: ''});
  testing.describe('to be or not to be', () =>
    testing.it(`an \`object\` with some of the given keys`, () =>
      toBe.objectKeys(isObjectKeys, ['firstName', 'lastName', 'noFirstName']).not.objectKeys(isObjectKeys, ['noFirstName'])));
});
```

<br>

### `TestingToBeMatchers.prototype.regexp()`

![new][new]

Expects provided `value` to be [`RegExp`][js-regexp]. The method uses [`isRegExp()`](https://github.com/angular-package/type#isregexp) function from the [`@angular-package/type`][type-github-readme].

```typescript
public regexp(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be \`regexp\``
): this {
  this.toBe(is.regexp(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against [`RegExp`][js-regexp] and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) [`RegExp`][js-regexp] |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isRegExp: any;
  beforeEach(() => isRegExp = /[]/g);

  testing.describe('to be or not to be', () =>
    testing.it(`\`RegExp\``, () =>
      toBe.regexp(isRegExp).not.regexp(undefined)));
});
```

<br>

### `TestingToBeMatchers.prototype.string()`

![new][new]

Expects provided `value` to be [`string`][js-string]. The method uses [`isString()`](https://github.com/angular-package/type#isstring) function from the [`@angular-package/type`][type-github-readme].

```typescript
public string(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be a \`string\``
): this {
  this.toBe(is.string(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against a [`string`][js-string] and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) a [`string`][js-string] |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isString: any;
  beforeEach(() => isString = 'My new string');
  testing.describe('to be or not to be', () => {
    testing.it(`\`string\``, () => toBe.string(isString).not.string(undefined));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.stringOfLength()`

![new][new]

Expects provided `value` to be [`string`][js-string] of the length between the given minimum to maximum. The method uses [`isStringLength()`](https://github.com/angular-package/type#isstringlength) function from the [`@angular-package/type`][type-github-readme].

```typescript
public stringOfLength<Min extends number, Max extends number>(
  value: any,
  min: Min,
  max: Max,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be a \`string\` of the length between the given ${min} to ${max}`
): this {
  this.toBe(
    is.stringLength(value, min, max),
    expected,
    expectationFailOutput
  );
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against a [`string`][js-string] of the specified length and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `min: Min`                   | Minimum length of the given `value` of a [`number`][js-number] type |
| `max: Max`                   | The maximum length of the given `value` of a [`number`][js-number] type |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) a [`string`][js-string] of the length between the given minimum to maximum |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isStringOfLength: any;
  let min: any;
  let max: any;
  beforeEach(() => {
    isStringOfLength = 'My new string, My new string';
    min = 26;
    max = 28;
  });
  testing.describe('to be or not to be', () => {
    testing.it(`a \`string\` between the given length`, () =>
      toBe.stringOfLength(isStringOfLength, min, max).not.stringOfLength(undefined, min, max));
  });
});
```

<br>

### `TestingToBeMatchers.prototype.symbol()`

![new][new]

Expects provided `value` to be [`symbol`][js-symbol]. The method uses [`isSymbol()`](https://github.com/angular-package/type#issymbol) function from the [`@angular-package/type`][type-github-readme].

```typescript
public symbol(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be a \`symbol\``
): this {
  this.toBe(is.symbol(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against a [`symbol`][js-symbol] and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) a [`symbol`][js-symbol] |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isSymbol: any;
  beforeEach(() => isSymbol = Symbol('firstName'));
  testing.describe('to be or not to be', () => 
    testing.it(`a \`symbol\``, () => toBe.symbol(isSymbol).not.symbol(undefined)));
});
```

<br>

### `TestingToBeMatchers.prototype.true()`

![new][new]

Expects provided `value` to be `true`. The method uses [`isTrue()`](https://github.com/angular-package/type#istrue) function from the [`@angular-package/type`][type-github-readme].

```typescript
public true(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be \`true\``
): this {
  this.toBe(is.true(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against `true` and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) `true` |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isTrue: any;
  beforeEach(() => isTrue = true);
  testing.describe('to be or not to be', () =>
    testing.it(`\`true\``, () => toBe.true(isTrue).not.true(false)));
});
```

<br>

### `TestingToBeMatchers.prototype.undefined()`

![new][new]

Expects provided `value` to be `undefined`. The method uses [`isUndefined()`](https://github.com/angular-package/type#isundefined) function from the [`@angular-package/type`][type-github-readme].

```typescript
public undefined(
  value: any,
  expected: jasmine.Expected<boolean> = true,
  expectationFailOutput: any = `${this.expectationFailOutput} ${
    this.getNot() === true ? `not` : ``
  } be \`undefined\``
): this {
  this.toBe(is.undefined(value), expected, expectationFailOutput);
  return this;
}
```

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `value: any`                 | The `value` of any type that is checked against `undefined` and the result of its check is passed to the [`expect()`][jasmine-expect] function of jasmine |
| `expected: boolean`          | The expected value of a [`boolean`][js-boolean] to compare against the result of the `value` check that is passed to the `toBe()` method of `jasmine.Matchers` |
| `expectationFailOutput: any` | An additional message when the matcher fails, by default, states the `value` should be (or not) `undefined` |

**Returns:**

The **return value** is an instance of a [`TestingToBeMatchers`](#testingtobematchers).

**Usage:**

```typescript
// Example usage.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let isUndefined: any;
  beforeEach(() => isUndefined = undefined);
  testing.describe('to be or not to be', () => 
    testing.it(`\`undefined\``, () => toBe.undefined(isUndefined).not.undefined(null)));
});
```

<br>

## Constants

Constants prepared for testing purposes.

### `Array`

```typescript
/**
 * An `Array` of `bigint`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
const TESTING_ARRAY_BIGINT = [
  TESTING_BIGINT,
  TESTING_BIGINT_CONSTRUCTOR,
  9007199254740991n,
];

/**
 * An `Array` of `boolean`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
const TESTING_ARRAY_BOOLEAN = [
  true,
  false,
  TESTING_TRUE_INSTANCE,
  TESTING_FALSE_INSTANCE,
  false,
  TESTING_FALSE,
  TESTING_TRUE,
];

/**
 * An `Array` of `class`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
const TESTING_ARRAY_CLASS = [
  new TestingClass(),
  new TestingClass(),
];

/**
 * An `Array` of `function`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
const TESTING_ARRAY_FUNCTION = [
  TESTING_FUNCTION,
  TESTING_FUNCTION_CONSTRUCTOR,
  TESTING_FUNCTION_CONSTRUCTOR_PERSON,
  (x: number, y: string): any => x,
];

/**
 * An `Array` of `null`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
const TESTING_ARRAY_NULL = [
  null,
  null,
  null,
  TESTING_NULL,
  TESTING_NULL,
];

/**
 * An `Array` of `number`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
const TESTING_ARRAY_NUMBER = [
  1,
  2,
  3,
  4,
  7,
  10,
  1000,
  3000,
  151233,
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
];

/**
 * An `Array` of `object`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
const TESTING_ARRAY_OBJECT_ONE: Array<TestingObjectOne> = [
  { [TESTING_NUMBER]: 'my number', x: 3000 },
  { [TESTING_NUMBER]: 'my number', x: 1 },
];

/**
 * An `Array` of `string`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
const TESTING_ARRAY_STRING = [
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
  TESTING_STRING_INSTANCE,
  '!@#$%^&*()Company',
];

/**
 * An `Array` of `symbol`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
const TESTING_ARRAY_SYMBOL_NUMBER = [
  TESTING_SYMBOL_NUMBER,
  Symbol(1005),
  Symbol(1002),
  Symbol(15),
  Symbol(1),
];

/**
 * An `Array` of `symbol`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
const TESTING_ARRAY_SYMBOL_STRING = new Array([
  TESTING_SYMBOL_STRING,
  Symbol('String Symbol'),
  Symbol('String Symbol'),
  Symbol('String Symbol One'),
  Symbol('String Symbol Two'),
]);

/**
 * An `Array` of `undefined`.
 * Array: true
 * Object: true
 * typeOf(): "array"
 * typeof: "object"
 */
const TESTING_ARRAY_UNDEFINED: Array<undefined | unknown> = [
  undefined,
  undefined,
  undefined,
  TESTING_UNDEFINED,
  TESTING_NOT_DEFINED,
];

```

### `BigInt`

```typescript
/**
 * typeOf(): "bigint"
 * typeof: "bigint"
 */
const TESTING_BIGINT = BigInt('9007199254740991');
```

### `Boolean`

```typescript
/**
 * typeOf(): "boolean"
 * typeof: "boolean"
 */
const TESTING_FALSE = false;

/**
 * typeOf(): "boolean"
 * typeof: "boolean"
 */
const TESTING_TRUE = true;

/**
 * Boolean: true
 * Object: true
 * typeOf(): "boolean"
 * typeof: "object"
 */
// tslint:disable-next-line: ban-types no-construct
const TESTING_FALSE_INSTANCE = new Boolean(TESTING_FALSE);

/**
 * Boolean: true
 * Object: true
 * typeOf(): "boolean"
 * typeof: "object"
 */
// tslint:disable-next-line: ban-types no-construct
const TESTING_TRUE_INSTANCE = new Boolean(TESTING_TRUE);
```

### `Class`

```typescript
/**
 * Function: true
 * Object: true
 * class: true
 * typeOf(): "function"
 * typeof: "function"
 */
class TestingClass {

  /**
   * Property as `number` of a `string` type.
   */
  1030405027 = 'my new number';

  /**
   * Property as `number` of a `number` type.
   */
  5 = 27;

  /**
   * Property as `string` of a `string` type.
   */
  firstName = 'My name';

  /**
   * Property as `number` of a `string` type.
   */
  surname = 'Surname';

  /**
   * Property as `number` of a `number` type.
   */
  age = TESTING_NUMBER;

  /**
   * Property as `string` of a `string` type.
   */
  city = TESTING_STRING;

  /**
   * Getter as `number` of a `number` type.
   */
  get [TESTING_NUMBER](): number {
    return this.age;
  }

  /**
   * Getter as `string` of a `string` type.
   */
  get [TESTING_STRING](): string {
    return this.city;
  }

  /**
   * Getter as `symbol number` of a `number` type.
   */
  get [TESTING_SYMBOL_NUMBER](): number {
    return this.age;
  }

  /**
   * Getter as `symbol string` of a `string` type.
   */
  get [TESTING_SYMBOL_STRING](): string {
    return this.city;
  }
}

/**
 * Object: true
 * typeOf(): "object"
 * typeof: "object"
 */
const TESTING_CLASS = new TestingClass();
```

### `Date`

```typescript
/**
 * Date: true
 * Object: true
 * typeOf(): "date"
 * typeof: "object"
 */
const TESTING_DATE = new Date(1995, 11, 17, 3, 24, 0);
```

### `Function`

```typescript
/**
 * Function: true
 * Object: true
 * function: true
 * typeOf(): "function"
 * typeof: "function"
 */
const TESTING_FUNCTION = (x: number, y: string): any => x + y;

/**
 * Function: true
 * Object: true
 * function: true
 * typeOf(): "function"
 * typeof: "function"
 */
const TESTING_FUNCTION_CONSTRUCTOR = function(
  this: any,
  ...args: any[]
): any {
  if (args) {
    args.forEach((arg, index: number) => (this[index] = arg[index]));
  }
  return this;
};

/**
 * Function: true
 * Object: true
 * function: true
 * typeOf(): "function"
 * typeof: "function"
 */
const TESTING_FUNCTION_CONSTRUCTOR_PERSON = function(
  this: TestingPerson,
  ...args: any[]
): TestingPerson {
  if (args) {
    this.firstName = args[0];
    this.surname = args[1];
    this.age = args[2];
  }
  return this;
};
```

### `null`

```typescript
/**
 * typeOf(): "null"
 * typeof: "object"
 */
const TESTING_NULL = null;
```

### `Number`

```typescript
/**
 * typeOf(): "number"
 * typeof: "number"
 */
const TESTING_NUMBER = 10304050;

/**
 * typeOf(): "number"
 * typeof: "number"
 */
const TESTING_NUMBER_CONSTRUCTOR = Number(TESTING_NUMBER);

/**
 * Number: true
 * Object: true
 * typeOf(): "number"
 * typeof: "object"
 */
// tslint:disable-next-line: ban-types no-construct
const TESTING_NUMBER_INSTANCE: Number = new Number(
  TESTING_NUMBER
);
```

### `Object`

```typescript
/**
 * Object: true,
 * typeOf(): "object",
 * typeof: "object"
 */
const TESTING_OBJECT_ONE: TestingObjectOne = {
  'key as string': true,
  1030405027: 'key is number',
  5: 'key is also number',
  [TESTING_NUMBER]: 'key is number',
  [TESTING_STRING]: 'key is string',
  [TESTING_SYMBOL_NUMBER]: 'key is symbol number',
  [TESTING_SYMBOL_STRING]: 6,
  x: 3000,
};

/**
 * Object: true,
 * typeOf(): "object",
 * typeof: "object"
 */
const TESTING_OBJECT_ONE_NEW = new Object(TESTING_OBJECT_ONE);
```

### `RegExp`

```typescript
/**
 * RegExp: true,
 * Object: true,
 * typeOf(): "regexp",
 * typeof: "object"
 */
const TESTING_PATTERN = /[^a-zA-Z0-9]/g;
```

### `String`

```typescript
/**
 * typeOf(): "string"
 * typeof: "string"
 */
const TESTING_STRING = '!@#$%^&*()Company';

/**
 * typeOf(): "string"
 * typeof: "string"
 */
const TESTING_STRING_CONSTRUCTOR = String(TESTING_STRING);

/**
 * Object: true
 * String: true
 * typeOf(): "string"
 * typeof: "object"
 */
// tslint:disable-next-line: ban-types no-construct
const TESTING_STRING_INSTANCE = new String(
  TESTING_STRING
);

```

### `Symbol`

```typescript
/**
 * typeOf(): "symbol"
 * typeof: "symbol"
 */
const TESTING_SYMBOL_NUMBER: unique symbol = Symbol(
  TESTING_NUMBER
);

/**
 * typeOf(): "symbol"
 * typeof: "symbol"
 */
const TESTING_SYMBOL_STRING: unique symbol = Symbol(
  TESTING_STRING
);
```

### `undefined`

```typescript
/**
 * typeOf(): "undefined"
 * typeof: "undefined"
 */
const TESTING_UNDEFINED = undefined;
```

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

<!-- Funding -->
[github-badge-sponsor]: https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/angular-package
[github-sponsor-link]: https://github.com/sponsors/angular-package
[patreon-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dsciborrudnicki%26type%3Dpatrons&style=flat
[patreon-link]: https://patreon.com/sciborrudnicki

[angulario]: https://angular.io
[skeleton]: https://github.com/angular-package/skeleton

<!-- Update status -->
[fix]: https://img.shields.io/badge/-fix-red
[new]: https://img.shields.io/badge/-new-green
[update]: https://img.shields.io/badge/-update-red

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/

<!-- Package: testing  -->
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

<!-- Package: core -->
  <!-- npm -->
  [core-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcore.svg
  [core-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcore
  [core-npm-readme]: https://www.npmjs.com/package/@angular-package/core#readme

  <!-- GitHub -->
  [core-github-readme]: https://github.com/angular-package/core#readme

<!-- Package: change-detection -->
  <!-- npm -->
  [cd-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.svg
  [cd-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fchange-detection
  [cd-npm-readme]: https://www.npmjs.com/package/@angular-package/change-detection#readme

  <!-- GitHub -->
  [cd-github-readme]: https://github.com/angular-package/change-detection#readme

<!-- Package: prism -->
  <!-- npm -->
  [prism-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fprism.svg
  [prism-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fprism
  [prism-npm-readme]: https://www.npmjs.com/package/@angular-package/prism#readme

  <!-- GitHub -->
  [prism-github-readme]: https://github.com/angular-package/prism#readme

<!-- Package: property -->
  <!-- npm -->
  [property-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fproperty.svg
  [property-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fproperty
  [property-npm-readme]: https://www.npmjs.com/package/@angular-package/property#readme

  <!-- GitHub -->
  [property-github-readme]: https://github.com/angular-package/property#readme

<!-- Package: reactive -->
  <!-- npm -->
  [reactive-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Freactive.svg
  [reactive-npm-badge]: https://badge.fury.io/js/%40angular-package%2Freactive
  [reactive-npm-readme]: https://www.npmjs.com/package/@angular-package/reactive#readme

  <!-- GitHub -->
  [reactive-github-readme]: https://github.com/angular-package/reactive#readme

<!-- Package: testing -->
  <!-- npm -->
  [testing-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftesting.svg
  [testing-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftesting
  [testing-npm-readme]: https://www.npmjs.com/package/@angular-package/testing#readme

  <!-- GitHub -->
  [testing-github-readme]: https://github.com/angular-package/testing#readme

<!-- Package: type -->
  <!-- npm -->
  [type-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftype.svg
  [type-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftype
  [type-npm-readme]: https://www.npmjs.com/package/@angular-package/type#readme

  <!-- GitHub -->
  [type-github-readme]: https://github.com/angular-package/type#readme

  [package-type-resultcallback]: https://github.com/angular-package/type#resultcallback
  [package-type-key]: https://github.com/angular-package/type#key

<!-- Package: ui -->
  <!-- npm -->
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fui
  [ui-npm-readme]: https://www.npmjs.com/package/@angular-package/ui#readme

  <!-- GitHub -->
  [ui-github-readme]: https://github.com/angular-package/ui#readme

<!-- Jasmine -->
[jasmine-describe]: https://jasmine.github.io/api/3.8/global.html#describe
[jasmine-expect]: https://jasmine.github.io/api/3.8/global.html#expect
[jasmine-it]: https://jasmine.github.io/api/3.8/global.html#it

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
[js-function-rest-parameter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

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

<!-- -->
[karma]: http://karma-runner.github.io/0.10/index.html

<!-- Typescript -->
[ts-classes]: https://www.typescriptlang.org/docs/handbook/2/classes.html
[ts-function]: https://www.typescriptlang.org/docs/handbook/2/functions.html
[ts-interface]: https://www.typescriptlang.org/docs/handbook/interfaces.html#our-first-interface
