import { TestingDescribe } from "./main";
import { ExecuteSpec } from "./execute";

const execute = false;

if (execute) {
  const range = (start: number, stop: number, step: number = 1) =>
    Array.from(
      { length: Math.ceil((stop - start) / step) },
      (_, i) => start + i * step,
    );
  
  const t = new TestingDescribe<'DescribeA' | 'FDescribe' | 'XDescribe'>(
    execute || ExecuteSpec.describe["testing-describe"]
  );
  
  console.log(t.counterActive); // true
  console.log(t.counterDescription); // false
  
  t.describe('DescribeA', () => {
    it('', () => {});
  });
  
  // t.fdescribe('FDescribe', () => {});
  
  console.log(`t.getCounter()`, t.getCounter());
  console.log(`t.isExecutable(1)`, t.isExecutable(1));

  const t1 = new TestingDescribe(false, [17, 26], true);
  
  t1.xdescribe('XDescribe', () => {});
  
  range(0, 27).forEach(v => {
    t1.describe(`Describe`, () => {
      it("", () => {});
    });
  });  
}
