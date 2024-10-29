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

  regular_10: FONT({ weight: 400, size: 1.0 }),
  regular_12: FONT({ weight: 400, size: 1.2 }),
  bold_15: FONT({ weight: 700, size: 1.5 }),
  bold_20: FONT({ weight: 700, size: 2.0 }),
};

export default font;
