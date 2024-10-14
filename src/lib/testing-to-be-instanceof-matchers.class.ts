// TestingExpect.
import { TestingExpect } from './testing-expect.abstract';
// Type.
import { ExpectType } from '../type';
/**
 * Matchers that use the `toBe()` method of jasmine.
 */
export class TestingToBeInstanceOf extends TestingExpect {
  /**
   * The Default message for the expectation fails.
   */
  private expectationFailOutput = `The expected value should`;

  /**
   * Expects provided value to be an `array`. The method uses `isArray()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against the `array` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `array`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public array<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Array\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(Array);
    this.setNot(false);
    return this;
  }

  /**
   * @param value The value of any type that is checked against a `boolean` type or an instance of `Boolean` and the result of its check
   * is passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not)
   * `boolean`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public boolean<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Boolean\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(Boolean);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public dataView<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`DataView\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(DataView);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be a `Date`. The method uses `isDate()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against `date` and the result of its check is passed to the `expect()` function
   * of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a `Date`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public date<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Date\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(Date);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public error<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Error\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(Error);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public evalError<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`EvalError\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(EvalError);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be `function`. The method uses `isFunction()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against `function` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not)
   * `function`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public function<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`function\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(Function);
    this.setNot(false);
    return this;
  }

  public map<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Map\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(Map);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be a `number` type or an instance of a `Number`. The method uses `isNumber()` function from the
   * `@angular-package/type`.
   * @param value The value of any type that is checked against a `number` type or an instance of a `Number` and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a
   * `number` type or an instance of a `Number`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public number<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of a \`Number\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(Number);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be an `object`. The method uses `isObject()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against an `object` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public object<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Object\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(Object);
    this.setNot(false);
    return this;
  }

  public of<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Constructor,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`expected\``
  ): this {
    this.expect(value, expectationFailOutput).toBeInstanceOf(expected);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public promise<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Promise\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(Promise);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public rangeError<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`RangeError\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(RangeError);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public referenceError<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`ReferenceError\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(ReferenceError);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be `RegExp`. The method uses `isRegExp()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against `RegExp` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `RegExp`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public regexp(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`RegExp\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(RegExp);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public set<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Set\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(Set);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public syntaxError<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`SyntaxError\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(SyntaxError);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be a `string` type or an instance of a `String`. The method uses `isString()` function from the
   * `@angular-package/type`.
   * @param value The value of any type that is checked against a `string` type or an instance of a `String` and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of a `String`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   * @angularpackage
   */
  public string(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of a \`String\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(String);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public storage<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`Storage\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(Storage);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public typeError<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`TypeError\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(TypeError);
    this.setNot(false);
    return this;
  }
  

  // TODO: Description.
  public URIError<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`URIError\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(URIError);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public weakMap<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`WeakMap\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(WeakMap);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public weakSet<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`WeakSet\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeInstanceOf(WeakSet);
    this.setNot(false);
    return this;
  }

}
