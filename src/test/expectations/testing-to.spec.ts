// Class.
import { Testing, TestingExpectTo } from "../../lib";
// Constant.
import { Execute } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new Testing(
    executeDescribe || Execute.describe.expectation["testing-to"],
    executeIt || Execute.it.expectation["testing-to"]
  );
  
  const expect = new TestingExpectTo();
  
  t.describe('TestingExpectTo', () => t
    .it('it', () => expect
      .contain(['a', 'b', 'c'], 'c')
      .contain('string number', 'ber')
      .equal({a: 2}, {a: 2})
      .match("my string", /string$/)
      .match('number', 'ber')
    )
  );  
}
