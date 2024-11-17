import { Constructor } from "@angular-package/type";
import { PickInstanceFromKey } from "./pick-instance-from-key.type";
import { UnionToTuple } from "./union-to-tuple.type";
// Along with ChatGPT.
export type TupleExpectations<T extends readonly Constructor<any>[]> = Readonly<UnionToTuple<
  {
    [K in keyof T]: T[K] extends Constructor<any>
      ? PickInstanceFromKey<InstanceType<T[K]>, 'expectations'>
      : never;
  }[number]
>>;
