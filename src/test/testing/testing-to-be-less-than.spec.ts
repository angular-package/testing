import { TestingToBeLessThan } from "../main";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingToBeLessThan(
    executeDescribe,
    executeIt
  );

  t.describe(`TestingToBeLessThan`, () => {
    t
      .toBeLessThan(27, 37)
      .toBeLessThanOrEqual(27, 27)
  });  
}
