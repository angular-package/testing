// @angular-package/type.
import { are} from '@angular-package/type';
// Class.
import { TestingExpect } from '../testing-expect.abstract';
// Type.
import { ExpectType } from '../../type';
/**
 * Matchers that use the `toBeArrayOf()` method of jasmine.
 */
export class TestingToBeArrayOf extends TestingExpect {
  /**
   * The Default message for the expectation fails.
   */
  private expectationFailOutput = `The expected value should`;

  public bigint<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`array\` of \`date\``
  ): this {
    are.bigint(...actual as any).every(result => this.#toBe(expected, result, expectationFailOutput));
    return this;
  }

  public boolean<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`array\` of \`boolean\``
  ): this {
    are.boolean(...actual as any).every(result => this.#toBe(expected, result, expectationFailOutput));
    return this;
  }

  public date<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`array\` of \`date\``
  ): this {
    are.date(...actual as any).every(result => this.#toBe(expected, result, expectationFailOutput));
    return this;
  }

  public defined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`array\` of defined`
  ): this {
    are.defined(...actual as any).every(result => this.#toBe(expected, result, expectationFailOutput));
    return this;
  }

  public number<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`array\` of \`number\``
  ): this {
    are.number(...actual as any).every(result => this.#toBe(expected, result, expectationFailOutput));
    return this;
  }

  public null<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`array\` of \`null\``
  ): this {
    are.null(...actual as any).every(result => this.#toBe(expected, result, expectationFailOutput));
    return this;
  }

  public false<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`array\` of \`false\``
  ): this {
    are.false(...actual as any).every(result => this.#toBe(expected, result, expectationFailOutput));
    return this;
  }

  public regExp<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`array\` of \`regexp\``
  ): this {
    are.regexp(...actual as any).every(result => this.#toBe(expected, result, expectationFailOutput));
    return this;
  }

  public string<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`array\` of \`string\``
  ): this {
    are.string(...actual as any).every(result => this.#toBe(expected, result, expectationFailOutput));
    return this;
  }

  public symbol<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`array\` of \`symbol\``
  ): this {
    are.symbol(...actual as any).every(result => this.#toBe(expected, result, expectationFailOutput));
    return this;
  }

  public true<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`array\` of \`true\``
  ): this {
    are.true(...actual as any).every(result => this.#toBe(expected, result, expectationFailOutput));
    return this;
  }

  public undefined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`array\` of \`undefined\``
  ): this {
    are.undefined(...actual as any).every(result => this.#toBe(expected, result, expectationFailOutput));
    return this;
  }

  #toBe(
    expected: jasmine.Expected<boolean> = true,
    result: boolean,
    expectationFailOutput?: any
  ){
    return this.expect(result, expectationFailOutput).toBe(expected),
      this.setNot(false),
      result;
  }
}
