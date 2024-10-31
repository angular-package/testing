// Class.
import { TestingItToHave } from '../main';

// Execute.
import { ExecuteSpec } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingItToHave(
    executeDescribe || ExecuteSpec.describe.it["testing-it-to-have"],
    executeIt || ExecuteSpec.it.it["testing-it-to-have"]
  );

  const el = document.createElement('div');
  el.className = 'foo bar baz';

  class ClassA {
    public methodA() {
      return "methodA";
    }
  }
  const classA = new ClassA();

  t.describe('TestingItToHave', () => t
    .beforeEach(() => {
      spyOn(classA, "methodA");
      classA.methodA();
    })
    .class(el, 'bar')
    .size(['a', 'b'], 2)
    .spyInteractions(classA)
  );  
}
