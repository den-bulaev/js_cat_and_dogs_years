'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('array length should be equal to 2', () => {
    const expectedResult = getHumanAge(15, 15);

    expect(expectedResult)
      .toHaveLength(2);
  });

  test('should be zero if lower than 1 human year', () => {
    const expectedResult = getHumanAge(14, 14);

    expect(expectedResult)
      .toEqual([0, 0]);
  });

  test('cat and dog converted years are not equal from 28 animal years', () => {
    const expectedResult = getHumanAge(28, 28);

    expect(expectedResult)
      .toEqual([3, 2]);
  });
});
