// Class.
import { TestingExpect } from '../testing-expect.abstract';
import { TestingToBe } from './testing-to-be.class';
import { TestingToHave } from './testing-to-have.class';
import { TestingToThrow } from './testing-to-throw.class';

// Type.
import { ExpectType } from '../../type/expect-type.type';

/**
 * Testing `to`, `to.be`, `to.have`, `to.throw` matchers.
 */
export class TestingTo extends TestingExpect {
  public get be(): TestingToBe {
    return this.#be;
  }

  public get have(): TestingToHave {
    return this.#have;
  }

  public get throw(): TestingToThrow {
    return this.#throw;
  }

  #be = new TestingToBe();
  #have = new TestingToHave();
  #throw = new TestingToThrow();

  public contain<T>(
    actual: ExpectType<T>,
    expected: any,
    expectationFailOutput?: any
  ): this {
    this
      .expect(actual, expectationFailOutput)
      .toContain(expected);
    this.setNot(false);
    return this;
  }

  public equal<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectationFailOutput?: any
  ): this {
    this
      .expect(actual, expectationFailOutput)
      .toEqual(expected);
    this.setNot(false);
    return this;
  }

  public match<T>(
    actual: ExpectType<T>,
    expected: string | RegExp,
    expectationFailOutput?: any
  ): this {
    this
      .expect(actual, expectationFailOutput)
      .toMatch(expected);
    this.setNot(false);
    return this;
  }
}
    
