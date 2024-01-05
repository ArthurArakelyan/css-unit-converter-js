export interface ConverterOptions {
  /**
   * If true applies **fractionDigits** on conversion result
   * fractionDigits is the number of digits to appear after the decimal point
   * @default true
   */
  fraction?: boolean;

  /**
   * The number of digits to appear after the decimal point; should be a value between 0 and 100, inclusive.
   * @default 3
   */
  fractionDigits?: number;
}
