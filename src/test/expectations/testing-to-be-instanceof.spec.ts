// Class.
import { Testing, TestingExpectToBeInstanceOf } from "../../lib";
// Execute.
import { ExecuteSpec } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new Testing(
    executeDescribe|| ExecuteSpec.describe.expectation["testing-to-be-instanceof"],
    executeIt || ExecuteSpec.it.expectation["testing-to-be-instanceof"]
  );
  
  const to = new TestingExpectToBeInstanceOf();
  
  t.describe('TestingExpectToBeInstanceOf', () => {
    t
      .spec(e => e.toBeArray(['a', 'b', 'cs']))
    t
      .it('array', () => to.array(['a', 'b', 'c']))
      .it('boolean', () => to.boolean(false).not.boolean('a'))
      // .it('boolean', () => ti.dataView(false))
      .it('date', () => to.date(new Date()).not.date(true))
      .it('error', () => to.error(new Error()))
      .it('evalError', () => to.evalError(new EvalError()))
      .it('function', () => to.function(function() {}))
      .it('map', () => to.map(new Map()))
      .it('number', () => to.number(1).number(new Number(5)))
      .it('object', () => to.object(new Object()).object({}))
      .it('promise', () => to.promise(new Promise((resolve, reject) => {})))
      .it('rangeError', () => to.rangeError(new RangeError()))
      .it('referenceError', () => to.referenceError(new ReferenceError()))
      .it('regexp', () => to.regexp(new RegExp('')))
      .it('set', () => to.set(new Set('1')))
      .it('string', () => to.string('a').string(new String('1')))
      .it('syntaxError', () => to.syntaxError(new SyntaxError()))
      .it('typeError', () => to.typeError(new TypeError()))
      .it('weakMap', () => to.weakMap(new WeakMap()))
      .it('weakSet', () => to.weakSet(new WeakSet()))
  });  
}
