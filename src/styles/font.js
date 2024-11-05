function FONT({ weight, size }) {
  return `
            font-family: Pretendard, sans-serif;
            font-size: ${size}rem;
            font-weight: ${weight};
            `;
}

const font = {
  // 10px = 1rem
  // (예시) thin(1), extralight(2), light(3), regular(4), medium(5), semibold(6), bold(7), extrabold(8), black(9)

  light_20: FONT({ weight: 300, size: 2.0 }),
  regular_10: FONT({ weight: 400, size: 1.0 }),
  regular_12: FONT({ weight: 400, size: 1.2 }),
  regular_15: FONT({ weight: 400, size: 1.5 }),
  medium_12: FONT({ weight: 500, size: 1.2}),
  medium_13: FONT({ weight: 500, size: 1.3}),
  medium_15: FONT({ weight: 500, size: 1.5}),
  medium_18: FONT({ weight: 500, size: 1.8 }),
  medium_20: FONT({ weight: 500, size: 2.0 }),
  bold_15: FONT({ weight: 700, size: 1.5 }),
  bold_20: FONT({ weight: 700, size: 2.0 }),
  bold_23: FONT({ weight: 700, size: 2.3 }),
  semibold_12: FONT({ weight: 600, size: 1.2 }),
  extrabold_20: FONT({ weight: 800, size: 2.0}),
  black_18: FONT({ weight: 900, size: 1.8}),
  black_23: FONT({ weight: 900, size: 2.3 }),
  black_25: FONT({ weight: 900, size: 2.5 })
};

export default font;
