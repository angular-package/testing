// Class.
import { TestingItTo } from "../../lib";
// Constant.
import { Execute } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingItTo(
    executeDescribe || Execute.describe.it["testing-it-to"],
    executeIt || Execute.it.it["testing-it-to"]
  );
  t.describe('TestingItTo', () => 
    t
      .contain(['a', 'b', 'c'], 'b')
      .equal(['27', 37, 47], ['27', 37, 47])
      .match("my string", /string$/)
      .match("other string", "ing")
  );    
}
