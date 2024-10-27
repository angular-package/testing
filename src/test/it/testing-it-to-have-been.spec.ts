import { TestingItToHaveBeen } from "../../lib";
import { Execute } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingItToHaveBeen(
    executeDescribe || Execute.describe.it["testing-it-to-have-been"],
    executeIt || Execute.it.it["testing-it-to-have-been"]
  );
}
