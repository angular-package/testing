// Class.
import { TestingItToBeArrayOf, TestingItToBeInstanceOf } from "./it";

// Interface.
import { ExecutableTests } from "../interface/executable-tests.interface";
import { ArrayToObject } from "../type/array-to-object.type";
// import { UnionToIntersection } from '../type/union-to-intersection.type';

/**
 *
 */
export class Test<It extends Array<new (...args: any[]) => any>> {
  /**
   * 
   */
  public get it(): ArrayToObject<It> {
    return this as any;
  }

  /**
   * 
   * @angularpackage
   */
  public static allowDescribe = true;

  /**
   * The defaults for each created
   * @angularpackage
   */
  public static allowIt = true;

  /**
   * Private container.
   * @angularpackage
   */
  // #instance: Map<Names, Container> = new Map();

  #it: ArrayToObject<It> = {} as any;

  /**
   * 
   * @param name 
   * @param allowDescribe 
   * @param allowIt 
   * @param executable 
   * @angularpackage
   */
  constructor(
    // ...name: Names[]
    // ...specs: Specs[]
    it: It,
    // specs: Specs,
    // name: Container<Names, Specs>,
    // specs?: Specs,
    // allowDescribe: boolean = Test.allowDescribe,
    // allowIt: boolean = Test.allowIt,
    // executable?: ExecutableTests,
  ) {
  }

  /**
   * 
   * @param name 
   * @param allowDescribe 
   * @param allowIt 
   * @param executable 
   * @returns 
   * @angularpackage
   */
  // public add(
  //   name: Names,
  //   allowDescribe: boolean = Test.allowDescribe,
  //   allowIt: boolean = Test.allowIt,
  //   executable?: ExecutableTests 
  // ): this {
  //   // (this.#instance.has(name) === false) && this.#instance.set(name, new Testing(allowDescribe, allowIt, executable));
  //   return this;
  // }

  /**
   * The instance method get the testing instance from the private container.
   * @param name 
   * @returns 
   * @angularpackage
   */
  // public get<Name extends keyof It>(
  //   name: Name
  // ): ArrayToObject<It[Name]> {
  //   // Specs[Name]
  //   return 'a';
  //   // return this.#instance.get(name)! as any;
  // }
  


  /**
   * 
   * @param name 
   * @param allowDescribe 
   * @param allowIt 
   * @param executable 
   * @returns 
   * @angularpackage
   */
  // public set(
  //   name: Names,
  //   allowDescribe: boolean = Test.allowDescribe,
  //   allowIt: boolean = Test.allowIt,
  //   executable?: ExecutableTests
  // ): this {
  //   // this.#instance.set(name, new Testing(allowDescribe, allowIt, executable));
  //   return this;
  // }
}

