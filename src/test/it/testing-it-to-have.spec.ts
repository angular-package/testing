import { TestingItToHave } from "../../lib";
import { Execute } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingItToHave(
    executeDescribe || Execute.describe.it["testing-it-to-have"],
    executeIt || Execute.it.it["testing-it-to-have"]
  );
  
  const el = document.createElement('div');
  el.className = 'foo bar baz';
  
  t.describe('TestingItToHave', () => t
    .class(el, 'bar')
    .size(['a', 'b'], 2)
    // .spyInteractions()
  );  
}
