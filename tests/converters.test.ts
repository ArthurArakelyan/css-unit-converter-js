import {
  pxToRem,
  pxToEm,
  pxToVw,
  pxToVh,
  pxToPt,
  pxToIn,
  pxToPc,
  pxToCm,
  pxToMm,
  pxToPercentage,
  remToPx,
  remToEm,
  remToVw,
  remToVh,
  remToPt,
  remToIn,
  remToPc,
  remToCm,
  remToMm,
  remToPercentage,
  emToPx,
  emToRem,
  emToVw,
  emToVh,
  emToPt,
  emToIn,
  emToPc,
  emToCm,
  emToMm,
  emToPercentage,
  vwToPx,
  vwToRem,
  vwToEm,
  vwToVh,
  vwToPt,
  vwToIn,
  vwToPc,
  vwToCm,
  vwToMm,
  vwToPercentage,
  vhToPx,
  vhToRem,
  vhToEm,
  vhToVw,
  vhToPt,
  vhToIn,
  vhToPc,
  vhToCm,
  vhToMm,
  vhToPercentage,
  ptToPx,
  ptToRem,
  ptToEm,
  ptToVw,
  ptToVh,
  ptToIn,
  ptToPc,
  ptToCm,
  ptToMm,
  ptToPercentage,
  inToPx,
  inToRem,
  inToEm,
  inToVw,
  inToVh,
  inToPt,
  inToPc,
  inToCm,
  inToMm,
  inToPercentage,
  pcToPx,
  pcToRem,
  pcToEm,
  pcToVw,
  pcToVh,
  pcToPt,
  pcToIn,
  pcToCm,
  pcToMm,
  pcToPercentage,
  cmToPx,
  cmToRem,
  cmToEm,
  cmToVw,
  cmToVh,
  cmToPt,
  cmToIn,
  cmToPc,
  cmToMm,
  cmToPercentage,
  mmToPx,
  mmToRem,
  mmToEm,
  mmToVw,
  mmToVh,
  mmToPt,
  mmToIn,
  mmToPc,
  mmToCm,
  mmToPercentage,
  percentageToPx,
  percentageToRem,
  percentageToEm,
  percentageToVw,
  percentageToVh,
  percentageToPt,
  percentageToIn,
  percentageToPc,
  percentageToCm,
  percentageToMm,
} from '../src/converters';

describe('pxToRem', () => {
  test('should convert correctly', () => {
    expect(pxToRem(16)).toBe(1);
    expect(pxToRem(16, 8)).toBe(2);

    expect(pxToRem(0)).toBe(0);

    expect(pxToRem(-16)).toBe(-1);
    expect(pxToRem(16, -16)).toBe(-1);
  });
});

describe('pxToEm', () => {
  test('should convert correctly', () => {
    expect(pxToEm(16)).toBe(1);
    expect(pxToEm(16, 8)).toBe(2);

    expect(pxToEm(0)).toBe(0);

    expect(pxToEm(-16)).toBe(-1);
    expect(pxToEm(16, -16)).toBe(-1);
  });
});

describe('pxToVw', () => {
  const mockViewportWidth = 1920;

  test('should convert correctly', () => {
    expect(pxToVw(19.2, mockViewportWidth)).toBe(1);
    expect(pxToVw(38.4, mockViewportWidth)).toBe(2);

    expect(pxToVw(0, mockViewportWidth)).toBe(0);

    expect(pxToVw(-19.2, mockViewportWidth)).toBe(-1);
    expect(pxToVw(19.2, -mockViewportWidth)).toBe(-1);
  });
});

describe('pxToVh', () => {
  const mockViewportHeight = 1000;

  test('should convert correctly', () => {
    expect(pxToVh(10, mockViewportHeight)).toBe(1);
    expect(pxToVh(20, mockViewportHeight)).toBe(2);

    expect(pxToVh(0, mockViewportHeight)).toBe(0);

    expect(pxToVh(-10, mockViewportHeight)).toBe(-1);
    expect(pxToVh(10, -mockViewportHeight)).toBe(-1);
  });
});

describe('pxToPt', () => {
  test('should convert correctly', () => {
    expect(pxToPt(10)).toBe(7.5);
    expect(pxToPt(12)).toBe(9);

    expect(pxToPt(0)).toBe(0);

    expect(pxToPt(-10)).toBe(-7.5);
  });
});

describe('pxToIn', () => {
  test('should convert correctly', () => {
    expect(pxToIn(96)).toBe(1);
    expect(pxToIn(25)).toBe(0.26);

    expect(pxToIn(0)).toBe(0);

    expect(pxToIn(-96)).toBe(-1);
  });
});

describe('pxToPc', () => {
  test('should convert correctly', () => {
    expect(pxToPc(12)).toBe(0.75);
    expect(pxToPc(16)).toBe(1);

    expect(pxToPc(0)).toBe(0);

    expect(pxToPc(-16)).toBe(-1);
  });
});

describe('pxToCm', () => {
  test('should convert correctly', () => {
    expect(pxToCm(10)).toBe(0.265);
    expect(pxToCm(37.8)).toBe(1);

    expect(pxToCm(0)).toBe(0);

    expect(pxToCm(-37.8)).toBe(-1);
  });
});

describe('pxToMm', () => {
  test('should convert correctly', () => {
    expect(pxToMm(10)).toBe(2.646);
    expect(pxToMm(3.78)).toBe(1);

    expect(pxToMm(0)).toBe(0);

    expect(pxToMm(-3.78)).toBe(-1);
  });
});

describe('pxToPercentage', () => {
  const mockBase = 1000;

  test('should convert correctly', () => {
    expect(pxToPercentage(10, mockBase)).toBe(1);
    expect(pxToPercentage(500, mockBase)).toBe(50);

    expect(pxToPercentage(0, mockBase)).toBe(0);

    expect(pxToPercentage(-10, mockBase)).toBe(-1);
    expect(pxToPercentage(10, -mockBase)).toBe(-1);
  });
});

describe('remToPx', () => {
  test('should convert correctly', () => {
    expect(remToPx(1)).toBe(16);
    expect(remToPx(2.5)).toBe(40);
    expect(remToPx(2, 8)).toBe(16);

    expect(remToPx(0)).toBe(0);

    expect(remToPx(-1)).toBe(-16);
    expect(remToPx(1, -16)).toBe(-16);
  });
});

describe('remToEm', () => {
  test('should convert correctly', () => {
    expect(remToEm(1)).toBe(1);
    expect(remToEm(2.5, 16, 32)).toBe(1.25);
    expect(remToEm(3, 8, 16)).toBe(1.5);

    expect(remToEm(0)).toBe(0);

    expect(remToEm(-1)).toBe(-1);
    expect(remToEm(1, -16)).toBe(-1);
    expect(remToEm(1, 16, -16)).toBe(-1);
  });
});

describe('remToVw', () => {
  test('should convert correctly', () => {
    expect(remToVw(1.5, 16, 1920)).toBe(1.25);
    expect(remToVw(12, 16, 1920)).toBe(10);
    expect(remToVw(10, 16, 1000)).toBe(16);

    expect(remToVw(0, 16, 1920)).toBe(0);

    expect(remToVw(-12, 16, 1920)).toBe(-10);
    expect(remToVw(12, -16, 1920)).toBe(-10);
    expect(remToVw(12, 16, -1920)).toBe(-10);
  });
});

describe('remToVh', () => {
  test('should convert correctly', () => {
    expect(remToVh(5, 16, 1000)).toBe(8);
    expect(remToVh(12, 16, 1000)).toBe(19.2);

    expect(remToVh(0, 16, 1000)).toBe(0);

    expect(remToVh(-5, 16, 1000)).toBe(-8);
    expect(remToVh(5, -16, 1000)).toBe(-8);
    expect(remToVh(5, 16, -1000)).toBe(-8);
  });
});

describe('remToPt', () => {
  test('should convert correctly', () => {
    expect(remToPt(1)).toBe(12);
    expect(remToPt(6)).toBe(72);

    expect(remToPt(0)).toBe(0);

    expect(remToPt(-1)).toBe(-12);
    expect(remToPt(1, -16)).toBe(-12);
  });
});

describe('remToIn', () => {
  test('should convert correctly', () => {
    expect(remToIn(4)).toBe(0.667);
    expect(remToIn(12)).toBe(2);
    expect(remToIn(24, 20)).toBe(5);

    expect(remToIn(0)).toBe(0);

    expect(remToIn(-6)).toBe(-1);
    expect(remToIn(6, -16)).toBe(-1);
  });
});

describe('remToPc', () => {
  test('should convert correctly', () => {
    expect(remToPc(10)).toBe(10);
    expect(remToPc(10, 32)).toBe(20);
    expect(remToPc(10, 8)).toBe(5);

    expect(remToPc(0)).toBe(0);

    expect(remToPc(-1)).toBe(-1);
    expect(remToPc(1, -16)).toBe(-1);
  });
});

describe('remToCm', () => {
  test('should convert correctly', () => {
    expect(remToCm(3)).toBe(1.27);
    expect(remToCm(6)).toBe(2.54);
    expect(remToCm(4, 10)).toBe(1.058);

    expect(remToCm(0)).toBe(0);

    expect(remToCm(-3)).toBe(-1.27);
    expect(remToCm(3, -16)).toBe(-1.27);
  });
});

describe('remToMm', () => {
  test('should convert correctly', () => {
    expect(remToMm(3)).toBe(12.7);
    expect(remToMm(6)).toBe(25.4);
    expect(remToMm(4, 10)).toBe(10.583);

    expect(remToMm(0)).toBe(0);

    expect(remToMm(-3)).toBe(-12.7);
    expect(remToMm(3, -16)).toBe(-12.7);
  });
});

describe('remToPercentage', () => {
  test('should convert correctly', () => {
    expect(remToPercentage(1, 16, 1000)).toBe(1.6);
    expect(remToPercentage(15, 16, 1000)).toBe(24);

    expect(remToPercentage(0, 16, 1000)).toBe(0);

    expect(remToPercentage(-1, 16, 1000)).toBe(-1.6);
    expect(remToPercentage(1, -16, 1000)).toBe(-1.6);
    expect(remToPercentage(1, 16, -1000)).toBe(-1.6);
  });
});

describe('emToPx', () => {
  test('should convert correctly', () => {
    expect(emToPx(1)).toBe(16);
    expect(emToPx(2.5)).toBe(40);
    expect(emToPx(2, 8)).toBe(16);

    expect(emToPx(0)).toBe(0);

    expect(emToPx(-1)).toBe(-16);
    expect(emToPx(1, -16)).toBe(-16);
  });
});

describe('emToRem', () => {
  test('should convert correctly', () => {
    expect(emToRem(1)).toBe(1);
    expect(emToRem(2.5, 16, 32)).toBe(1.25);
    expect(emToRem(3, 8, 16)).toBe(1.5);

    expect(emToRem(0)).toBe(0);

    expect(emToRem(-1)).toBe(-1);
    expect(emToRem(1, -16)).toBe(-1);
    expect(emToRem(1, 16, -16)).toBe(-1);
  });
});

describe('emToVw', () => {
  test('should convert correctly', () => {
    expect(emToVw(1.5, 16, 1920)).toBe(1.25);
    expect(emToVw(12, 16, 1920)).toBe(10);
    expect(emToVw(10, 16, 1000)).toBe(16);

    expect(emToVw(0, 16, 1920)).toBe(0);

    expect(emToVw(-12, 16, 1920)).toBe(-10);
    expect(emToVw(12, -16, 1920)).toBe(-10);
    expect(emToVw(12, 16, -1920)).toBe(-10);
  });
});

describe('emToVh', () => {
  test('should convert correctly', () => {
    expect(emToVh(5, 16, 1000)).toBe(8);
    expect(emToVh(12, 16, 1000)).toBe(19.2);

    expect(emToVh(0, 16, 1000)).toBe(0);

    expect(emToVh(-5, 16, 1000)).toBe(-8);
    expect(emToVh(5, -16, 1000)).toBe(-8);
    expect(emToVh(5, 16, -1000)).toBe(-8);
  });
});

describe('emToPt', () => {
  test('should convert correctly', () => {
    expect(emToPt(1)).toBe(12);
    expect(emToPt(6)).toBe(72);

    expect(emToPt(0)).toBe(0);

    expect(emToPt(-1)).toBe(-12);
    expect(emToPt(1, -16)).toBe(-12);
  });
});

describe('emToIn', () => {
  test('should convert correctly', () => {
    expect(emToIn(4)).toBe(0.667);
    expect(emToIn(12)).toBe(2);
    expect(emToIn(24, 20)).toBe(5);

    expect(emToIn(0)).toBe(0);

    expect(emToIn(-6)).toBe(-1);
    expect(emToIn(6, -16)).toBe(-1);
  });
});

describe('emToPc', () => {
  test('should convert correctly', () => {
    expect(emToPc(10)).toBe(10);
    expect(emToPc(10, 32)).toBe(20);
    expect(emToPc(10, 8)).toBe(5);

    expect(emToPc(0)).toBe(0);

    expect(emToPc(-1)).toBe(-1);
    expect(emToPc(1, -16)).toBe(-1);
  });
});

describe('emToCm', () => {
  test('should convert correctly', () => {
    expect(emToCm(3)).toBe(1.27);
    expect(emToCm(6)).toBe(2.54);
    expect(emToCm(4, 10)).toBe(1.058);

    expect(emToCm(0)).toBe(0);

    expect(emToCm(-3)).toBe(-1.27);
    expect(emToCm(3, -16)).toBe(-1.27);
  });
});

describe('emToMm', () => {
  test('should convert correctly', () => {
    expect(emToMm(3)).toBe(12.7);
    expect(emToMm(6)).toBe(25.4);
    expect(emToMm(4, 10)).toBe(10.583);

    expect(emToMm(0)).toBe(0);

    expect(emToMm(-3)).toBe(-12.7);
    expect(emToMm(3, -16)).toBe(-12.7);
  });
});

describe('emToPercentage', () => {
  test('should convert correctly', () => {
    expect(emToPercentage(1, 16, 1000)).toBe(1.6);
    expect(emToPercentage(15, 16, 1000)).toBe(24);

    expect(emToPercentage(0, 16, 1000)).toBe(0);

    expect(emToPercentage(-1, 16, 1000)).toBe(-1.6);
    expect(emToPercentage(1, -16, 1000)).toBe(-1.6);
    expect(emToPercentage(1, 16, -1000)).toBe(-1.6);
  });
});

describe('vwToPx', () => {
  test('should convert correctly', () => {
    expect(vwToPx(1, 1920)).toBe(19.2);
    expect(vwToPx(1.5, 1920)).toBe(28.8);
    expect(vwToPx(50, 1920)).toBe(960);
    expect(vwToPx(100, 1920)).toBe(1920);

    expect(vwToPx(0, 1920)).toBe(0);

    expect(vwToPx(-1, 1920)).toBe(-19.2);
    expect(vwToPx(1, -1920)).toBe(-19.2);
  });
});

describe('vwToRem', () => {
  test('should convert correctly', () => {
    expect(vwToRem(1, 1920)).toBe(1.2);
    expect(vwToRem(50, 1920, 10)).toBe(96);
    expect(vwToRem(100, 1920)).toBe(120);

    expect(vwToRem(0, 1920)).toBe(0);

    expect(vwToRem(-1, 1920)).toBe(-1.2);
    expect(vwToRem(1, -1920)).toBe(-1.2);
    expect(vwToRem(1, 1920, -16)).toBe(-1.2);
  });
});

describe('vwToEm', () => {
  test('should convert correctly', () => {
    expect(vwToEm(1, 1920)).toBe(1.2);
    expect(vwToEm(50, 1920, 10)).toBe(96);
    expect(vwToEm(100, 1920)).toBe(120);

    expect(vwToEm(0, 1920)).toBe(0);

    expect(vwToEm(-1, 1920)).toBe(-1.2);
    expect(vwToEm(1, -1920)).toBe(-1.2);
    expect(vwToEm(1, 1920, -16)).toBe(-1.2);
  });
});

describe('vwToVh', () => {
  test('should convert correctly', () => {
    expect(vwToVh(1, 1920, 1000)).toBe(1.92);
    expect(vwToVh(50, 1920, 1000)).toBe(96);
    expect(vwToVh(100, 1920, 1000)).toBe(192);

    expect(vwToVh(0, 1920, 1000)).toBe(0);

    expect(vwToVh(-1, 1920, 1000)).toBe(-1.92);
    expect(vwToVh(1, -1920, 1000)).toBe(-1.92);
    expect(vwToVh(1, 1920, -1000)).toBe(-1.92);
  });
});

describe('vwToPt', () => {
  test('should convert correctly', () => {
    expect(vwToPt(1, 1920)).toBe(14.4);
    expect(vwToPt(5, 1920)).toBe(72);
    expect(vwToPt(40, 1920)).toBe(576);
    expect(vwToPt(40, 1000)).toBe(300);

    expect(vwToPt(0, 1920)).toBe(0);

    expect(vwToPt(-1, 1920)).toBe(-14.4);
    expect(vwToPt(1, -1920)).toBe(-14.4);
  });
});

describe('vwToIn', () => {
  test('should convert correctly', () => {
    expect(vwToIn(10, 1920)).toBe(2);
    expect(vwToIn(54, 1920)).toBe(10.8);
    expect(vwToIn(12, 1000)).toBe(1.25);

    expect(vwToIn(0, 1920)).toBe(0);

    expect(vwToIn(-10, 1920)).toBe(-2);
    expect(vwToIn(10, -1920)).toBe(-2);
  });
});

describe('vwToPc', () => {
  test('should convert correctly', () => {
    expect(vwToPc(10, 1920)).toBe(12);
    expect(vwToPc(24, 1920)).toBe(28.8);
    expect(vwToPc(8, 1000)).toBe(5);

    expect(vwToPc(0, 1920)).toBe(0);

    expect(vwToPc(-10, 1920)).toBe(-12);
    expect(vwToPc(10, -1920)).toBe(-12);
  });
});

describe('vwToCm', () => {
  test('should convert correctly', () => {
    expect(vwToCm(1, 1920)).toBe(0.508);
    expect(vwToCm(50, 1920)).toBe(25.4);
    expect(vwToCm(12, 1000)).toBe(3.175);

    expect(vwToCm(0, 1920)).toBe(0);

    expect(vwToCm(-1, 1920)).toBe(-0.508);
    expect(vwToCm(1, -1920)).toBe(-0.508);
  });
});

describe('vwToMm', () => {
  test('should convert correctly', () => {
    expect(vwToMm(1, 1920)).toBe(5.08);
    expect(vwToMm(50, 1920)).toBe(254);
    expect(vwToMm(12, 1000)).toBe(31.75);

    expect(vwToMm(0, 1920)).toBe(0);

    expect(vwToMm(-1, 1920)).toBe(-5.08);
    expect(vwToMm(1, -1920)).toBe(-5.08);
  });
});

describe('vwToPercentage', () => {
  test('should convert correctly', () => {
    expect(vwToPercentage(1, 1920, 1000)).toBe(1.92);
    expect(vwToPercentage(50, 1920, 1000)).toBe(96);
    expect(vwToPercentage(100, 1920, 1000)).toBe(192);

    expect(vwToPercentage(0, 1920, 1000)).toBe(0);

    expect(vwToPercentage(-1, 1920, 1000)).toBe(-1.92);
    expect(vwToPercentage(1, -1920, 1000)).toBe(-1.92);
    expect(vwToPercentage(1, 1920, -1000)).toBe(-1.92);
  });
});

describe('vhToPx', () => {
  test('should convert correctly', () => {
    expect(vhToPx(1, 1000)).toBe(10);
    expect(vhToPx(50, 1000)).toBe(500);
    expect(vhToPx(20, 1080)).toBe(216);

    expect(vhToPx(0, 1000)).toBe(0);

    expect(vhToPx(-1, 1000)).toBe(-10);
    expect(vhToPx(1, -1000)).toBe(-10);
  });
});

describe('vhToRem', () => {
  test('should convert correctly', () => {
    expect(vhToRem(10, 1000)).toBe(6.25);
    expect(vhToRem(125, 1000)).toBe(78.125);
    expect(vhToRem(50, 1080)).toBe(33.75);
    expect(vhToRem(10, 1080, 8)).toBe(13.5);

    expect(vhToRem(0, 1000)).toBe(0);

    expect(vhToRem(-1, 1000)).toBe(-0.625);
    expect(vhToRem(1, -1000)).toBe(-0.625);
    expect(vhToRem(1, 1000, -16)).toBe(-0.625);
  });
});

describe('vhToEm', () => {
  test('should convert correctly', () => {
    expect(vhToEm(10, 1000)).toBe(6.25);
    expect(vhToEm(125, 1000)).toBe(78.125);
    expect(vhToEm(50, 1080)).toBe(33.75);
    expect(vhToEm(10, 1080, 8)).toBe(13.5);

    expect(vhToEm(0, 1000)).toBe(0);

    expect(vhToEm(-1, 1000)).toBe(-0.625);
    expect(vhToEm(1, -1000)).toBe(-0.625);
    expect(vhToEm(1, 1000, -16)).toBe(-0.625);
  });
});

describe('vhToVw', () => {
  test('should convert correctly', () => {
    expect(vhToVw(1, 1000, 1920)).toBe(0.521);
    expect(vhToVw(48, 1000, 1920)).toBe(25);
    expect(vhToVw(96, 1000, 1920)).toBe(50);

    expect(vhToVw(0, 1000, 1920)).toBe(0);

    expect(vhToVw(-1, 1000, 1920)).toBe(-0.521);
    expect(vhToVw(1, -1000, 1920)).toBe(-0.521);
    expect(vhToVw(1, 1000, -1920)).toBe(-0.521);
  });
});

describe('vhToPt', () => {
  test('should convert correctly', () => {
    expect(vhToPt(1, 1000)).toBe(7.5);
    expect(vhToPt(5, 1000)).toBe(37.5);
    expect(vhToPt(40, 1080)).toBe(324);

    expect(vhToPt(0, 1000)).toBe(0);

    expect(vhToPt(-1, 1000)).toBe(-7.5);
    expect(vhToPt(1, -1000)).toBe(-7.5);
  });
});

describe('vhToIn', () => {
  test('should convert correctly', () => {
    expect(vhToIn(10, 1000)).toBe(1.042);
    expect(vhToIn(50, 1000)).toBe(5.208);
    expect(vhToIn(40, 1080)).toBe(4.5);

    expect(vhToIn(0, 1000)).toBe(0);

    expect(vhToIn(-10, 1000)).toBe(-1.042);
    expect(vhToIn(10, -1000)).toBe(-1.042);
  });
});

describe('vhToPc', () => {
  test('should convert correctly', () => {
    expect(vhToPc(10, 1000)).toBe(6.25);
    expect(vhToPc(50, 1000)).toBe(31.25);
    expect(vhToPc(40, 1080)).toBe(27);

    expect(vhToPc(0, 1000)).toBe(0);

    expect(vhToPc(-10, 1000)).toBe(-6.25);
    expect(vhToPc(10, -1000)).toBe(-6.25);
  });
});

describe('vhToCm', () => {
  test('should convert correctly', () => {
    expect(vhToCm(1, 1000)).toBe(0.265);
    expect(vhToCm(40, 1000)).toBe(10.583);
    expect(vhToCm(40, 1080)).toBe(11.43);

    expect(vhToCm(0, 1000)).toBe(0);

    expect(vhToCm(-1, 1000)).toBe(-0.265);
    expect(vhToCm(1, -1000)).toBe(-0.265);
  });
});

describe('vhToMm', () => {
  test('should convert correctly', () => {
    expect(vhToMm(1, 1000)).toBe(2.646);
    expect(vhToMm(40, 1000)).toBe(105.833);
    expect(vhToMm(40, 1080)).toBe(114.3);

    expect(vhToMm(0, 1000)).toBe(0);

    expect(vhToMm(-1, 1000)).toBe(-2.646);
    expect(vhToMm(1, -1000)).toBe(-2.646);
  });
});

describe('vhToPercentage', () => {
  test('should convert correctly', () => {
    expect(vhToPercentage(10, 1080, 1000)).toBe(10.8);
    expect(vhToPercentage(125, 1080, 1000)).toBe(135);
    expect(vhToPercentage(50, 1000, 1000)).toBe(50);

    expect(vhToPercentage(0, 1080, 1000)).toBe(0);

    expect(vhToPercentage(-10, 1080, 1000)).toBe(-10.8);
    expect(vhToPercentage(10, -1080, 1000)).toBe(-10.8);
    expect(vhToPercentage(10, 1080, -1000)).toBe(-10.8);
  });
});

describe('ptToPx', () => {
  test('should convert correctly', () => {
    expect(ptToPx(9)).toBe(12);
    expect(ptToPx(70)).toBe(93.333);

    expect(ptToPx(0)).toBe(0);

    expect(ptToPx(-9)).toBe(-12);
  });
});

describe('ptToRem', () => {
  test('should convert correctly', () => {
    expect(ptToRem(12)).toBe(1);
    expect(ptToRem(50)).toBe(4.167);

    expect(ptToRem(0)).toBe(0);

    expect(ptToRem(-12)).toBe(-1);
    expect(ptToRem(12, -16)).toBe(-1);
  });
});

describe('ptToEm', () => {
  test('should convert correctly', () => {
    expect(ptToEm(12)).toBe(1);
    expect(ptToEm(50)).toBe(4.167);

    expect(ptToEm(0)).toBe(0);

    expect(ptToEm(-12)).toBe(-1);
    expect(ptToEm(12, -16)).toBe(-1);
  });
});

describe('ptToVw', () => {
  const mockViewportWidth = 1920;

  test('should convert correctly', () => {
    expect(ptToVw(15, mockViewportWidth)).toBe(1.042);
    expect(ptToVw(50, mockViewportWidth)).toBe(3.472);

    expect(ptToVw(0, mockViewportWidth)).toBe(0);

    expect(ptToVw(-15, mockViewportWidth)).toBe(-1.042);
    expect(ptToVw(15, -mockViewportWidth)).toBe(-1.042);
  });
});

describe('ptToVh', () => {
  const mockViewportHeight = 1000;

  test('should convert correctly', () => {
    expect(ptToVh(10, mockViewportHeight)).toBe(1.333);
    expect(ptToVh(60, mockViewportHeight)).toBe(8);

    expect(ptToVh(0, mockViewportHeight)).toBe(0);

    expect(ptToVh(-10, mockViewportHeight)).toBe(-1.333);
    expect(ptToVh(10, -mockViewportHeight)).toBe(-1.333);
  });
});

describe('ptToIn', () => {
  test('should convert correctly', () => {
    expect(ptToIn(100)).toBe(1.389);
    expect(ptToIn(72)).toBe(1);

    expect(ptToIn(0)).toBe(0);

    expect(ptToIn(-72)).toBe(-1);
  });
});

describe('ptToPc', () => {
  test('should convert correctly', () => {
    expect(ptToPc(12)).toBe(1);
    expect(ptToPc(50)).toBe(4.167);

    expect(ptToPc(0)).toBe(0);

    expect(ptToPc(-12)).toBe(-1);
  });
});

describe('ptToCm', () => {
  test('should convert correctly', () => {
    expect(ptToCm(32)).toBe(1.129);
    expect(ptToCm(50)).toBe(1.764);

    expect(ptToCm(0)).toBe(0);

    expect(ptToCm(-32)).toBe(-1.129);
  });
});

describe('ptToMm', () => {
  test('should convert correctly', () => {
    expect(ptToMm(32)).toBe(11.289);
    expect(ptToMm(50)).toBe(17.639);

    expect(ptToMm(0)).toBe(0);

    expect(ptToMm(-32)).toBe(-11.289);
  });
});

describe('ptToPercentage', () => {
  const mockBase = 1000;

  test('should convert correctly', () => {
    expect(ptToPercentage(10, mockBase)).toBe(1.333);
    expect(ptToPercentage(500, mockBase)).toBe(66.667);

    expect(ptToPercentage(0, mockBase)).toBe(0);

    expect(ptToPercentage(-10, mockBase)).toBe(-1.333);
    expect(ptToPercentage(10, -mockBase)).toBe(-1.333);
  });
});

describe('inToPx', () => {
  test('should convert correctly', () => {
    expect(inToPx(1)).toBe(96);
    expect(inToPx(4)).toBe(384);

    expect(inToPx(0)).toBe(0);

    expect(inToPx(-1)).toBe(-96);
  });
});

describe('inToRem', () => {
  test('should convert correctly', () => {
    expect(inToRem(1)).toBe(6);
    expect(inToRem(1, 32)).toBe(3);
    expect(inToRem(50)).toBe(300);

    expect(inToRem(0)).toBe(0);

    expect(inToRem(-1)).toBe(-6);
    expect(inToRem(1, -16)).toBe(-6);
  });
});

describe('inToEm', () => {
  test('should convert correctly', () => {
    expect(inToEm(1)).toBe(6);
    expect(inToEm(1, 32)).toBe(3);
    expect(inToEm(50)).toBe(300);

    expect(inToEm(0)).toBe(0);

    expect(inToEm(-1)).toBe(-6);
    expect(inToEm(1, -16)).toBe(-6);
  });
});

describe('inToVw', () => {
  const mockViewportWidth = 1920;

  test('should convert correctly', () => {
    expect(inToVw(1, mockViewportWidth)).toBe(5);
    expect(inToVw(12, mockViewportWidth)).toBe(60);

    expect(inToVw(0, mockViewportWidth)).toBe(0);

    expect(inToVw(-1, mockViewportWidth)).toBe(-5);
    expect(inToVw(1, -mockViewportWidth)).toBe(-5);
  });
});

describe('inToVh', () => {
  const mockViewportHeight = 1000;

  test('should convert correctly', () => {
    expect(inToVh(1, mockViewportHeight)).toBe(9.6);
    expect(inToVh(5, mockViewportHeight)).toBe(48);

    expect(inToVh(0, mockViewportHeight)).toBe(0);

    expect(inToVh(-1, mockViewportHeight)).toBe(-9.6);
    expect(inToVh(1, -mockViewportHeight)).toBe(-9.6);
  });
});

describe('inToPt', () => {
  test('should convert correctly', () => {
    expect(inToPt(1)).toBe(72);
    expect(inToPt(5)).toBe(360);

    expect(inToPt(0)).toBe(0);

    expect(inToPt(-1)).toBe(-72);
  });
});

describe('inToPc', () => {
  test('should convert correctly', () => {
    expect(inToPc(1)).toBe(6);
    expect(inToPc(20)).toBe(120);

    expect(inToPc(0)).toBe(0);

    expect(inToPc(-1)).toBe(-6);
  });
});

describe('inToCm', () => {
  test('should convert correctly', () => {
    expect(inToCm(1)).toBe(2.54);
    expect(inToCm(50)).toBe(127);

    expect(inToCm(0)).toBe(0);

    expect(inToCm(-1)).toBe(-2.54);
  });
});

describe('inToMm', () => {
  test('should convert correctly', () => {
    expect(inToMm(1)).toBe(25.4);
    expect(inToMm(50)).toBe(1270);

    expect(inToMm(0)).toBe(0);

    expect(inToMm(-1)).toBe(-25.4);
  });
});

describe('inToPercentage', () => {
  const mockBase = 1000;

  test('should convert correctly', () => {
    expect(inToPercentage(1, mockBase)).toBe(9.6);
    expect(inToPercentage(12, mockBase)).toBe(115.2);

    expect(inToPercentage(0, mockBase)).toBe(0);

    expect(inToPercentage(-1, mockBase)).toBe(-9.6);
    expect(inToPercentage(1, -mockBase)).toBe(-9.6);
  });
});

describe('pcToPx', () => {
  test('should convert correctly', () => {
    expect(pcToPx(1)).toBe(16);
    expect(pcToPx(5)).toBe(80);

    expect(pcToPx(0)).toBe(0);

    expect(pcToPx(-1)).toBe(-16);
  });
});

describe('pcToRem', () => {
  test('should convert correctly', () => {
    expect(pcToRem(1)).toBe(1);
    expect(pcToRem(1, 32)).toBe(0.5);

    expect(pcToRem(0)).toBe(0);

    expect(pcToRem(-1)).toBe(-1);
    expect(pcToRem(1, -16)).toBe(-1);
  });
});

describe('pcToEm', () => {
  test('should convert correctly', () => {
    expect(pcToEm(1)).toBe(1);
    expect(pcToEm(1, 32)).toBe(0.5);

    expect(pcToEm(0)).toBe(0);

    expect(pcToEm(-1)).toBe(-1);
    expect(pcToEm(1, -16)).toBe(-1);
  });
});

describe('pcToVw', () => {
  const mockViewportWidth = 1920;

  test('should convert correctly', () => {
    expect(pcToVw(6, mockViewportWidth)).toBe(5);
      expect(pcToVw(10, mockViewportWidth)).toBe(8.333);

    expect(pcToVw(0, mockViewportWidth)).toBe(0);

    expect(pcToVw(-6, mockViewportWidth)).toBe(-5);
    expect(pcToVw(6, -mockViewportWidth)).toBe(-5);
  });
});

describe('pcToVh', () => {
  const mockViewportHeight = 1000;

  test('should convert correctly', () => {
    expect(pcToVh(10, mockViewportHeight)).toBe(16);
    expect(pcToVh(14, mockViewportHeight)).toBe(22.4);

    expect(pcToVh(0, mockViewportHeight)).toBe(0);

    expect(pcToVh(-10, mockViewportHeight)).toBe(-16);
    expect(pcToVh(10, -mockViewportHeight)).toBe(-16);
  });
});

describe('pcToPt', () => {
  test('should convert correctly', () => {
    expect(pcToPt(1)).toBe(12);
    expect(pcToPt(5)).toBe(60);

    expect(pcToPt(0)).toBe(0);

    expect(pcToPt(-1)).toBe(-12);
  });
});

describe('pcToIn', () => {
  test('should convert correctly', () => {
    expect(pcToIn(12)).toBe(2);
    expect(pcToIn(25)).toBe(4.167);

    expect(pcToIn(0)).toBe(0);

    expect(pcToIn(-12)).toBe(-2);
  });
});

describe('pcToCm', () => {
  test('should convert correctly', () => {
    expect(pcToCm(6)).toBe(2.54);
    expect(pcToCm(300)).toBe(127);

    expect(pcToCm(0)).toBe(0);

    expect(pcToCm(-6)).toBe(-2.54);
  });
});

describe('pcToMm', () => {
  test('should convert correctly', () => {
    expect(pcToMm(6)).toBe(25.4);
    expect(pcToMm(300)).toBe(1270);

    expect(pcToMm(0)).toBe(0);

    expect(pcToMm(-6)).toBe(-25.4);
  });
});

describe('pcToPercentage', () => {
  const mockBase = 1000;

  test('should convert correctly', () => {
    expect(pcToPercentage(6, mockBase)).toBe(9.6);
    expect(pcToPercentage(10, mockBase)).toBe(16);

    expect(pcToPercentage(0, mockBase)).toBe(0);

    expect(pcToPercentage(-6, mockBase)).toBe(-9.6);
    expect(pcToPercentage(6, -mockBase)).toBe(-9.6);
  });
});

describe('cmToPx', () => {
  test('should convert correctly', () => {
    expect(cmToPx(1)).toBe(37.795);
    expect(cmToPx(5)).toBe(188.976);

    expect(cmToPx(0)).toBe(0);

    expect(cmToPx(-1)).toBe(-37.795);
  });
});

describe('cmToRem', () => {
  test('should convert correctly', () => {
    expect(cmToRem(1)).toBe(2.362);
    expect(cmToRem(6, 32)).toBe(7.087);

    expect(cmToRem(0)).toBe(0);

    expect(cmToRem(-1)).toBe(-2.362);
    expect(cmToRem(1, -16)).toBe(-2.362);
  });
});

describe('cmToEm', () => {
  test('should convert correctly', () => {
    expect(cmToEm(1)).toBe(2.362);
    expect(cmToEm(6, 32)).toBe(7.087);

    expect(cmToEm(0)).toBe(0);

    expect(cmToEm(-1)).toBe(-2.362);
    expect(cmToEm(1, -16)).toBe(-2.362);
  });
});

describe('cmToVw', () => {
  const mockViewportWidth = 1920;

  test('should convert correctly', () => {
    expect(cmToVw(2, mockViewportWidth)).toBe(3.937);
    expect(cmToVw(4, mockViewportWidth)).toBe(7.874);

    expect(cmToVw(0, mockViewportWidth)).toBe(0);

    expect(cmToVw(-2, mockViewportWidth)).toBe(-3.937);
    expect(cmToVw(2, -mockViewportWidth)).toBe(-3.937);
  });
});

describe('cmToVh', () => {
  const mockViewportHeight = 1000;

  test('should convert correctly', () => {
    expect(cmToVh(1, mockViewportHeight)).toBe(3.78);
    expect(cmToVh(6, mockViewportHeight)).toBe(22.677);

    expect(cmToVh(0, mockViewportHeight)).toBe(0);

    expect(cmToVh(-1, mockViewportHeight)).toBe(-3.78);
    expect(cmToVh(1, -mockViewportHeight)).toBe(-3.78);
  });
});

describe('cmToPt', () => {
  test('should convert correctly', () => {
    expect(cmToPt(1)).toBe(28.346);
    expect(cmToPt(5)).toBe(141.732);

    expect(cmToPt(0)).toBe(0);

    expect(cmToPt(-1)).toBe(-28.346);
  });
});

describe('cmToIn', () => {
  test('should convert correctly', () => {
    expect(cmToIn(4)).toBe(1.575);
    expect(cmToIn(10)).toBe(3.937);

    expect(cmToIn(0)).toBe(0);

    expect(cmToIn(-4)).toBe(-1.575);
  });
});

describe('cmToPc', () => {
  test('should convert correctly', () => {
    expect(cmToPc(2)).toBe(4.724);
    expect(cmToPc(6)).toBe(14.173);

    expect(cmToPc(0)).toBe(0);

    expect(cmToPc(-2)).toBe(-4.724);
  });
});

describe('cmToMm', () => {
  test('should convert correctly', () => {
    expect(cmToMm(2)).toBe(20);
    expect(cmToMm(6.55)).toBe(65.5);

    expect(cmToMm(0)).toBe(0);

    expect(cmToMm(-2)).toBe(-20);
  });
});

describe('cmToPercentage', () => {
  const mockBase = 1000;

  test('should convert correctly', () => {
    expect(cmToPercentage(2, mockBase)).toBe(7.559);
    expect(cmToPercentage(4, mockBase)).toBe(15.118);

    expect(cmToPercentage(0, mockBase)).toBe(0);

    expect(cmToPercentage(-2, mockBase)).toBe(-7.559);
    expect(cmToPercentage(2, -mockBase)).toBe(-7.559);
  });
});

describe('mmToPx', () => {
  test('should convert correctly', () => {
    expect(mmToPx(1)).toBe(3.78);
    expect(mmToPx(5)).toBe(18.898);

    expect(mmToPx(0)).toBe(0);

    expect(mmToPx(-1)).toBe(-3.78);
  });
});

describe('mmToRem', () => {
  test('should convert correctly', () => {
    expect(mmToRem(1)).toBe(0.236);
    expect(mmToRem(6, 32)).toBe(0.709);

    expect(mmToRem(0)).toBe(0);

    expect(mmToRem(-1)).toBe(-0.236);
    expect(mmToRem(1, -16)).toBe(-0.236);
  });
});

describe('mmToEm', () => {
  test('should convert correctly', () => {
    expect(mmToEm(1)).toBe(0.236);
    expect(mmToEm(6, 32)).toBe(0.709);

    expect(mmToEm(0)).toBe(0);

    expect(mmToEm(-1)).toBe(-0.236);
    expect(mmToEm(1, -16)).toBe(-0.236);
  });
});

describe('mmToVw', () => {
  const mockViewportWidth = 1920;

  test('should convert correctly', () => {
    expect(mmToVw(2, mockViewportWidth)).toBe(0.394);
    expect(mmToVw(4, mockViewportWidth)).toBe(0.787);

    expect(mmToVw(0, mockViewportWidth)).toBe(0);

    expect(mmToVw(-2, mockViewportWidth)).toBe(-0.394);
    expect(mmToVw(2, -mockViewportWidth)).toBe(-0.394);
  });
});

describe('mmToVh', () => {
  const mockViewportHeight = 1000;

  test('should convert correctly', () => {
    expect(mmToVh(1, mockViewportHeight)).toBe(0.378);
    expect(mmToVh(6, mockViewportHeight)).toBe(2.268);

    expect(mmToVh(0, mockViewportHeight)).toBe(0);

    expect(mmToVh(-1, mockViewportHeight)).toBe(-0.378);
    expect(mmToVh(1, -mockViewportHeight)).toBe(-0.378);
  });
});

describe('mmToPt', () => {
  test('should convert correctly', () => {
    expect(mmToPt(1)).toBe(2.835);
    expect(mmToPt(5)).toBe(14.173);

    expect(mmToPt(0)).toBe(0);

    expect(mmToPt(-1)).toBe(-2.835);
  });
});

describe('mmToIn', () => {
  test('should convert correctly', () => {
    expect(mmToIn(4)).toBe(0.157);
    expect(mmToIn(10)).toBe(0.394);

    expect(mmToIn(0)).toBe(0);

    expect(mmToIn(-4)).toBe(-0.157);
  });
});

describe('mmToPc', () => {
  test('should convert correctly', () => {
    expect(mmToPc(2)).toBe(0.472);
    expect(mmToPc(6)).toBe(1.417);

    expect(mmToPc(0)).toBe(0);

    expect(mmToPc(-2)).toBe(-0.472);
  });
});

describe('mmToCm', () => {
  test('should convert correctly', () => {
    expect(mmToCm(2)).toBe(0.2);
    expect(mmToCm(70)).toBe(7);

    expect(mmToCm(0)).toBe(0);

    expect(mmToCm(-2)).toBe(-0.2);
  });
});

describe('mmToPercentage', () => {
  const mockBase = 1000;

  test('should convert correctly', () => {
    expect(mmToPercentage(2, mockBase)).toBe(0.756);
    expect(mmToPercentage(4, mockBase)).toBe(1.512);

    expect(mmToPercentage(0, mockBase)).toBe(0);

    expect(mmToPercentage(-2, mockBase)).toBe(-0.756);
    expect(mmToPercentage(2, -mockBase)).toBe(-0.756);
  });
});

describe('percentageToPx', () => {
  test('should convert correctly', () => {
    expect(percentageToPx(10, 1000)).toBe(100);
    expect(percentageToPx(100, 1000)).toBe(1000);

    expect(percentageToPx(0, 1000)).toBe(0);

    expect(percentageToPx(-10, 1000)).toBe(-100);
    expect(percentageToPx(10, -1000)).toBe(-100);
  });
});

describe('percentageToRem', () => {
  test('should convert correctly', () => {
    expect(percentageToRem(10, 1000)).toBe(6.25);
    expect(percentageToRem(100, 1000, 8)).toBe(125);

    expect(percentageToRem(0, 1000)).toBe(0);

    expect(percentageToRem(-10, 1000)).toBe(-6.25);
    expect(percentageToRem(10, -1000)).toBe(-6.25);
    expect(percentageToRem(10, 1000, -16)).toBe(-6.25);
  });
});

describe('percentageToEm', () => {
  test('should convert correctly', () => {
    expect(percentageToEm(10, 1000)).toBe(6.25);
    expect(percentageToEm(100, 1000, 8)).toBe(125);

    expect(percentageToEm(0, 1000)).toBe(0);

    expect(percentageToEm(-10, 1000)).toBe(-6.25);
    expect(percentageToEm(10, -1000)).toBe(-6.25);
    expect(percentageToEm(10, 1000, -16)).toBe(-6.25);
  });
});

describe('percentageToVw', () => {
  test('should convert correctly', () => {
    expect(percentageToVw(1, 1000, 1920)).toBe(0.521);
    expect(percentageToVw(50, 1000, 1920)).toBe(26.042);
    expect(percentageToVw(100, 1000, 1920)).toBe(52.083);

    expect(percentageToVw(0, 1000, 1920)).toBe(0);

    expect(percentageToVw(-1, 1000, 1920)).toBe(-0.521);
    expect(percentageToVw(1, -1000, 1920)).toBe(-0.521);
    expect(percentageToVw(1, 1000, -1920)).toBe(-0.521);
  });
});

describe('percentageToVh', () => {
  test('should convert correctly', () => {
    expect(percentageToVh(1, 1000, 1080)).toBe(0.926);
    expect(percentageToVh(50, 1000, 1080)).toBe(46.296);
    expect(percentageToVh(100, 1000, 1080)).toBe(92.593);

    expect(percentageToVh(0, 1000, 1080)).toBe(0);

    expect(percentageToVh(-1, 1000, 1080)).toBe(-0.926);
    expect(percentageToVh(1, -1000, 1080)).toBe(-0.926);
    expect(percentageToVh(1, 1000, -1080)).toBe(-0.926);
  });
});

describe('percentageToPt', () => {
  test('should convert correctly', () => {
    expect(percentageToPt(10, 1000)).toBe(75);
    expect(percentageToPt(50, 1000)).toBe(375);

    expect(percentageToPt(0, 1000)).toBe(0);

    expect(percentageToPt(-10, 1000)).toBe(-75);
    expect(percentageToPt(10, -1000)).toBe(-75);
  });
});

describe('percentageToIn', () => {
  test('should convert correctly', () => {
    expect(percentageToIn(10, 1000)).toBe(1.042);
    expect(percentageToIn(50, 1000)).toBe(5.208);

    expect(percentageToIn(0, 1000)).toBe(0);

    expect(percentageToIn(-10, 1000)).toBe(-1.042);
    expect(percentageToIn(10, -1000)).toBe(-1.042);
  });
});

describe('percentageToPc', () => {
  test('should convert correctly', () => {
    expect(percentageToPc(10, 1000)).toBe(6.25);
    expect(percentageToPc(50, 1000)).toBe(31.25);

    expect(percentageToPc(0, 1000)).toBe(0);

    expect(percentageToPc(-10, 1000)).toBe(-6.25);
    expect(percentageToPc(10, -1000)).toBe(-6.25);
  });
});

describe('percentageToCm', () => {
  test('should convert correctly', () => {
    expect(percentageToCm(10, 1000)).toBe(2.646);
    expect(percentageToCm(50, 1000)).toBe(13.229);

    expect(percentageToCm(0, 1000)).toBe(0);

    expect(percentageToCm(-10, 1000)).toBe(-2.646);
    expect(percentageToCm(10, -1000)).toBe(-2.646);
  });
});

describe('percentageToMm', () => {
  test('should convert correctly', () => {
    expect(percentageToMm(10, 1000)).toBe(26.458);
    expect(percentageToMm(50, 1000)).toBe(132.292);

    expect(percentageToMm(0, 1000)).toBe(0);

    expect(percentageToMm(-10, 1000)).toBe(-26.458);
    expect(percentageToMm(10, -1000)).toBe(-26.458);
  });
});
