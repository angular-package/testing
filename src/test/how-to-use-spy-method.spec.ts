// Class.
import { Testing } from './main';

// Constants.
import { ExecuteSpec } from './execute';

const execute = false;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new Testing(
    executeDescribe || ExecuteSpec.describe['how-to-spy-method'],
    executeIt || ExecuteSpec.it['how-to-spy-method']
  );
  const Calculator = {
    currentVal:0,
    varAfterEachExample:0,
    add:function (num1: number) {
      this.currentVal += num1;
      return this.currentVal;
    },
    addAny:function () {    
      var sum = this.currentVal;
      for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
      }
      this.currentVal = sum;
      return this.currentVal;
    }, 
  };
  t.describe(`How to use \`spy()\` method of \`Testing\``, () =>
    // Use `actual()` to store data for multiple tests.
    t
        .beforeEach(() => {
          spyOn(Calculator, 'addAny');
          Calculator.addAny();
          spyOn(Calculator, 'add');
          Calculator.add(27);
        })
        .spy(
          () => Calculator.add,
          test => test
            .toHaveBeenCalledWith(27)
        )
        .spy(
          () => Calculator.addAny,
          test => test
            .toHaveBeenCalled()
      )
  );
}