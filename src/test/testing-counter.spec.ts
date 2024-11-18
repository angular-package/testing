import { Testing, TestingCounter, TestingTo, TestingToBe, TestingToBeBoolean } from "../lib";


const t = new Testing([
  TestingToBe
]);

const testingCounter1 = new TestingCounter();

describe('TestingCounter', () => {
  it('Check object', () => {
    expect(testingCounter1.active).toBeTrue();
    expect(testingCounter1.current).toEqual(0);
    expect(testingCounter1.get()).toEqual(0);
    testingCounter1.increment()
    expect(testingCounter1.current).toEqual(1);
    testingCounter1.reset();
    expect(testingCounter1.current).toEqual(0);
  })
});

const testingCounter2 = new TestingCounter(false);

t.describe('TestingCounter false', () => t
  .toBeFalse(testingCounter2.active)
);