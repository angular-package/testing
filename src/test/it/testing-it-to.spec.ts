// Class.
import { TestingItTo } from '../main';
// Execute.
import { ExecuteSpec } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingItTo(
    executeDescribe || ExecuteSpec.describe.it["testing-it-to"],
    executeIt || ExecuteSpec.it.it["testing-it-to"]
  );

  // `to{Method}`
  t.describe('TestingItTo', () => t
    .contain(['a', 'b', 'c'], 'b')
    .equal(['27', 37, 47], ['27', 37, 47])
    .match("my string", /string$/)
    .match("other string", "ing")
  );

  // `toBe{Method}`
  t.describe('TestingItTo', () => t.be
    .array([27, 37])
    .key(74)
  );

  // `toBeArrayOf{Method}`
  t.describe('TestingItTo', () => t.be.arrayof
    .boolean([false, false])
    .date([new Date(), new Date()])
  );

  // `toBeBoolean{Method}`
  t.describe('TestingItTo', () => t.be.boolean
    .boolean(false)
    .type(false)
  );

  // `toBeInstanceOf{Method}`
  t.describe('TestingItTo', () => t.be.instanceof
    .array([27, 37])
    .map(new Map())
  );

  // `toHave{Method}`
  t.describe('TestingItTo', () => t.have
    .size([27, 37], 2)
  );

  // `toHaveBeenCalled{Method}`
  class ClassA {
    methodA(value?: any) {
      return "methodA";
    }
    methodB(value?: any) {
      return "methodB";
    }
  }
  let classA: ClassA;
  t.describe('TestingItTo', () => t.have.been.called
    .beforeEach(() => {
      classA = new ClassA();
      spyOn(classA, "methodA");
      classA.methodA();
      spyOn(classA, "methodB");
      classA.methodB();
    })
    .called(() => classA.methodA)
    // multiple calls
    .called(() => [classA.methodA, classA.methodB])
  );

  // `toThrow{Method}`
  t.describe('TestingItTo', () => t.throw
    .error(function() { throw new Error('Error') }, 'Error')
    .matching(function() { throw new Error('nope'); }, function(thrown) { return thrown.message === 'nope'; })
    .throw(function() { throw 'things'; }, 'things')
  );
}
