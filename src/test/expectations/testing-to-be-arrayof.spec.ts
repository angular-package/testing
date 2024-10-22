import { Testing } from "../../lib";

const t = new Testing(true, true);

t.describe('TestingToBeArrayOf', () => {
  t
    .spec(e => e.to.be.arrayof.bigint([BigInt(27), BigInt(37), BigInt(47)]))
    .spec(e => e.to.be.arrayof.boolean([false, true, true, false, false]))
    .spec(e => e.to.be.arrayof.date([new Date(), new Date(), new Date()]))
    .spec(e => e.to.be.arrayof.defined(['a', 'b', 27]))
    .spec(e => e.to.be.arrayof.false([false, false,]))
    .spec(e => e.to.be.arrayof.null([null, null,]))
    .spec(e => e.to.be.arrayof.number([27, 37, 47]))
    .spec(e => e.to.be.arrayof.regExp([RegExp(''), RegExp('a')]))
    .spec(e => e.to.be.arrayof.string(['a', 'b', 'c']))
    .spec(e => e.to.be.arrayof.symbol([Symbol('a'), Symbol('b'), Symbol('c')]))
    .spec(e => e.to.be.arrayof.undefined([undefined, undefined]))
    .spec(e => e.to.be.arrayof.true([true, true, true, true]))

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
