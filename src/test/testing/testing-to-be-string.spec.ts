import { TestingToBeString } from "../../lib";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingToBeString(
    executeDescribe,
    executeIt
  );
  t.describe(`TestingToBeString`, () => 
    t
      .toBeString('string')
      .toBeString(new String('string'))

      .toBeStringIncludes('string number boolean', ['string', 'number', 'boolean'])
      .toBeStringIncludesSome('string number boolean', ['string', 'test', 'boolean'])

      .toBeStringOfLength('toBeStringOfLength', 18)
      .toBeStringOfLengthBetween('toBeStringOfLengthBetween', 18, 27)

      .toBeStringType('test')
      .toBeStringType(new String('test'), false)
  );
}
