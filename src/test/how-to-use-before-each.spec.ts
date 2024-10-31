// Constant.
import { ExecuteSpec } from "./execute";

// Class.
import { Testing } from "./main";

const execute = false;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new Testing(
    executeDescribe || ExecuteSpec.describe["how-to-before-each"],
    executeIt || ExecuteSpec.it["how-to-before-each"]
  );

  let arr: any[];
  
  // native
  beforeEach(() => arr = ['a', 'b', 'c']);

  t.describe('How to use beforeEach()', () => t
    .beforeEach(() => (arr = ['a', 'b', 'c']))
    .spec(e => e.toBeArray(arr).not.toBeBoolean(arr))
    .it('it', () => t.expect.toBeArray(arr))
  );  
}
