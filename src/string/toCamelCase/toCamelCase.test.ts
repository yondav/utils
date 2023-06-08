import { toCamelCase } from '..';

describe('toCamelCase', () => {
  const input = 'tHis-shoULD BE in_caMEL(case) ';
  const value = toCamelCase(input);
  const expected = 'thisShouldBeInCamelCase';

  it(`should return ${expected}`, () => {
    expect(value).toBe(expected);
  });
});
