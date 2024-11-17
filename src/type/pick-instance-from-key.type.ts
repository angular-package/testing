import { Constructor } from "@angular-package/type";
export type PickInstanceFromKey<T, Key extends PropertyKey> = T extends { [K in Key]: readonly (infer E)[] }
  ? E extends Constructor<any>
    ? InstanceType<E>
    : never
  : never;