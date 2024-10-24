// Class.
import { TestingActual } from './testing-actual.class';
import { TestingCore } from './testing-core.class';
import { TestingDescribe } from './testing-describe.class';
import { TestingExpectation } from './testing-expectation.class';
import { TestingIt } from './testing-it.class';
import { TestingItTo } from './it/testing-it-to.class';
// Type.
import { Constructor } from '@angular-package/type';
import { ExpectType } from '../type';
// Interface.
import { ExecutableTests } from '../interface/executable-tests.interface';
import { mixin } from './function/mixin.func';
import { TestingToBeArrayOf } from './testing-to-be-array-of.class';
import { TestingToBeBoolean } from './testing-to-be-boolean.class';
import { TestingToBeString } from './testing-to-be-string.class';
import { TestingToBeGreaterThan } from './testing-to-be-greater-than.class';



export class TTesting<
  Descriptions extends string = string,
  Expectations extends string = string
> extends mixin(
  TestingToBeArrayOf,
  TestingToBeBoolean,
  TestingToBeGreaterThan,
  TestingToBeString,
) {
  constructor(
    allowDescribe: boolean,
    allowIt: boolean,
    executable?: ExecutableTests
  ) {
    super(allowDescribe, allowIt, executable);
  }
}





/**
 * Prepared simple tests.
 */
export class Tst<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  /**
   * 
   */
  public get to(): TestingItTo {
    return this.#to;
  }

  /**
   * 
   */
  #to: TestingItTo;

  /**
   * Simple `class` to support testing.
   * Creates an instance with setting for global allow executing of the `describe()` and `it()` methods,
   * and optionally sets the list of allowed executable tests (those that execute even on the disallowed state).
   * @param allowDescribe Allow executing `describe()` methods.
   * @param allowIt Allow executing `it()` methods.
   * @param executable An optional `object` of executable storage for `describe()` and `it()` methods.
   */
  constructor(
    allowDescribe: boolean,
    allowIt: boolean,
    executable?: ExecutableTests
  ) {
    super(allowDescribe, allowIt, executable);
    this.#to = new TestingItTo(allowDescribe, allowIt, executable);
  }
}
