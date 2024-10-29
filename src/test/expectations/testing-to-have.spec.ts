// Class.
import { Testing, TestingExpectToHave } from "../../lib";
// Execute.
import { ExecuteSpec } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new Testing(
    executeDescribe || ExecuteSpec.describe.expectation["testing-to-have"],
    executeIt || ExecuteSpec.it.expectation["testing-to-have"]
  );
  const expect = new TestingExpectToHave();
  
  const el = document.createElement('div');
  el.className = 'foo bar baz';
  
  t.describe('TestingExpectToHave', () => {
    t
      .it('it', () => {
        expect
          .class(el, 'bar')
          .size(['a', 'b'], 2)
          // .spyInteractions()
      })
      .toHaveClass(el, 'bar')
      .toHaveSize(['a', 'b'], 2)
      // .toHaveSpyInteractions()
  });  
}
