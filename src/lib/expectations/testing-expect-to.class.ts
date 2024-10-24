// Class.
import { TestingExpect } from '../testing-expect.abstract';
import { TestingExpectToBe } from './testing-expect-to-be.class';
import { TestingExpectToHave } from './testing-expect-to-have.class';
import { TestingExpectToThrow } from './testing-expect-to-throw.class';

// Type.
import { ExpectType } from '../../type/expect-type.type';

/**
 * Testing `to`, `to.be`, `to.have`, `to.throw` matchers.
 */
export class TestingExpectTo extends TestingExpect {
  /**
   * 
   */
  public get be(): TestingExpectToBe {
    return this.#be;
  }

  /**
   * 
   */
  public get have(): TestingExpectToHave {
    return this.#have;
  }

  /**
   * 
   */
  public get throw(): TestingExpectToThrow {
    return this.#throw;
  }

  /**
   * 
   */
  #be = new TestingExpectToBe();

  /**
   * 
   */
  #have = new TestingExpectToHave();

  /**
   * 
   */
  #throw = new TestingExpectToThrow();

  public contain<T>(
    actual: ExpectType<T>,
    expected: any,
    expectationFailOutput?: any
  ): this {
    this
      .expectation(actual, e => e.toContain(expected), expectationFailOutput)
      .setNot(false);
    return this;
  }

  public equal<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectationFailOutput?: any
  ): this {
    this
      .expectation(actual, e => e.toEqual(expected), expectationFailOutput)
      .setNot(false);
    return this;
  }

  public match<T>(
    actual: ExpectType<T>,
    expected: string | RegExp,
    expectationFailOutput?: any
  ): this {
    this
      .expectation(actual, e => e.toMatch(expected), expectationFailOutput)
      .setNot(false);
    return this;
  }
}
