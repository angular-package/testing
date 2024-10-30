// TestingExpect.
import { Expect } from '../expect.class';
// Type.
import { ExpectType } from '../../type';
/**
 * Constructor description.
 * @class
 * @classdesc Matchers that use the `toBe()` method of jasmine.
 * @license MIT
 */
export class TestingExpectToBeInstanceOf extends Expect {
  /**
   * The Default message for the expectation fails.
   */
  private expectationFailOutput = `The expected value should`;

  /**
   * @description Expects provided value to be an instance of `array`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against the `array` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `array`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public array<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Array\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Array);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `Boolean`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against a `boolean` type or an instance of `Boolean` and the result of its check
   * is passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not)
   * `boolean`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public boolean<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Boolean\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Boolean);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `DataView`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public dataView<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`DataView\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(DataView);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `Date`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against `date` and the result of its check is passed to the `expect()` function
   * of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a `Date`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public date<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Date\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Date);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `Error`. Tested by `toBeInstanceOf()` of jasmine.
   */
  public error<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Error\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Error);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `EvalError`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public evalError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`EvalError\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(EvalError);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `Function`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against `function` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not)
   * `function`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public function<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Function\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Function);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `Map`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public map<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Map\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Map);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `Number`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against a `number` type or an instance of a `Number` and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a
   * `number` type or an instance of a `Number`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public number<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of a \`Number\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Number);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `Object`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against an `object` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public object<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Object\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Object);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `Promise`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public promise<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Promise\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Promise);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `RangeError`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public rangeError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`RangeError\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(RangeError);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `ReferenceError`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public referenceError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`ReferenceError\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(ReferenceError);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `RegExp`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against `RegExp` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `RegExp`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public regexp<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`RegExp\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(RegExp);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `Set`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public set<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Set\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Set);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `SyntaxError`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public syntaxError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`SyntaxError\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(SyntaxError);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `String`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against a `string` type or an instance of a `String` and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of a `String`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   * @angularpackage
   */
  public string<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of a \`String\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(String);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @deprecated
   * @description Expects provided value to be an instance of `Storage`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public storage<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Storage\``
  ): this {
    // expected === false && (this.not);
    // this.expect(actual, expectationFailOutput).toBeInstanceOf(Storage);
    // this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `TypeError`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public typeError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`TypeError\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(TypeError);
    this.setNot(false);
    return this;
  }
  

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `URIError`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public URIError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`URIError\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(URIError);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `WeakMap`. Tested by `toBeInstanceOf()` of jasmine.
   */
  public weakMap<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`WeakMap\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(WeakMap);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `WeakSet`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public weakSet<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`WeakSet\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(WeakSet);
    this.setNot(false);
    return this;
  }
}
