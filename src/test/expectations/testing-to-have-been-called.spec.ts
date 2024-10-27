// Class.
import { Testing, TestingExpectToHaveBeenCalled } from "../../lib";

// Constant.
import { Execute } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;


if (execute) {
  const t = new Testing(
    executeDescribe || Execute.describe.expectation["testing-to-have-been-called"],
    executeIt || Execute.it.expectation["testing-to-have-been-called"]
  );
  const expect = new TestingExpectToHaveBeenCalled();
  
  class Test {
    public number(value?: any) {}
    public once(value?: any) {}
  }
  
  let test: Test;
  
  t.describe('TestingExpectToHaveBeenCalled', () => {
    t
      .beforeEach(() => {
        test = new Test();
        spyOn(test, 'number');
        spyOn(test, 'once');
        test.number();
        test.number({a: 27});
        test.once({a: 37})
      })
  
      .it('it', () => {
        expect
          .before(test.number, test.once)
          .called(test.number)
          .onceWith(test.once, {a: 37})
          .times(test.number, 2)
          .with(test.number, {a: 27})
      })
  });  
}
