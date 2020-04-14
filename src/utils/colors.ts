/**
 * Generates a semi-random color string based on some HSL preset (25/35 saturation and 50/60 lightness).
 *
 * @returns {string} - Semi-random HSL color code.
 */
const generateColor = () => {
  const h = 360 * Math.random();
  const s = 25 + 10 * Math.round(Math.random());
  const l = 50 + 10 * Math.round(Math.random());

  return `hsl(${h},${s}%,${l}%)`;
};

export default generateColor;
