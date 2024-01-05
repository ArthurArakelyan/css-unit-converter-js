import type { ConverterOptions } from '../types';

/**
 * Applies the conversion options object on the result of conversion
 * @param result Conversion result
 * @param options Conversion options object
 * @returns The conversion with applied **options**. In case of error, it returns the **result** without applying the options
 */
export const applyOptionsOnConversion = (result: number, options: ConverterOptions = {}): number => {
  try {
    const { fraction = true, fractionDigits = 3 } = options;

    if (fraction) {
      return parseFloat(result.toFixed(fractionDigits));
    }

    return result;
  } catch (error) {
    console.error(error);

    return result;
  }
};
