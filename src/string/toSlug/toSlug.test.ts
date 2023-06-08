import { toSlug } from '..';

describe('.toSlug()', () => {
  const input = 'tHis-shoULD BE a_SLug ';
  const value = toSlug(input);
  const expected = 'this-should-be-a-slug';

  it(`should return '${expected}'`, () => {
    expect(value).toBe(expected);
  });

  it('should return a lowercase string', () => {
    expect(value).toEqual(value.toLowerCase());
  });

  it('should return a string without white spaces', () => {
    expect(/\s/g.test(value)).toBe(false);
  });

  it('should return a string only containing alphanumeric characters', () => {
    expect(/[^a-z|A-Z|0-9]/g.test(value)).toBe(true);
  });
});
