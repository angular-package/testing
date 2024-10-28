import { Testing, TestingExpectToThrow } from "../../lib";
import { Execute } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new Testing(
    executeDescribe || Execute.describe.expectation["testing-to-throw"],
    executeIt || Execute.it.expectation["testing-to-throw"]
  );
  const e = new TestingExpectToThrow();
  
  // t.describe(
  //   `TestingExpectToThrow`,
  //   () => t.it('it', () => e.error(function() { new Error('message'); return 'things'; }))
  // );
}