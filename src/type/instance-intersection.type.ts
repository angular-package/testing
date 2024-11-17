import { UnionToIntersection } from "./union-to-intersection.type";
// ChatGPT.
export type InstanceIntersection<T extends any[]> = UnionToIntersection<
  InstanceType<T[number]>
>;