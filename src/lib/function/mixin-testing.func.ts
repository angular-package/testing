// Class.
import { TestingIt } from "../testing-it.class";
// Type.
import { Constructor } from "@angular-package/type";
import { CounterConfig, InstanceOfConstructor, UnionToIntersection } from "../../type";
// Interface.
import { ExecutableTests } from "../../interface/executable-tests.interface";
// Mixin function: combining multiple class constructors into one
export function mixinTesting<T extends Constructor<any>[]>(...classes: T) {
  return classes.reduce((acc, currClass) => (
    class extends acc {
      constructor(
        allowIt: boolean,
        executable?: ExecutableTests,
        counter: CounterConfig = [true, false],
        testingIt?: TestingIt,
      ) {
        super(allowIt, executable, counter, testingIt);

        // Call the constructor of each class to initialize properties
        Object.assign(this, new currClass(allowIt, executable, counter, testingIt));

        // Copy methods from the current class prototype
        Object
          .getOwnPropertyNames(currClass.prototype)
          .forEach(name => {
            Object.defineProperty(
              acc.prototype,
              name,
              Object.getOwnPropertyDescriptor(currClass.prototype, name) ||
                Object.create(null)
            );
          })
          // .forEach(name => (name !== 'constructor') && ((this as any)[name] = currClass.prototype[name].bind(this)));
      }
    }
  )/*, class {}*/) as Constructor<UnionToIntersection<InstanceOfConstructor<T[number]>>>;
  // as Constructor<UnionToIntersection<IntersectionOfInstances<T>>>;
}