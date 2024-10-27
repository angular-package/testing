import { TestingItToBeInstanceOf } from "../../lib";
import { Execute } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingItToBeInstanceOf(
    executeDescribe || Execute.describe.it["testing-it-to-be-instanceof"],
    executeIt || Execute.it.it["testing-it-to-be-instanceof"]
  );
  
  t.describe('TestingItToBeInstanceOf', () => t
    .array(['a', 'b', 'c'])
    .boolean(false)
    .date(new Date())
    .error(new Error())
    .function(function() {})
    .map(new Map())
    .number(new Number(27))
    .object(new Object({}))
    .promise(new Promise((resolve, reject) => { resolve('a') }))
    .rangeError(new RangeError('range error'))
    .referenceError(new ReferenceError('reference'))
    .regExp(new RegExp('a'))
    .set(new Set('a'))
    // .storage()
    .string('a')
    .syntaxError(new SyntaxError('syntax error'))
    .typeError(new TypeError('type error'))
    .weakSet(new WeakSet())
  );  
}
