import { Testing, TestingToBeInstanceOf } from "../../lib";

const ti = new TestingToBeInstanceOf();

const t = new Testing(true, true);

t.describe('TestingToBeInstanceOf', () => {
  t
    .it('array', () => ti.array(['a', 'b', 'c']))
    .it('boolean', () => ti.boolean(false))
    // .it('boolean', () => ti.dataView(false))
    .it('date', () => ti.date(new Date()))
    .it('error', () => ti.error(new Error()))
    .it('evalError', () => ti.evalError(new EvalError()))
    .it('function', () => ti.function(function() {}))
    .it('map', () => ti.map(new Map()))
    .it('number', () => ti.number(1).number(new Number(5)))
    .it('object', () => ti.object(new Object()).object({}))
    .it('promise', () => ti.promise(new Promise((resolve, reject) => {})))
    .it('rangeError', () => ti.rangeError(new RangeError()))
    .it('referenceError', () => ti.referenceError(new ReferenceError()))
    .it('regexp', () => ti.regexp(new RegExp('')))
    .it('set', () => ti.set(new Set('1')))
    .it('string', () => ti.string('a').string(new String('1')))
    .it('syntaxError', () => ti.syntaxError(new SyntaxError()))
    .it('typeError', () => ti.typeError(new TypeError()))
    .it('weakMap', () => ti.weakMap(new WeakMap()))
    .it('weakSet', () => ti.weakSet(new WeakSet()))
});

