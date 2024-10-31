import { TestingToBeGreaterThan } from "../main";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingToBeGreaterThan(
    executeDescribe,
    executeIt
  );
  t.describe(`TestingToBeGreaterThan`, () => {
    t
      .toBeGreaterThan(37, 27)
      .toBeGreaterThanOrEqual(37, 37)
  });  
}
