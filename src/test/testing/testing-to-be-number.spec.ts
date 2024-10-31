import { TestingToBeNumber } from "../main";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingToBeNumber(
    executeDescribe,
    executeIt
  );

  t.describe(`TestingToBeNumber`, () => {
    t
      // .not.toBeNumber('a')
      .toBeNumber(27)
      .toBeNumberBetween(37, 27, 47)
  });  
}
