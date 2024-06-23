# css-unit-converter-js

[![NPM Monthly Downloads](https://img.shields.io/npm/dm/css-unit-converter-js?label=montly%20downloads)](https://img.shields.io/npm/dw/css-unit-converter-js)
[![NPM Total Downloads](https://img.shields.io/npm/dt/css-unit-converter-js?label=total%20downloads)](https://img.shields.io/npm/dw/css-unit-converter-js)
[![NPM version](https://img.shields.io/npm/v/css-unit-converter-js)](https://www.npmjs.com/package/css-unit-converter-js)
[![GitHub code size in bytes](https://img.shields.io/bundlephobia/min/css-unit-converter-js?style=flat)](https://www.npmjs.com/package/css-unit-converter-js)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/ArthurArakelyan/css-unit-converter-js/blob/main/LICENSE)

A lightweight JavaScript library for converting all common CSS units with high accuracy.

## Installation

Add `css-unit-converter-js` to your project with npm

```bash
npm install css-unit-converter-js
```

Or use yarn

```bash
yarn add css-unit-converter-js
```

## Usage

A simple example of conversions

```js
import { pxToRem, remToPx, pxToVw } from 'css-unit-converter-js';

// Convert px to rem based on rem size (By default 16px)
pxToRem(24); // => 1.5

// Convert rem to px based on rem size (By default 16px)
remToPx(1.5); // => 24

// Convert px to rem based on provided rem size (32px)
pxToRem(16, 32); // => 0.5

// Convert px to vw based on provided viewport width (1920px)
pxToVw(192, 1920); // => 10
```

An example of applying fractional rounding on conversions

```js
import { pxToVw } from 'css-unit-converter-js';

// By default, it applies fractional rounding up to 3 digits
pxToVw(23, 1920); // => 1.198

// Change fractional rounding
pxToVw(23, 1920, { fractionDigits: 5 }); // => 1.19792

// Disable fractional rounding
pxToVw(23, 1920, { fraction: false }); // => 1.1979166666666667
```

## Converters

| Converter       | Arguments                         |
|-----------------|-----------------------------------|
| pxToRem         | px, remSize                       |
| pxToEm          | px, emSize                        |
| pxToVw          | px, viewportWidth                 |
| pxToVh          | px, viewportHeight                |
| pxToPt          | px                                |
| pxToIn          | px                                |
| pxToPc          | px                                |
| pxToCm          | px                                |
| pxToMm          | px                                |
| pxToPercentage  | px, base                          |
| remToPx         | rem, remSize                      |
| remToEm         | rem, remSize, emSize              |
| remToVw         | rem, remSize, viewportWidth       |
| remToVh         | rem, remSize, viewportHeight      |
| remToPt         | rem, remSize                      |
| remToIn         | rem, remSize                      |
| remToPc         | rem, remSize                      |
| remToCm         | rem, remSize                      |
| remToMm         | rem, remSize                      |
| remToPercentage | rem, remSize, base                |
| emToPx          | em, emSize                        |
| emToRem         | em, emSize, remSize               |
| emToVw          | em, emSize, viewportWidth         |
| emToVh          | em, emSize, viewportHeight        |
| emToPt          | em, emSize                        |
| emToIn          | em, emSize                        |
| emToPc          | em, emSize                        |
| emToCm          | em, emSize                        |
| emToMm          | em, emSize                        |
| emToPercentage  | em, emSize, base                  |
| vwToPx          | vw, viewportWidth                 |
| vwToRem         | vw, viewportWidth, remSize        |
| vwToEm          | vw, viewportWidth, emSize         |
| vwToVh          | vw, viewportWidth, viewportHeight |
| vwToPt          | vw, viewportWidth                 |
| vwToIn          | vw, viewportWidth                 |
| vwToPc          | vw, viewportWidth                 |
| vwToCm          | vw, viewportWidth                 |
| vwToMm          | vw, viewportWidth                 |
| vwToPercentage  | vw, viewportWidth, base           |
| vhToPx          | vh, viewportHeight                |
| vhToRem         | vh, viewportHeight, remSize       |
| vhToEm          | vh, viewportHeight, emSize        |
| vhToVw          | vh, viewportHeight, viewportWidth |
| vhToPt          | vh, viewportHeight                |
| vhToIn          | vh, viewportHeight                |
| vhToPc          | vh, viewportHeight                |
| vhToCm          | vh, viewportHeight                |
| vhToMm          | vh, viewportHeight                |
| vhToPercentage  | vh, viewportHeight, base          |
| ptToPx          | pt                                |
| ptToRem         | pt, remSize                       |
| ptToEm          | pt, emSize                        |
| ptToVw          | pt, viewportWidth                 |
| ptToVh          | pt, viewportHeight                |
| ptToIn          | pt                                |
| ptToPc          | pt                                |
| ptToCm          | pt                                |
| ptToMm          | pt                                |
| ptToPercentage  | pt, base                          |
| inToPx          | inch                              |
| inToRem         | inch, remSize                     |
| inToEm          | inch, emSize                      |
| inToVw          | inch, viewportWidth               |
| inToVh          | inch, viewportHeight              |
| inToPt          | inch                              |
| inToPc          | inch                              |
| inToCm          | inch                              |
| inToMm          | inch                              |
| inToPercentage  | inch, base                        |
| pcToPx          | pc                                |
| pcToRem         | pc, remSize                       |
| pcToEm          | pc, emSize                        |
| pcToVw          | pc, viewportWidth                 |
| pcToVh          | pc, viewportHeight                |
| pcToPt          | pc                                |
| pcToIn          | pc                                |
| pcToCm          | pc                                |
| pcToMm          | pc                                |
| pcToPercentage  | pc, base                          |
| cmToPx          | cm                                |
| cmToRem         | cm, remSize                       |
| cmToEm          | cm, emSize                        |
| cmToVw          | cm, viewportWidth                 |
| cmToVh          | cm, viewportHeight                |
| cmToPt          | cm                                |
| cmToIn          | cm                                |
| cmToPc          | cm                                |
| cmToMm          | cm                                |
| cmToPercentage  | cm, base                          |
| mmToPx          | mm                                |
| mmToRem         | mm, remSize                       |
| mmToEm          | mm, emSize                        |
| mmToVw          | mm, viewportWidth                 |
| mmToVh          | mm, viewportHeight                |
| mmToPt          | mm                                |
| mmToIn          | mm                                |
| mmToPc          | mm                                |
| mmToCm          | mm                                |
| mmToPercentage  | mm, base                          |
| percentageToPx  | percent, base                     |
| percentageToRem | percent, base, remSize            |
| percentageToEm  | percent, base, emSize             |
| percentageToVw  | percent, base, viewportWidth      |
| percentageToVh  | percent, base, viewportHeight     |
| percentageToPt  | percent, base                     |
| percentageToIn  | percent, base                     |
| percentageToPc  | percent, base                     |
| percentageToCm  | percent, base                     |
| percentageToMm  | percent, base                     |

## Communities

[![Reddit](https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white)](https://www.reddit.com/r/cssunitconverter/)

## Contributing

Got ideas or bug reports? Open an issue or send a pull request!

## License

MIT
