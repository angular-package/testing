// Class.
import { Testing, TestingExpectation } from "./main";
// Execute.
import { ExecuteSpec } from "./execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new Testing(
    executeDescribe,
    executeIt
  );
  const to = new TestingExpectation();  
  t.describe(`TestingExpectation`, () => t
    .spec(e => e.toBeArrayOfNull([null, null]))
    .it(`it`, () => to
      .toContain(['a', 'b', 'c'], 'c')
      .toContain('string number', 'ber')
      .toEqual({a: 2}, {a: 2})
      .toMatch("my string", /string$/)
      .toMatch('number', 'ber')

      .not.toContain(['a', 'b', 'c'], 'h')
      .toContain(['a', 'b', 'c'], 'a')

      .not.toBeBigInt('a')
    )
  );  
}
