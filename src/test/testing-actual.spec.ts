import { TestingActual } from "../lib";

const t = new TestingActual();

class ClassA {
  public methodA(value?: any) {
    return "methodA";
  }

  public methodB(value?: any) {
    return "methodB";
  }
}

const classA = new ClassA();

t.describe('TestingActual', () => {

  // 
  t
    .actual('a b c d e f g h i j k l m n o p r s')
    .toBeString()
    .stringIncludes(['f'])
    .stringIncludesSome(['f', 'z'])
    .stringOfLengthBetween(27, 47)
    .toBeStringType()
  
  t
    .beforeEach(() => {
      spyOn(classA, "methodA");
      classA.methodA({test: 27});
    })
    .spy(() => classA.methodA)
    .toHaveBeenCalled()
    .toHaveBeenCalledWith({test: 27})
    .toHaveBeenCalledTimes(1)
    .toHaveBeenCalledOnceWith({test: 27})
});
