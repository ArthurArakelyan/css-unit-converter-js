import { applyOptionsOnConversion } from '../utilities';
import type { ConverterOptions } from '../types';

/**
 * Converts **px** to **rem** based on given **remSize**
 * @param px The number of **px** for converting to rem
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **rem**
 */
export const pxToRem = (px: number, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(px / remSize, options);
};

/**
 * Converts **px** to **em** based on given **emSize**
 * @param px The number of **px** for converting to em
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **em**
 */
export const pxToEm = (px: number, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(px / emSize, options);
};

/**
 * Converts **px** to **vw** based on given **viewportWidth**
 * @param px The number of **px** for converting to vw
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vw**
 */
export const pxToVw = (px: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((px / viewportWidth) * 100, options);
};

/**
 * Converts **px** to **vh** based on given **viewportHeight**
 * @param px The number of **px** for converting to vh
 * @param viewportHeight The size of viewport height in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vh**
 */
export const pxToVh = (px: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((px / viewportHeight) * 100, options);
};

/**
 * Converts **px** to **pt**
 * @param px The number of **px** for converting to pt
 * @param options Conversion options object
 * @returns {number} A number converted to **pt**
 */
export const pxToPt = (px: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(px * 0.74999943307122, options);
};

/**
 * Converts **px** to **in**
 * @param px The number of **px** for converting to in
 * @param options Conversion options object
 * @returns {number} A number converted to **in**
 */
export const pxToIn = (px: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(px / 96, options);
};

/**
 * Converts **px** to **pc**
 * @param px The number of **px** for converting to pc
 * @param options Conversion options object
 * @returns {number} A number converted to **pc**
 */
export const pxToPc = (px: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(px * 0.0625, options);
};

/**
 * Converts **px** to **cm**
 * @param px The number of **px** for converting to cm
 * @param options Conversion options object
 * @returns {number} A number converted to **cm**
 */
export const pxToCm = (px: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(px * 0.0264583333, options);
};

/**
 * Converts **px** to **mm**
 * @param px The number of **px** for converting to mm
 * @param options Conversion options object
 * @returns {number} A number converted to **mm**
 */
export const pxToMm = (px: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(px * 0.2645833333, options);
};

/**
 * Converts **px** to **percentage** based on given **base**
 * @param px The number of **px** for converting to percentage
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **percentage**
 */
export const pxToPercentage = (px: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((px / base) * 100, options);
};

/**
 * Converts **rem** to **px** based on given **remSize**
 * @param rem The number of **rem** for converting to px
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **px**
 */
export const remToPx = (rem: number, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(rem * remSize, options);
};

/**
 * Converts **rem** to **em** based on given **remSize** and **emSize**
 * @param rem The number of **rem** for converting to em
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **em**
 */
export const remToEm = (rem: number, remSize = 16, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((rem * remSize) / emSize, options);
};

/**
 * Converts **rem** to **vw** based on given **remSize** and **viewportWidth**
 * @param rem The number of **rem** for converting to vw
 * @param remSize The size of **1 rem** in pixels
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vw**
 */
export const remToVw = (rem: number, remSize: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((rem * remSize) / viewportWidth) * 100, options);
};

/**
 * Converts **rem** to **vh** based on given **remSize** and **viewportHeight**
 * @param rem The number of **rem** for converting to vh
 * @param remSize The size of **1 rem** in pixels
 * @param viewportHeight The size of viewport height in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vh**
 */
export const remToVh = (rem: number, remSize: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((rem * remSize) / viewportHeight) * 100, options);
};

/**
 * Converts **rem** to **pt** based on given **remSize**
 * @param rem The number of **rem** for converting to pt
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **pt**
 */
export const remToPt = (rem: number, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((rem * remSize) * 0.74999943307122, options);
};

/**
 * Converts **rem** to **in** based on given **remSize**
 * @param rem The number of **rem** for converting to in
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **in**
 */
export const remToIn = (rem: number, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((rem * remSize) / 96, options);
};

/**
 * Converts **rem** to **pc** based on given **remSize**
 * @param rem The number of **rem** for converting to pc
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **pc**
 */
export const remToPc = (rem: number, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((rem * remSize) * 0.0625, options);
};

/**
 * Converts **rem** to **cm** based on given **remSize**
 * @param rem The number of **rem** for converting to cm
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **cm**
 */
export const remToCm = (rem: number, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((rem * remSize) * 0.0264583333, options);
};

/**
 * Converts **rem** to **mm** based on given **remSize**
 * @param rem The number of **rem** for converting to mm
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **mm**
 */
export const remToMm = (rem: number, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((rem * remSize) * 0.2645833333, options);
};

/**
 * Converts **rem** to **percentage** based on given **remSize** and **base**
 * @param rem The number of **rem** for converting to percentage
 * @param remSize The size of **1 rem** in pixels
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **percentage**
 */
export const remToPercentage = (rem: number, remSize: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((rem * remSize) / base) * 100, options);
};

/**
 * Converts **em** to **px** based on given **emSize**
 * @param em The number of **em** for converting to px
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **px**
 */
export const emToPx = (em: number, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(em * emSize, options);
};

/**
 * Converts **em** to **rem** based on given **emSize** and **remSize**
 * @param em The number of **em** for converting to rem
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **rem**
 */
export const emToRem = (em: number, emSize = 16, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((em * emSize) / remSize, options);
};

/**
 * Converts **em** to **vw** based on given **emSize** and **viewportWidth**
 * @param em The number of **em** for converting to vw
 * @param emSize The size of **1 em** in pixels
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vw**
 */
export const emToVw = (em: number, emSize: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((em * emSize) / viewportWidth) * 100, options);
};

/**
 * Converts **em** to **vh** based on given **emSize** and **viewportHeight**
 * @param em The number of **em** for converting to vh
 * @param emSize The size of **1 em** in pixels
 * @param viewportHeight The size of viewport height in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vh**
 */
export const emToVh = (em: number, emSize: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((em * emSize) / viewportHeight) * 100, options);
};

/**
 * Converts **em** to **pt** based on given **emSize**
 * @param em The number of **em** for converting to pt
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **pt**
 */
export const emToPt = (em: number, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((em * emSize) * 0.74999943307122, options);
};

/**
 * Converts **em** to **in** based on given **emSize**
 * @param em The number of **em** for converting to in
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **in**
 */
export const emToIn = (em: number, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((em * emSize) / 96, options);
};

/**
 * Converts **em** to **pc** based on given **emSize**
 * @param em The number of **em** for converting to pc
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **pc**
 */
export const emToPc = (em: number, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((em * emSize) * 0.0625, options);
};

/**
 * Converts **em** to **cm** based on given **emSize**
 * @param em The number of **em** for converting to cm
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **cm**
 */
export const emToCm = (em: number, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((em * emSize) * 0.0264583333, options);
};

/**
 * Converts **em** to **mm** based on given **emSize**
 * @param em The number of **em** for converting to mm
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **mm**
 */
export const emToMm = (em: number, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((em * emSize) * 0.2645833333, options);
};

/**
 * Converts **em** to **percentage** based on given **emSize** and **base**
 * @param em The number of **em** for converting to percentage
 * @param emSize The size of **1 em** in pixels
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **percentage**
 */
export const emToPercentage = (em: number, emSize: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((em * emSize) / base) * 100, options);
};

/**
 * Converts **vw** to **px** based on given **viewportWidth**
 * @param vw The number of **vw** for converting to px
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **px**
 */
export const vwToPx = (vw: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((vw * viewportWidth) / 100, options);
};

/**
 * Converts **vw** to **rem** based on given **viewportWidth** and **remSize**
 * @param vw The number of **vw** for converting to rem
 * @param viewportWidth The size of viewport width in pixels
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **rem**
 */
export const vwToRem = (vw: number, viewportWidth: number, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((vw * viewportWidth) / 100) / remSize, options);
};

/**
 * Converts **vw** to **em** based on given **viewportWidth** and **emSize**
 * @param vw The number of **vw** for converting to em
 * @param viewportWidth The size of viewport width in pixels
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **em**
 */
export const vwToEm = (vw: number, viewportWidth: number, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((vw * viewportWidth) / 100) / emSize, options);
};

/**
 * Converts **vw** to **vh** based on given **viewportWidth** and **viewportHeight**
 * @param vw The number of **vw** for converting to vh
 * @param viewportWidth The size of viewport width in pixels
 * @param viewportHeight The size of viewport height in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vh**
 */
export const vwToVh = (vw: number, viewportWidth: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((((vw * viewportWidth) / 100) / viewportHeight) * 100, options);
};

/**
 * Converts **vw** to **pt** based on given **viewportWidth**
 * @param vw The number of **vw** for converting to pt
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **pt**
 */
export const vwToPt = (vw: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((vw * viewportWidth / 100) * 0.74999943307122, options);
};

/**
 * Converts **vw** to **in** based on given **viewportWidth**
 * @param vw The number of **vw** for converting to in
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **in**
 */
export const vwToIn = (vw: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((vw * viewportWidth / 100) / 96, options);
};

/**
 * Converts **vw** to **pc** based on given **viewportWidth**
 * @param vw The number of **vw** for converting to pc
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **pc**
 */
export const vwToPc = (vw: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((vw * viewportWidth / 100) * 0.0625, options);
};

/**
 * Converts **vw** to **cm** based on given **viewportWidth**
 * @param vw The number of **vw** for converting to cm
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **cm**
 */
export const vwToCm = (vw: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((vw * viewportWidth / 100) * 0.0264583333, options);
};

/**
 * Converts **vw** to **mm** based on given **viewportWidth**
 * @param vw The number of **vw** for converting to mm
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **mm**
 */
export const vwToMm = (vw: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((vw * viewportWidth / 100) * 0.2645833333, options);
};

/**
 * Converts **vw** to **percentage** based on given **viewportWidth** and **base**
 * @param vw The number of **vw** for converting to percentage
 * @param viewportWidth The size of viewport width in pixels
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **percentage**
 */
export const vwToPercentage = (vw: number, viewportWidth: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((((vw * viewportWidth) / 100) / base) * 100, options);
};

/**
 * Converts **vh** to **px** based on given **viewportHeight**
 * @param vh The number of **vh** for converting to px
 * @param viewportHeight The size of viewport height in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **px**
 */
export const vhToPx = (vh: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((vh * viewportHeight) / 100, options);
};

/**
 * Converts **vh** to **rem** based on given **viewportHeight** and **remSize**
 * @param vh The number of **vh** for converting to rem
 * @param viewportHeight The size of viewport height in pixels
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **rem**
 */
export const vhToRem = (vh: number, viewportHeight: number, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((vh * viewportHeight) / 100) / remSize, options);
};

/**
 * Converts **vh** to **em** based on given **viewportHeight** and **emSize**
 * @param vh The number of **vh** for converting to em
 * @param viewportHeight The size of viewport height in pixels
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **em**
 */
export const vhToEm = (vh: number, viewportHeight: number, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((vh * viewportHeight) / 100) / emSize, options);
};

/**
 * Converts **vh** to **vw** based on given **viewportHeight** and **viewportWidth**
 * @param vh The number of **vh** for converting to vw
 * @param viewportHeight The size of viewport height in pixels
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vw**
 */
export const vhToVw = (vh: number, viewportHeight: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((((vh * viewportHeight) / 100) / viewportWidth) * 100, options);
};

/**
 * Converts **vh** to **pt** based on given **viewportHeight**
 * @param vh The number of **vh** for converting to pt
 * @param viewportHeight The size of viewport height in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **pt**
 */
export const vhToPt = (vh: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((vh * viewportHeight / 100) * 0.74999943307122, options);
};

/**
 * Converts **vh** to **in** based on given **viewportHeight**
 * @param vh The number of **vh** for converting to in
 * @param viewportHeight The size of viewport height in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **in**
 */
export const vhToIn = (vh: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((vh * viewportHeight / 100) / 96, options);
};

/**
 * Converts **vh** to **pc** based on given **viewportHeight**
 * @param vh The number of **vh** for converting to pc
 * @param viewportHeight The size of viewport height in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **pc**
 */
export const vhToPc = (vh: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((vh * viewportHeight / 100) * 0.0625, options);
};

/**
 * Converts **vh** to **cm** based on given **viewportHeight**
 * @param vh The number of **vh** for converting to cm
 * @param viewportHeight The size of viewport height in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **cm**
 */
export const vhToCm = (vh: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((vh * viewportHeight / 100) * 0.0264583333, options);
};

/**
 * Converts **vh** to **mm** based on given **viewportHeight**
 * @param vh The number of **vh** for converting to mm
 * @param viewportHeight The size of viewport height in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **mm**
 */
export const vhToMm = (vh: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((vh * viewportHeight / 100) * 0.2645833333, options);
};

/**
 * Converts **vh** to **percentage** based on given **viewportHeight** and **base**
 * @param vh The number of **vh** for converting to percentage
 * @param viewportHeight The size of viewport height in pixels
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **percentage**
 */
export const vhToPercentage = (vh: number, viewportHeight: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((((vh * viewportHeight) / 100) / base) * 100, options);
};

/**
 * Converts **pt** to **px**
 * @param pt The number of **pt** for converting to px
 * @param options Conversion options object
 * @returns {number} A number converted to **px**
 */
export const ptToPx = (pt: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(pt * 1.3333343412075, options);
};

/**
 * Converts **pt** to **rem** based on given **remSize**
 * @param pt The number of **pt** for converting to rem
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **rem**
 */
export const ptToRem = (pt: number, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((pt * 1.3333343412075) / remSize, options);
};

/**
 * Converts **pt** to **em** based on given **emSize**
 * @param pt The number of **pt** for converting to em
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **em**
 */
export const ptToEm = (pt: number, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((pt * 1.3333343412075) / emSize, options);
};

/**
 * Converts **pt** to **vw** based on given **viewportWidth**
 * @param pt The number of **pt** for converting to vw
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vw**
 */
export const ptToVw = (pt: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((pt * 1.3333343412075) / viewportWidth) * 100, options);
};

/**
 * Converts **pt** to **vh** based on given **viewportHeight**
 * @param pt The number of **pt** for converting to vh
 * @param viewportHeight The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vh**
 */
export const ptToVh = (pt: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((pt * 1.3333343412075) / viewportHeight) * 100, options);
};

/**
 * Converts **pt** to **in**
 * @param pt The number of **pt** for converting to in
 * @param options Conversion options object
 * @returns {number} A number converted to **in**
 */
export const ptToIn = (pt: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((pt * 1.3333343412075) / 96, options);
};

/**
 * Converts **pt** to **pc**
 * @param pt The number of **pt** for converting to pc
 * @param options Conversion options object
 * @returns {number} A number converted to **pc**
 */
export const ptToPc = (pt: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((pt * 1.3333343412075) * 0.0625, options);
};

/**
 * Converts **pt** to **cm**
 * @param pt The number of **pt** for converting to cm
 * @param options Conversion options object
 * @returns {number} A number converted to **cm**
 */
export const ptToCm = (pt: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((pt * 1.3333343412075) * 0.0264583333, options);
};

/**
 * Converts **pt** to **mm**
 * @param pt The number of **pt** for converting to mm
 * @param options Conversion options object
 * @returns {number} A number converted to **mm**
 */
export const ptToMm = (pt: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((pt * 1.3333343412075) * 0.2645833333, options);
};

/**
 * Converts **pt** to **percentage** based on given **base**
 * @param pt The number of **pt** for converting to percentage
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **percentage**
 */
export const ptToPercentage = (pt: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((pt * 1.3333343412075) / base) * 100, options);
};

/**
 * Converts **in** to **px**
 * @param inch The number of **in** for converting to px
 * @param options Conversion options object
 * @returns {number} A number converted to **px**
 */
export const inToPx = (inch: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(inch * 96, options);
};

/**
 * Converts **in** to **rem** based on given **remSize**
 * @param inch The number of **in** for converting to rem
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **rem**
 */
export const inToRem = (inch: number, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((inch * 96) / remSize, options);
};

/**
 * Converts **in** to **em** based on given **emSize**
 * @param inch The number of **in** for converting to em
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **em**
 */
export const inToEm = (inch: number, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((inch * 96) / emSize, options);
};

/**
 * Converts **in** to **vw** based on given **viewportWidth**
 * @param inch The number of **in** for converting to vw
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vw**
 */
export const inToVw = (inch: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((inch * 96) / viewportWidth) * 100, options);
};

/**
 * Converts **in** to **vh** based on given **viewportHeight**
 * @param inch The number of **in** for converting to vh
 * @param viewportHeight The size of viewport height in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vh**
 */
export const inToVh = (inch: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((inch * 96) / viewportHeight) * 100, options);
};

/**
 * Converts **in** to **pt**
 * @param inch The number of **in** for converting to pt
 * @param options Conversion options object
 * @returns {number} A number converted to **pt**
 */
export const inToPt = (inch: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((inch * 96) * 0.74999943307122, options);
};

/**
 * Converts **in** to **pc**
 * @param inch The number of **in** for converting to pc
 * @param options Conversion options object
 * @returns {number} A number converted to **pc**
 */
export const inToPc = (inch: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((inch * 96) * 0.0625, options);
};

/**
 * Converts **in** to **cm**
 * @param inch The number of **in** for converting to cm
 * @param options Conversion options object
 * @returns {number} A number converted to **cm**
 */
export const inToCm = (inch: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((inch * 96) * 0.0264583333, options);
};

/**
 * Converts **in** to **mm**
 * @param inch The number of **in** for converting to mm
 * @param options Conversion options object
 * @returns {number} A number converted to **mm**
 */
export const inToMm = (inch: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((inch * 96) * 0.2645833333, options);
};

/**
 * Converts **inch** to **percentage** based on given **base**
 * @param inch The number of **inch** for converting to percentage
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **percentage**
 */
export const inToPercentage = (inch: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((inch * 96) / base) * 100, options);
};

/**
 * Converts **pc** to **px**
 * @param pc The number of **pc** for converting to px
 * @param options Conversion options object
 * @returns {number} A number converted to **px**
 */
export const pcToPx = (pc: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(pc * 16, options);
};

/**
 * Converts **pc** to **rem** based on given **remSize**
 * @param pc The number of **pc** for converting to rem
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **rem**
 */
export const pcToRem = (pc: number, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((pc * 16) / remSize, options);
};

/**
 * Converts **pc** to **em** based on given **emSize**
 * @param pc The number of **pc** for converting to em
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **em**
 */
export const pcToEm = (pc: number, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((pc * 16) / emSize, options);
};

/**
 * Converts **pc** to **vw** based on given **viewportWidth**
 * @param pc The number of **pc** for converting to vw
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vw**
 */
export const pcToVw = (pc: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((pc * 16) / viewportWidth) * 100, options);
};

/**
 * Converts **pc** to **vh** based on given **viewportHeight**
 * @param pc The number of **pc** for converting to vh
 * @param viewportHeight The size of viewport height in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vh**
 */
export const pcToVh = (pc: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((pc * 16) / viewportHeight) * 100, options);
};

/**
 * Converts **pc** to **pt**
 * @param pc The number of **pc** for converting to pt
 * @param options Conversion options object
 * @returns {number} A number converted to **pt**
 */
export const pcToPt = (pc: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((pc * 16) * 0.74999943307122, options);
};

/**
 * Converts **pc** to **in**
 * @param pc The number of **pc** for converting to in
 * @param options Conversion options object
 * @returns {number} A number converted to **in**
 */
export const pcToIn = (pc: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((pc * 16) / 96, options);
};

/**
 * Converts **pc** to **cm**
 * @param pc The number of **pc** for converting to cm
 * @param options Conversion options object
 * @returns {number} A number converted to **cm**
 */
export const pcToCm = (pc: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((pc * 16) * 0.0264583333, options);
};

/**
 * Converts **pc** to **mm**
 * @param pc The number of **pc** for converting to mm
 * @param options Conversion options object
 * @returns {number} A number converted to **mm**
 */
export const pcToMm = (pc: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((pc * 16) * 0.2645833333, options);
};

/**
 * Converts **pc** to **percentage** based on given **base**
 * @param pc The number of **pc** for converting to percentage
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **percentage**
 */
export const pcToPercentage = (pc: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((pc * 16) / base) * 100, options);
};

/**
 * Converts **cm** to **px**
 * @param cm The number of **cm** for converting to px
 * @param options Conversion options object
 * @returns {number} A number converted to **px**
 */
export const cmToPx = (cm: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(cm * 37.7952755906, options);
};

/**
 * Converts **cm** to **rem** based on given **remSize**
 * @param cm The number of **cm** for converting to rem
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **rem**
 */
export const cmToRem = (cm: number, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((cm * 37.7952755906) / remSize, options);
};

/**
 * Converts **cm** to **em** based on given **emSize**
 * @param cm The number of **cm** for converting to em
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **em**
 */
export const cmToEm = (cm: number, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((cm * 37.7952755906) / emSize, options);
};

/**
 * Converts **cm** to **vw** based on given **viewportWidth**
 * @param cm The number of **cm** for converting to vw
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vw**
 */
export const cmToVw = (cm: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((cm * 37.7952755906) / viewportWidth) * 100, options);
};

/**
 * Converts **cm** to **vh** based on given **viewportHeight**
 * @param cm The number of **cm** for converting to vh
 * @param viewportHeight The size of viewport height in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vh**
 */
export const cmToVh = (cm: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((cm * 37.7952755906) / viewportHeight) * 100, options);
};

/**
 * Converts **cm** to **pt**
 * @param cm The number of **cm** for converting to pt
 * @param options Conversion options object
 * @returns {number} A number converted to **pt**
 */
export const cmToPt = (cm: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((cm * 37.7952755906) * 0.74999943307122, options);
};

/**
 * Converts **cm** to **in**
 * @param cm The number of **cm** for converting to in
 * @param options Conversion options object
 * @returns {number} A number converted to **in**
 */
export const cmToIn = (cm: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((cm * 37.7952755906) / 96, options);
};

/**
 * Converts **cm** to **pc**
 * @param cm The number of **cm** for converting to pc
 * @param options Conversion options object
 * @returns {number} A number converted to **pc**
 */
export const cmToPc = (cm: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((cm * 37.7952755906) * 0.0625, options);
};

/**
 * Converts **cm** to **mm**
 * @param cm The number of **cm** for converting to mm
 * @param options Conversion options object
 * @returns {number} A number converted to **mm**
 */
export const cmToMm = (cm: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((cm * 37.7952755906) * 0.2645833333, options);
};

/**
 * Converts **cm** to **percentage** based on given **base**
 * @param cm The number of **cm** for converting to percentage
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **percentage**
 */
export const cmToPercentage = (cm: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((cm * 37.7952755906) / base) * 100, options);
};

/**
 * Converts **mm** to **px**
 * @param mm The number of **mm** for converting to px
 * @param options Conversion options object
 * @returns {number} A number converted to **px**
 */
export const mmToPx = (mm: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(mm * 3.7795275591, options);
};

/**
 * Converts **mm** to **rem** based on given **remSize**
 * @param mm The number of **mm** for converting to rem
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **rem**
 */
export const mmToRem = (mm: number, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((mm * 3.7795275591) / remSize, options);
};

/**
 * Converts **mm** to **em** based on given **emSize**
 * @param mm The number of **mm** for converting to em
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **em**
 */
export const mmToEm = (mm: number, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((mm * 3.7795275591) / emSize, options);
};

/**
 * Converts **mm** to **vw** based on given **viewportWidth**
 * @param mm The number of **mm** for converting to vw
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vw**
 */
export const mmToVw = (mm: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((mm * 3.7795275591) / viewportWidth) * 100, options);
};

/**
 * Converts **cm** to **vh** based on given **viewportHeight**
 * @param cm The number of **cm** for converting to vh
 * @param viewportHeight The size of viewport height in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vh**
 */
export const mmToVh = (cm: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((cm * 3.7795275591) / viewportHeight) * 100, options);
};

/**
 * Converts **mm** to **pt**
 * @param mm The number of **mm** for converting to pt
 * @param options Conversion options object
 * @returns {number} A number converted to **pt**
 */
export const mmToPt = (mm: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((mm * 3.7795275591) * 0.74999943307122, options);
};

/**
 * Converts **mm** to **in**
 * @param mm The number of **mm** for converting to in
 * @param options Conversion options object
 * @returns {number} A number converted to **in**
 */
export const mmToIn = (mm: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((mm * 3.7795275591) / 96, options);
};

/**
 * Converts **mm** to **pc**
 * @param mm The number of **mm** for converting to pc
 * @param options Conversion options object
 * @returns {number} A number converted to **pc**
 */
export const mmToPc = (mm: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((mm * 3.7795275591) * 0.0625, options);
};

/**
 * Converts **mm** to **cm**
 * @param mm The number of **mm** for converting to cm
 * @param options Conversion options object
 * @returns {number} A number converted to **cm**
 */
export const mmToCm = (mm: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((mm * 3.7795275591) * 0.0264583333, options);
};

/**
 * Converts **mm** to **percentage** based on given **base**
 * @param mm The number of **mm** for converting to percentage
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **percentage**
 */
export const mmToPercentage = (mm: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((mm * 3.7795275591) / base) * 100, options);
};

/**
 * Converts **percentage** to **px** based on given **base**
 * @param percent The number of **percentage** for converting to px
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **px**
 */
export const percentageToPx = (percent: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((percent * base) / 100, options);
};

/**
 * Converts **percentage** to **rem** based on given **base** and **remSize**
 * @param percent The number of **percentage** for converting to rem
 * @param base The size of **base** in pixels
 * @param remSize The size of **1 rem** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **rem**
 */
export const percentageToRem = (percent: number, base: number, remSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((percent * base) / 100) / remSize, options);
};

/**
 * Converts **percentage** to **em** based on given **base** and **emSize**
 * @param percent The number of **percentage** for converting to em
 * @param base The size of **base** in pixels
 * @param emSize The size of **1 em** in pixels. By default, **16**
 * @param options Conversion options object
 * @returns {number} A number converted to **em**
 */
export const percentageToEm = (percent: number, base: number, emSize = 16, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((percent * base) / 100) / emSize, options);
};

/**
 * Converts **percentage** to **vw** based on given **base** and **viewportWidth**
 * @param percent The number of **percentage** for converting to vw
 * @param base The size of **base** in pixels
 * @param viewportWidth The size of viewport width in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vw**
 */
export const percentageToVw = (percent: number, base: number, viewportWidth: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((((percent * base) / 100) / viewportWidth) * 100, options);
};

/**
 * Converts **percentage** to **vh** based on given **base** and **viewportHeight**
 * @param percent The number of **percentage** for converting to vh
 * @param base The size of **base** in pixels
 * @param viewportHeight The size of viewport height in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **vh**
 */
export const percentageToVh = (percent: number, base: number, viewportHeight: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion((((percent * base) / 100) / viewportHeight) * 100, options);
};

/**
 * Converts **percentage** to **pt** based on given **base**
 * @param percent The number of **percentage** for converting to pt
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **pt**
 */
export const percentageToPt = (percent: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((percent * base) / 100) * 0.74999943307122, options);
};

/**
 * Converts **percentage** to **in** based on given **base**
 * @param percent The number of **percentage** for converting to in
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **in**
 */
export const percentageToIn = (percent: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((percent * base) / 100) / 96, options);
};

/**
 * Converts **percentage** to **pc** based on given **base**
 * @param percent The number of **percentage** for converting to pc
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **pc**
 */
export const percentageToPc = (percent: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((percent * base) / 100) * 0.0625, options);
};

/**
 * Converts **percentage** to **cm** based on given **base**
 * @param percent The number of **percentage** for converting to cm
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **cm**
 */
export const percentageToCm = (percent: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((percent * base) / 100) * 0.0264583333, options);
};

/**
 * Converts **percentage** to **mm** based on given **base**
 * @param percent The number of **percentage** for converting to mm
 * @param base The size of **base** in pixels
 * @param options Conversion options object
 * @returns {number} A number converted to **mm**
 */
export const percentageToMm = (percent: number, base: number, options: ConverterOptions = {}): number => {
  return applyOptionsOnConversion(((percent * base) / 100) * 0.2645833333, options);
};
