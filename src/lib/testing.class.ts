// Class.
import { TestingDescribe } from './testing-describe.class';
import { TestingIt } from './testing-it.class';
import { TestingTests } from './testing-tests.class';
// Interface.
import { ExecutableTests } from '../interface/executable-tests.interface';
// Jasmine.
import {} from 'jasmine';
/**
 * Simple `class` to support testing.
 */
export class Testing extends TestingTests {
  /**
   * Defines the wrapper function of the `describe()` function of jasmine with the ability to decide its execution.
   * @param description "Textual description of the group"
   * @param specDefinitions "Function for Jasmine to invoke that will define"
   * @returns The return value is a `function` that contains the `describe()` function of jasmine with the ability to decide its execution.
   */
  public static defineDescribe(
    description: string,
    specDefinitions: () => void
  ): (execute: boolean) => void {
    return TestingDescribe.define(description, specDefinitions);
  }

  /**
   * Defines the wrapper function of the `it()` function of jasmine with the ability to decide its execution.
   * @param expectation "Textual description of what this spec is checking"
   * @param assertion "Function that contains the code of your test. If not provided the test will be pending."
   * @param timeout "Custom timeout for an async spec."
   * @returns The return value is a `function` that contains the `it()` function of jasmine with the ability to decide its execution.
   */
  public static defineIt(
    expectation: string,
    assertion: jasmine.ImplementationCallback,
    timeout?: number | undefined
  ): (execute: boolean) => void {
    return TestingIt.define(expectation, assertion, timeout);
  }

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
  }
}
