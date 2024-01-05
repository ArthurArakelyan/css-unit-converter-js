import { applyOptionsOnConversion } from '../utilities';

describe('applyOptionsOnConversion', () => {
  const mockResult = 10.111111;

  test('should apply fraction', () => {
    expect(applyOptionsOnConversion(mockResult)).toBe(10.111);
    expect(applyOptionsOnConversion(mockResult, { fraction: true, fractionDigits: 1 })).toBe(10.1);
    expect(applyOptionsOnConversion(mockResult, { fraction: true, fractionDigits: 2 })).toBe(10.11);
  });

  test('should not apply fraction', () => {
    expect(applyOptionsOnConversion(mockResult, { fraction: false })).toBe(mockResult);
  });
});
