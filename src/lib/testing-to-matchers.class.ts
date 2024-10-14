// Class.
import { TestingExpect } from './testing-expect.abstract';
import { TestingToBeMatchers } from './testing-to-be-matchers.class';
import { TestingToHaveMatchers } from './testing-to-have-matchers.class';
import { TestingToThrowMatchers } from './testing-to-throw-matchers.class';

// Type.
import { ExpectType } from '../type/expect-type.type';

/**
 * Testing matchers.
 */
export class TestingToMatchers extends TestingExpect {
  public get be(): TestingToBeMatchers {
    return this.#be;
  }

  public get have(): TestingToHaveMatchers {
    return this.#have;
  }

  public get throw(): TestingToThrowMatchers {
    return this.#throw;
  }

  #be = new TestingToBeMatchers();
  #have = new TestingToHaveMatchers();
  #throw = new TestingToThrowMatchers();

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
    
