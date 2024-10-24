import { Constructor } from "@angular-package/type";
import { UnionToIntersection } from "../../type/union-to-intersection.type";
import { IntersectionOfInstances } from "../../type/intersection-of-instances.type";

// Mixin function: combining multiple class constructors into one
export function mixin<T extends Constructor<any>[]>(...classes: T) {
  return classes.reduce((acc, currClass) => (
    class extends acc {
      constructor(...args: any[]) {
        super(...args);

        // Call the constructor of each class to initialize properties
        Object.assign(this, new currClass(...args));

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
  )) as Constructor<UnionToIntersection<IntersectionOfInstances<T>>>;
}