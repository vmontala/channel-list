const getRandomColor = () => {
  const h = 360 * Math.random();
  const s = 25 + 10 * Math.round(Math.random());
  const l = 50 + 10 * Math.round(Math.random());

  return `hsl(${h},${s}%,${l}%)`;
};

export default getRandomColor;
