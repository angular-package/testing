import { Testing } from "../lib";

import { TestingExpectToBe } from '../lib/expectation/testing-expect-to-be.class';
import { Execute } from "./execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const e = new TestingExpectToBe();
  const t = new Testing(
    executeDescribe || Execute.describe["testing-before-each"], 
    executeIt || Execute.it["testing-before-each"]
  );

  let arr: any[];

  // native
  beforeEach(() => {
    arr = ['a', 'b', 'c'];
  });
  
  t.beforeEach(() => {
    arr = ['a', 'b', 'c'];
  });
  
  
  describe(`native`, () => {
    console.log(`native arr:`, arr);
    it(`native`, () => {
      console.log(`native arr:`, arr);
    });
  });
  
  
  t.describe('testing.describe', () => {
    console.log(`testing.describe arr`, arr);
  
    it(`testing native`, () => {
      console.log(`testing native arr:`, arr);
    });
  
    t.it('testing it', () => {
      console.log(`testing it arr:`, arr);
    });
  });  
}
