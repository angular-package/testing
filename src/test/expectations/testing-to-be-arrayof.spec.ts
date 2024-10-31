// Class.
import { Testing } from '../main';
// Execute.
import { ExecuteSpec } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new Testing(
    executeDescribe || ExecuteSpec.describe.expectation["testing-to-be-arrayof"],
    executeIt || ExecuteSpec.it.expectation["testing-to-be-arrayof"]
  );
  t.describe('TestingExpectToBeArrayOf', () => {
    t
      .spec(e => e.to.be.arrayof.bigint([BigInt(27), BigInt(37), BigInt(47)]), `e.to.be.arrayof.bigint`)
      .spec(e => e.to.be.arrayof.boolean([false, true, true, false, false]), `e.to.be.arrayof.boolean`)
      .spec(e => e.to.be.arrayof.date([new Date(), new Date(), new Date()]), `e.to.be.arrayof.date`)
      .spec(e => e.to.be.arrayof.defined(['a', 'b', 27]), `e.to.be.arrayof.defined`)
      .spec(e => e.to.be.arrayof.false([false, false,]), `e.to.be.arrayof.false`)
      .spec(e => e.to.be.arrayof.null([null, null,]), `e.to.be.arrayof.null`)
      .spec(e => e.to.be.arrayof.number([27, 37, 47]), `e.to.be.arrayof.number`)
      .spec(e => e.to.be.arrayof.regExp([RegExp(''), RegExp('a')]), `e.to.be.arrayof.regExp`)
      .spec(e => e.to.be.arrayof.string(['a', 'b', 'c']), `e.to.be.arrayof.string`)
      .spec(e => e.to.be.arrayof.symbol([Symbol('a'), Symbol('b'), Symbol('c')]), `e.to.be.arrayof.symbol`)
      .spec(e => e.to.be.arrayof.undefined([undefined, undefined]), `e.to.be.arrayof.undefined`)
      .spec(e => e.to.be.arrayof.true([true, true, true, true]), `e.to.be.arrayof.true`)

      .spec(e => e.to.be.arrayof.not.bigint(['a', 'b']), `e.to.be.arrayof.not.bigint`)
      .spec(e => e.to.be.arrayof.not.boolean([27, 37]), `e.to.be.arrayof.not.boolean`)
      .spec(e => e.to.be.arrayof.not.date([47]), `e.to.be.arrayof.not.date`)
      .spec(e => e.to.be.arrayof.not.defined([undefined, undefined]), `e.to.be.arrayof.not.defined`)
      .spec(e => e.to.be.arrayof.not.false([true, true]), `e.to.be.arrayof.not.false`)
      .spec(e => e.to.be.arrayof.not.null([27, 37]), `e.to.be.arrayof.not.null`)
      .spec(e => e.to.be.arrayof.not.number([BigInt(27)]), `e.to.be.arrayof.not.number`)
      .spec(e => e.to.be.arrayof.not.regExp(['a', 'b']), `e.to.be.arrayof.not.regExp`)
      .spec(e => e.to.be.arrayof.not.string([427, 327, 447]), `e.to.be.arrayof.not.string`)
      .spec(e => e.to.be.arrayof.not.symbol(['a', 'b']), `e.to.be.arrayof.not.symbol`)
      .spec(e => e.to.be.arrayof.not.undefined(['c', 'd']), `e.to.be.arrayof.not.undefined`)
      .spec(e => e.to.be.arrayof.not.true([false, false, false, true]), `e.to.be.arrayof.not.true`)

      // 
      .spec(e => e.toBeArrayOfBigInt([BigInt(27), BigInt(37), BigInt(47)]))
      .spec(e => e.toBeArrayOfBoolean([false, true, true, false, false]))
      .spec(e => e.toBeArrayOfDate([new Date(), new Date(), new Date()]))
      .spec(e => e.toBeArrayOfDefined(['a', 'b', 27]))
      .spec(e => e.toBeArrayOfFalse([false, false,]))
      .spec(e => e.toBeArrayOfNull([null, null,]))
      .spec(e => e.toBeArrayOfNumber([27, 37, 47]))
      .spec(e => e.toBeArrayOfRegExp([RegExp(''), RegExp('a')]))
      .spec(e => e.toBeArrayOfString(['a', 'b', 'c']))
      .spec(e => e.toBeArrayOfSymbol([Symbol('a'), Symbol('b'), Symbol('c')]))
      .spec(e => e.toBeArrayOfUndefined([undefined, undefined]))
      .spec(e => e.toBeArrayOfTrue([true, true, true, true]))
  });  
}
