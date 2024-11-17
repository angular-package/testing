import { UnionToIntersection } from "./union-to-intersection.type";

// ChatGPT.
export type UnionToTuple<U, Last = LastInUnion<U>> = [U] extends [never]
  ? []
  : [...UnionToTuple<Exclude<U, Last>>, Last];

export type LastInUnion<U> = UnionToIntersection<U extends any ? (x: U) => 0 : never> extends (x: infer L) => 0 
  ? L 
  : never;