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

  const el = document.createElement('div');
  el.className = 'foo bar baz';

  t.describe(`TestingExpectTo not`, () => t
    .it(`it`, () => {
      to
        .not
        .contain(['a', 'b', 'c'], 'd')
        .contain(['a', 'b', 'c'], 'c')
        .not
        .have
        .class(el, 'test')
        .class(el, 'baz')
        .not
        .class(el, 'test');
      
      to.have.not;

      console.log(to.getNot());
    })
  );
}
