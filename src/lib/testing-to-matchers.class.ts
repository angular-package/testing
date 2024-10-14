// Class.
import { TestingExpect } from './testing-expect.abstract';
import { TestingToBe } from './testing-to-be-matchers.class';
import { TestingToHave } from './testing-to-have-matchers.class';
import { TestingToThrow } from './testing-to-throw-matchers.class';

// Type.
import { ExpectType } from '../type/expect-type.type';

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

  public contain<Value>(
    value: ExpectType<Value>,
    expected: any,
    expectationFailOutput?: any
  ): this {
    this
      .expect(value, expectationFailOutput)
      .toContain(expected);
    this.setNot(false);
    return this;
  }

  public equal<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<typeof value>,
    expectationFailOutput?: any
  ): this {
    this
      .expect(value, expectationFailOutput)
      .toEqual(expected);
    this.setNot(false);
    return this;
  }

  public match<Value>(
    value: ExpectType<Value>,
    expected: string | RegExp,
    expectationFailOutput?: any
  ): this {
    this
      .expect(value, expectationFailOutput)
      .toMatch(expected);
    this.setNot(false);
    return this;
  }
}
    
