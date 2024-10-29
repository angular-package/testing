// Class.
import { TestingItToHaveBeen } from "../../lib";
// Execute.
import { ExecuteSpec } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingItToHaveBeen(
    executeDescribe || ExecuteSpec.describe.it["testing-it-to-have-been"],
    executeIt || ExecuteSpec.it.it["testing-it-to-have-been"]
  );
}
