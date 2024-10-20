import { Testing } from "../lib";
import { TestingToBe } from '../lib/expectations/testing-to-be.class';


const testingExp = new TestingToBe();

const testing = new Testing(true, true);


let arr: any[];


// native
beforeEach(() => {
  arr = ['a', 'b', 'c'];
});

testing.beforeEach(() => {
  arr = ['a', 'b', 'c'];
});


describe(`native`, () => {
  console.log(`native arr:`, arr);
  it(`native`, () => {
    console.log(`native arr:`, arr);
  });
});

// 
testing.describe('testing.describe', () => {
  console.log(`testing.describe arr`, arr);

  it(`testing native`, () => {
    console.log(`testing native arr:`, arr);
  });

  testing.it('testing it', () => {
    console.log(`testing it arr:`, arr);
  });
});
