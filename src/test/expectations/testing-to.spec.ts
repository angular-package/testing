// Class.
import { Testing, TestingExpectTo } from "../../lib";
// Execute.
import { ExecuteSpec } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new Testing(
    executeDescribe || ExecuteSpec.describe.expectation["testing-to"],
    executeIt || ExecuteSpec.it.expectation["testing-to"]
  );
  
  const to = new TestingExpectTo();
  
  t.describe(`TestingExpectTo`, () => t
    .it(`it`, () => to
      .contain(['a', 'b', 'c'], 'c')
      .contain('string number', 'ber')
      .equal({a: 2}, {a: 2})
      .match("my string", /string$/)
      .match('number', 'ber')

      .not.contain(['a', 'b', 'c'], 'h')
      .contain(['a', 'b', 'c'], 'a')

      .be.not.bigint('a')
    )
  );  
}
