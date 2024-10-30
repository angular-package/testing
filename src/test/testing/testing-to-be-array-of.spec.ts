// Class.
import { Testing, TestingIt } from "../../lib";
import { TestingToBeArrayOf } from "../../lib/testing";
// Execute.
import { ExecuteSpec } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new Testing(
    executeDescribe,
    executeIt,
  );

  const testingIt = new TestingIt(false);
  const test4 = new Testing(
    executeDescribe,
    executeIt,
    undefined,
    true,
    undefined,
    testingIt
  );

  const test1 = new TestingToBeArrayOf();
  const test2 = new TestingToBeArrayOf(false, false, {it: [4, 2]}, true);
  const test3 = new TestingToBeArrayOf(false, false, undefined, true, undefined, testingIt);
  
  test1.describe(`TestingToBeArrayOf true`, () => {
    test1
      .toBeArrayOfBigInt([BigInt(37), BigInt(27)])
      .toBeArrayOfDate([new Date(), new Date()])
      .toBeArrayOfDefined(['37', '47'])
      .toBeArrayOfFalse([false, false])
      .toBeArrayOfNull([null, null])
      .toBeArrayOfRegExp([new RegExp('b'), new RegExp('a')])
      .toBeArrayOfString(['a', 'b'])
      .toBeArrayOfSymbol([Symbol('a'), Symbol('b')])
      .toBeArrayOfTrue([true, true, true, true])
      .toBeArrayOfUndefined([undefined, undefined, undefined, undefined])
  });
  test2.describe(`TestingToBeArrayOf false`, () => {
    test2
      .toBeArrayOfDefined(['37', '47'])
      .toBeArrayOfNull([null, null])
      .toBeArrayOfSymbol([Symbol('a'), Symbol('b')])
      .toBeArrayOfUndefined([undefined, undefined, undefined, undefined])
  });
  // Uncomment to check `testingIt`.
  // test4.describe(`TestingToBeArrayOf testingIt`, () => {
  //   test3
  //     .toBeArrayOfDefined(['37', '47'])
  //     .toBeArrayOfNull([null, null])
  //     .toBeArrayOfSymbol([Symbol('a'), Symbol('b')])
  //     .toBeArrayOfUndefined([undefined, undefined, undefined, undefined])
  // });
}
