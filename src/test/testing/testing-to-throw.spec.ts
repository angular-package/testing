import { TestingToThrow } from "../main";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingToThrow(
    executeDescribe,
    executeIt
  );
  t.describe(`TestingToThrow`, () => 
    t
      .toThrowError(() => { throw new Error('Error') }, 'Error')
      // .toThrowMatching()
  );
}
