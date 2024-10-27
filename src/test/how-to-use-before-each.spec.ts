// Constant.
import { Execute } from "./execute";

// Class.
import { Testing } from "../lib";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new Testing(
    executeDescribe || Execute.describe["how-to-before-each"],
    executeIt || Execute.it["how-to-before-each"]
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
