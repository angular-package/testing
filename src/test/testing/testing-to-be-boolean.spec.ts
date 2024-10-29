import { TestingToBeBoolean } from "../../lib";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingToBeBoolean(
    executeDescribe,
    executeIt
  );
  t.describe(`TestingToBeBoolean`, () => {
    t
      .toBeBoolean(false)
      .toBeBooleanType(false);
  });  
}
