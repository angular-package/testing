import { TestingToHave } from "../../lib";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingToHave(
    executeDescribe,
    executeIt
  );

  class ClassA {
    public methodA(value?: any) {
      return "methodA";
    }
    public methodB(value?: any) {
      return "methodB";
    }
    public methodC(value?: any) {
      return "methodB";
    }
  }

  const classA = new ClassA();
  
  const el = document.createElement('div');
  el.className = 'foo bar baz';

  t.describe(`TestingToHave`, () => {
    t
      .beforeEach(() => {
        spyOn(classA, "methodA");
        spyOn(classA, "methodB");
        spyOn(classA, "methodC");
        classA.methodB();
        classA.methodA();
        classA.methodA({test: 27});
        classA.methodC({test: 37});
      })
      .toHaveBeenCalled(() => classA.methodA)

      // Spy multiple methods.
      .toHaveBeenCalled(() => [classA.methodA, classA.methodB])
      .toHaveBeenCalledBefore(() => [classA.methodB, classA.methodA])
      .toHaveBeenCalledOnceWith(`toHaveBeenCalledOnceWith`, () => classA.methodC, {test: 37})
      .toHaveBeenCalledWith(`toHaveBeenCalledWith`, () => classA.methodA, {test: 27})
      .toHaveClass(el, 'baz')
      .toHaveSize([27, 37, 47], 3)

      // .toHaveSpyInteractions()
  });  
}
