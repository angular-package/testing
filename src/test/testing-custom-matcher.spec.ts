export {};
// Namespace.
// import { Jasmine } from "./main";
// Class.
// import { _Testing } from '../lib/temp/testing.class.ignore';
// import { TestingExpectToBe } from '../lib/expectation/testing-expect-to-be.class';
// // Constants.
// import { TESTING_ARRAY_BIGINT } from '../lib/constants/array.const';
// import { TESTING_BIGINT } from '../lib/constants/big-int.const';
// import { TESTING_CLASS, TestingClass, TestingPerson } from '../lib/constants/class.const';
// import { TESTING_DATE } from '../lib/constants/date.const';
// import { TESTING_FUNCTION } from '../lib/constants/function.const';
// import { TESTING_NOT_DEFINED } from '../lib/variable/not-defined.variable';
// import { TESTING_NULL } from '../lib/constants/null.const';
// import { TESTING_NUMBER } from '../lib/constants/number.const';
// import { TESTING_OBJECT } from '../lib/constants/object.const';
// import { TESTING_REGEXP } from '../lib/constants/regexp.const';
// import { TESTING_STRING } from '../lib/constants/string.const';
// import { TESTING_SYMBOL_NUMBER } from '../lib/constants/symbol.const';
// import { TESTING_TRUE, TESTING_FALSE } from '../lib/constants/boolean.const';
// import { TESTING_UNDEFINED } from '../lib/constants/undefined.const';
// import { Testing } from "./main";
/**
 * Create `Testing` instance.
 */
// const testing = new Testing(true, true);

// const test = new TestingTest(true, true);

// test.describe('Config', () => 
//     test
//       .beforeEach(() => {})
//       .toContain(['a', 'b', 'c'], 'c', 'Contain c')
//       .toBeClass(Testing, true, 'Testing')
// );

// const arrayMatcher: jasmine.CustomMatcherFactories = {
//   toBeSorted: (
//     util: jasmine.MatchersUtil,
//   ) => {
//     return  {
//       compare: (actual: any): jasmine.CustomMatcherResult => {
//         const result: jasmine.CustomMatcherResult = {
//           pass: true,
//           message: ''
//         }
//         for(let i = 0; i < actual.length; i++) {
//           if (actual.length - 1 === i) {
//             continue;
//           }

//           if(actual[i] <= actual[i + 1]) {
//             continue;
//           } else {
//             result.pass = false;
//             result.message = 'This array is not sorted';
//             break;
//           }
//         }
//         return result;
//       }
//     }
//   }
// }

// export { arrayMatcher };

// Jasmine
//   .testing('toBeMatchers')
//   .Config('Expects', (tests) => {
//     // it('aaaa', () => {});
//     tests.toBeNull('aaa');

//     // tests.it('aaaa', () => {
//     //   matchers.to.be.array(TESTING_ARRAY_BIGINT);
//     // });
//   });

// const a: jasmine.MatchersUtil = {''}


/**
 * Tests.
 */
// testing.Config('Expects', () => {
//   // beforeEach(() => {
//   //   jasmine.addMatchers(arrayMatcher);
//   // });

//   // it('a', () => {
//   //   expect(['a', 'b', 'c']).
//   // });

//   const toBe = new TestingToBeMatchers();
//   testing
//     .it('toBe.array',                 () => toBe.array(TESTING_ARRAY_BIGINT))
//     .it('toBe.bigint',                () => toBe.bigint(TESTING_BIGINT))
//     .it('toBe.boolean',               () => toBe.boolean(TESTING_TRUE))
//     .it('toBe.class',                 () => toBe.class(TestingToBeMatchers))
//     .it('toBe.date',                  () => toBe.date(new Date()))
//     .it('toBe.false',                 () => toBe.false(TESTING_FALSE))
//     .it('toBe.function',              () => toBe.function(TESTING_FUNCTION))
//     .it('toBe.instance',              () => toBe.instance(new TestingClass(), TestingClass))
//     .it('toBe.key',                   () => toBe.key(TESTING_STRING))
//     .it('toBe.null',                  () => toBe.null(TESTING_NULL))
//     .it('toBe.number',                () => toBe.number(TESTING_NUMBER))
//     // .it('toBe.numberBetween',         () => toBe.numberBetween(TESTING_NUMBER, 0, 10304051))
//     .it('toBe.object',                () => toBe.object(TESTING_OBJECT))
//     // .it('toBe.objectKey',             () => toBe.objectKey(TESTING_OBJECT, 'key as string'))
//     // .it('toBe.objectKeyIn',           () => toBe.objectKeyIn(TESTING_OBJECT, 'key as string'))
//     // .it('toBe.objectKeys',            () => toBe.objectKeys(TESTING_OBJECT, ['!@#$%^&*()Company']))
//     // .it('toBe.objectKeysIn',          () => toBe.objectKeysIn(TESTING_OBJECT, ['!@#$%^&*()Company']))
//     // .it('toBe.objectSomeKeys',        () => toBe.objectSomeKeys(TESTING_OBJECT, ['!@#$%^&*()Company', ['no key']]))
//     .it('toBe.regexp',                () => toBe.regexp(TESTING_REGEXP))
//     .it('toBe.string',                () => toBe.string(TESTING_STRING))
//     // .it('toBe.stringIncludes',        () => toBe.stringIncludes(TESTING_STRING, ['Company']))
//     // .it('toBe.stringIncludesSome',    () => toBe.stringIncludesSome(TESTING_STRING, ['bla', 'Company']))
//     // .it('toBe.stringOfLength',        () => toBe.stringOfLength(TESTING_STRING, 17))
//     // .it('toBe.stringOfLengthBetween', () => toBe.stringOfLengthBetween(TESTING_STRING, 0, 200))
//     .it('toBe.symbol',                () => toBe.symbol(TESTING_SYMBOL_NUMBER))
//     .it('toBe.true',                  () => toBe.true(TESTING_TRUE))
//     .it('toBe.undefined',             () => toBe.undefined(TESTING_UNDEFINED))
//     ;
//   testing
//     .it('toBe.not.array',                 () => toBe.not.array(TESTING_BIGINT))
//     .it('toBe.not.bigint',                () => toBe.not.bigint(TESTING_ARRAY_BIGINT))
//     .it('toBe.not.boolean',               () => toBe.not.boolean(TESTING_NOT_DEFINED))
//     .it('toBe.not.class',                 () => toBe.not.class(TESTING_CLASS))
//     .it('toBe.not.date',                  () => toBe.not.date(TESTING_FUNCTION))
//     .it('toBe.not.false',                 () => toBe.not.false(TESTING_NULL))
//     .it('toBe.not.function',              () => toBe.not.function(TESTING_OBJECT))
//     .it('toBe.not.instance',              () => toBe.not.instance(new TestingPerson(), TestingClass))
//     .it('toBe.not.key',                   () => toBe.not.key(TESTING_BIGINT))
//     .it('toBe.not.null',                  () => toBe.not.null(TESTING_CLASS))
//     .it('toBe.not.number',                () => toBe.not.number(TESTING_STRING))
//     // .it('toBe.not.numberBetween',         () => toBe.not.numberBetween(TESTING_NUMBER, 0, 10304049))
//     .it('toBe.not.object',                () => toBe.not.object(null))
//     // .it('toBe.not.objectKey',             () => toBe.not.objectKey({} as object, 'key as string'))
//     // .it('toBe.not.objectKeyIn',           () => toBe.not.objectKeyIn({} as object, 'key as string'))
//     // .it('toBe.not.objectKeys',            () => toBe.not.objectKeys({} as object, ['!@#$%^&*()Company1']))
//     // .it('toBe.not.objectKeysIn',          () => toBe.not.objectKeysIn(TESTING_OBJECT, ['!@#$%^&*()Company1']))
//     // .it('toBe.not.objectSomeKeys',        () => toBe.not.objectSomeKeys(TESTING_OBJECT, ['!@#$%^&*()Company1', ['no key']]))
//     .it('toBe.not.regexp',                () => toBe.not.regexp(TESTING_UNDEFINED))
//     .it('toBe.not.string',                () => toBe.not.string(TESTING_NUMBER))
//     // .it('toBe.not.stringIncludes',        () => toBe.not.stringIncludes(TESTING_STRING, ['Company2']))
//     // .it('toBe.not.stringIncludesSome',    () => toBe.not.stringIncludesSome(TESTING_STRING, ['bla', 'Company1']))
//     // .it('toBe.not.stringOfLength',        () => toBe.not.stringOfLength(TESTING_STRING, 18))
//     // .it('toBe.not.stringOfLengthBetween', () => toBe.not.stringOfLengthBetween(TESTING_STRING, 0, 1))
//     .it('toBe.not.symbol',                () => toBe.not.symbol(TESTING_DATE))
//     .it('toBe.not.true',                  () => toBe.not.true(TESTING_NUMBER))
//     .it('toBe.not.undefined',             () => toBe.not.undefined(TESTING_REGEXP))
//     ;
// });
