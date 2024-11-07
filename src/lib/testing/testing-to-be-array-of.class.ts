// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpectation } from '../testing-expectation.class';
import { TextualExpectation } from '../textual-expectation.abstract';
import { TestingIt } from '../testing-it.class';
// Type.
import { CounterConfig, ExpectType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
/**
 * @class
 * @classdesc Prepared full named description array tests.
 */
export class TestingToBeArrayOf<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  /**
   * @description Creates an instance with setting for global allow executing of the `describe()` and `it()` methods,
   * and optionally sets the list of allowed executable tests (those that execute even on the disallowed state).
   * @param allowDescribe Allow executing `describe()` methods.
   * @param allowIt Allow executing `it()` methods.
   * @param executable An optional `object` of executable storage for `describe()` and `it()` methods.
   * @param counter
   * @param testingDescribe
   * @param testingIt
   * @param testingExpect
   */
  constructor(
    allowDescribe: boolean = true,
    allowIt: boolean = true,
    executable?: ExecutableTests,
    counter: CounterConfig = [true, false],
    testingDescribe: TestingDescribe = new TestingDescribe(allowDescribe, executable?.describe, counter),
    testingIt: TestingIt = new TestingIt(allowIt, executable?.it, counter),
    testingExpectation: TestingExpectation = new TestingExpectation()
  ) {
    super(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpectation);
  }

  //#region TestingToBeArrayOf
  public toBeArrayOfBigInt<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeArrayOfBigInt'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.toBeArrayOfBigInt(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public toBeArrayOfBoolean<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeArrayOfBoolean'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.toBeArrayOfBoolean(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public toBeArrayOfDate<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeArrayOfDate'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.toBeArrayOfDate(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public toBeArrayOfDefined<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeArrayOfDefined'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.toBeArrayOfDefined(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public toBeArrayOfFalse<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeArrayOfFalse'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.toBeArrayOfFalse(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public toBeArrayOfNull<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeArrayOfNull'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.toBeArrayOfNull(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public toBeArrayOfRegExp<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeArrayOfRegExp'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.toBeArrayOfRegExp(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public toBeArrayOfString<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeArrayOfString'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.toBeArrayOfString(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public toBeArrayOfSymbol<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeArrayOfSymbol'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.toBeArrayOfSymbol(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public toBeArrayOfTrue<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeArrayOfTrue'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.toBeArrayOfTrue(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public toBeArrayOfUndefined<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeArrayOfUndefined'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.toBeArrayOfUndefined(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion
}
