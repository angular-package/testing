// Constants.
import { ExecuteSpec } from './execute';

// Class.
import { Testing } from "./main";

const execute = false;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new Testing(
    executeDescribe || ExecuteSpec.describe['how-to-actual-method'],
    executeIt || ExecuteSpec.it['how-to-actual-method']
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
      return  this.currentVal;
    }, 
  };
  t.describe(`How to use \`actual()\` method of \`Testing\``, () =>
     // Use `actual()` to store data for multiple tests.
     t
      .actual(Calculator.currentVal,
        test => test
          .toBeDefined()
          .toEqual(0)
      )
  );  
}
