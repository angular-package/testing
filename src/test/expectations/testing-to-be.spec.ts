// Class.
import { Testing, TestingExpectToBe } from "../../lib";
// Execute.
import { ExecuteSpec } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new Testing(
    executeDescribe || ExecuteSpec.describe.expectation["testing-to-be"],
    executeIt || ExecuteSpec.it.expectation["testing-to-be"]
  );
  
  const to = new TestingExpectToBe();
  
  t.describe('TestingExpectToBe', () => 
    t
      .it('array', () => to.array([]).not.array('Array'))
      .it('boolean', () => to.boolean(false))
      .it('date', () => to.date(new Date()))
      .it('function', () => to.function(function() {}))
      .it('number', () => to.number(1).number(new Number(5)))
      .it('object', () => to.object(new Object()).object({}))
      .it('regexp', () => to.regexp(new RegExp('')))
      .it('string', () => to.string('a').string(new String('1')))
  );  
}
