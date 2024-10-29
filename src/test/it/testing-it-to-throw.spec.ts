// Class.
import { TestingItToThrow } from "../../lib";
// Execute.
import { ExecuteSpec } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingItToThrow(
    executeDescribe || ExecuteSpec.describe.it["testing-it-to-throw"],
    executeIt || ExecuteSpec.it.it["testing-it-to-throw"]
  );
  t.describe('TestingItToThrow', () => t
    .error(function() { throw new Error('Error') }, 'Error')
    .matching(function() { throw new Error('nope'); }, function(thrown) { return thrown.message === 'nope'; })
    .throw(function() { throw 'things'; }, 'things')
  );  
}
