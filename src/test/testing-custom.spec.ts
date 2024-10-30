// TestingCustom
import { TestingDescribe, TestingExpectation, TestingIt } from "../lib";
import { TestingCustom } from "../lib/testing-custom.class";

// Selected.
import { TestingToBe } from "../lib/testing/testing-to-be.class";
import { TestingToBeArrayOf } from "../lib/testing/testing-to-be-array-of.class";
import { TestingToBeBoolean } from "../lib/testing/testing-to-be-boolean.class";
import { TestingToBeGreaterThan } from "../lib/testing/testing-to-be-greater-than.class";
import { TestingToBeInstanceOf } from "../lib/testing/testing-to-be-instanceof.class";
import { TestingToBeLessThan } from "../lib/testing/testing-to-be-less-than.class";
import { TestingToBeNumber } from "../lib/testing/testing-to-be-number.class";
import { TestingToBeObject } from "../lib/testing/testing-to-be-object.class";
import { TestingToBeString } from "../lib/testing/testing-to-be-string.class";
import { TestingToHave } from "../lib/testing/testing-to-have.class";

// Execute.
import { ExecuteSpec } from "./execute";

const execute = false;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const README = new TestingCustom(
    [TestingToBe], // List of test.
    true, // Describe executable.
    true, // It executable.
    { describe: [], it: [] }, // Executable numbers of `describe` and `it`.
    ['DescribeA'], // Descriptions for `describe`.
    ['ItA'], // Expectations for `it`.
    [false, false], // `boolean` or list of [`boolean`, `boolean`]
    new TestingDescribe(), // Common instance for `TestingDescribe` for `counter` purposes
    new TestingIt(),  // Common instance for `TestingIt` for `counter` purposes
    new TestingExpectation() // Common instance for `TestingExpectation`
  );
  const t = new TestingCustom(
    [
      TestingToBeArrayOf,
      TestingToBeBoolean,
      TestingToBeGreaterThan,
      TestingToBeInstanceOf,
      TestingToBeLessThan,
      TestingToBeNumber,
      TestingToBeObject,
      TestingToBeString,
      TestingToBe,
      TestingToHave,
    ],
    executeDescribe || ExecuteSpec.describe["testing-custom"],
    executeIt || ExecuteSpec.it["testing-custom"],
    undefined,
    ['describeA', 'describeB'],
    ['itA', 'itB'],
    true,
  );
  
  t.describe('Describe', () => {
    t.it('it expect usage: t.expect.toBeArray()', () => {
      t.expect.toBeArray([27, 37]);
    });
  
    // Described in `descriptions` and `expectations`.
    t.describe('describeA', () => t.it('itA', () => t.expect.toBeArrayOfDate([new Date()])));
  
    t.testing
      .toBeArrayOfBigInt([BigInt(27)])
      .toBeGreaterThan(37, 27)
      .toHaveSize([27, 37, 47], 3)
  });  
}
