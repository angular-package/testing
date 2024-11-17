import { Constructor } from "@angular-package/type";
import { PickInstanceFromKey } from "./pick-instance-from-key.type";
import { UnionToIntersection } from "./union-to-intersection.type";
// Along with ChatGPT.
export type TestingExpectations<T> = UnionToIntersection<T extends Constructor<any>
  ? PickInstanceFromKey<InstanceType<T>, 'expectations'>
  : never>;