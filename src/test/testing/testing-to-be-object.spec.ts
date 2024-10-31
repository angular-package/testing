import { TestingToBeObject } from "../main";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingToBeObject(
    executeDescribe,
    executeIt
  );

  class ClassA {
    public string = 'test';
    public num = 27;
  }

  const classA = new ClassA();

  t.describe(`TestingToBeObject`, () => {
    t
      .toBeObject(t)
      .toBeObjectKey(classA, 'string')
      .toBeObjectKey(t, 'expect', false)
      .toBeObjectKeyIn(t, 'expect')
      .toBeObjectKeys(classA, ['string', 'num'])
      .toBeObjectKeysIn(t, ['expect', 'testingIt'])
      .toBeObjectSomeKeys(classA, ['string', 'test', 'num'])
  });  
}
