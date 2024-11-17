// Class.
import { TestingCounter } from './testing-counter';
import { TestingDescription } from './testing-description';
import { TestingExecutable } from './testing-executable.abstract';
// Type.
import { CounterConfig, Executable } from '../type';
/**
 * 
 * @class
 * @classdesc Common settings for `TestingDescribe` and `TestingIt`.
 */
export abstract class TestingCommon<
  Counter extends boolean = boolean,
  Description extends boolean = boolean
> extends TestingExecutable {

  /**
   * @description Instance of `TestingCounter`.
   */
  public get counter() {
    return this.#counter;
  }

  /**
   * @description Current counter value.
   */
  public get currentCounter() {
    return this.#counter.current;
  }

  /**
   * @description
   */
  public get description() {
    return this.#description;
  }

  /**
   * @description TestingCounter instance.
   */
  #counter;

  /**
   * @private
   */
  #description;

  /**
   * 
   * @param execute 
   * @param executable 
   * @param counter 
   */
  constructor(
    execute?: boolean,
    executable?: Executable,
    counter?: CounterConfig<Counter, Description>
  ) {
    super(execute, executable);

    // Initialize counter instance.
    this.#counter = new TestingCounter(
      typeof counter === 'boolean' ? counter : counter?.active as any
    );

    // Initialize counter description.
    this.#description = new TestingDescription<Description>(
      typeof counter === 'boolean' ? counter : counter?.description as any
    );
  }

  /**
   * 
   * @returns 
   */
  public incrementCounter(): this {
    this.counter.increment();
    return this;
  }

  /**
   * 
   * @returns 
   */
  public resetCounter(): this {
    this.counter.reset();
    return this;
  }
}
