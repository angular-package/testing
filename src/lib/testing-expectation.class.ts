// Class.
import { Expect } from './expect.class';
import { TestingExpect } from './testing-expect.class';
import {
  TestingExpectTo,
  TestingExpectToBe,
  TestingExpectToBeArrayOf,
  TestingExpectToHave,
  TestingExpectToHaveBeen,
  TestingExpectToHaveBeenCalled,
  TestingExpectToThrow,
} from './expectation';
// Functions.
import { mixin } from './function';
// Type.
import { Constructor } from '@angular-package/type';
import { ExpectType } from '../type';
/**
 * Testing expectation.
 * @class
 * @classdesc
 */
export class TestingExpectation extends mixin(
  TestingExpectTo,
  TestingExpectToBe,
  TestingExpectToBeArrayOf,
  TestingExpectToHave,
  TestingExpectToHaveBeen,
  TestingExpectToHaveBeenCalled,
  TestingExpectToThrow
) {
  /**
   * @description
   * @param expect 
   */
  constructor(expect: TestingExpect = new TestingExpect()) {
    super(expect);
  }


}
