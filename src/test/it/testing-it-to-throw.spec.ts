// Class.
import { TestingItToThrow } from "../../lib";
// Config.
import { Execute } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingItToThrow(
    executeDescribe || Execute.describe.it["testing-it-to-throw"],
    executeIt || Execute.it.it["testing-it-to-throw"]
  );

  // t.describe('TestingItToThrow', () => t
  //   // .error(new Error())
  //   // .matching()
  //   // .throw()
  // );  
}
