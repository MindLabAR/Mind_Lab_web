const MIN_RADIUS = 7.5;
const MAX_RADIUS = 15;
const DEPTH = 2;
const LEFT_COLOR = "66CCCC";
const RIGHT_COLOR = "0099CC";
const NUM_POINTS = 2500;

const getGradientStop = (ratio) => {
  ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;

  const c0 = LEFT_COLOR.match(/.{1,2}/g).map(
    (oct) => parseInt(oct, 16) * (1 - ratio)
  );
  const c1 = RIGHT_COLOR.match(/.{1,2}/g).map(
    (oct) => parseInt(oct, 16) * ratio
  );

  const ci = [0, 1, 2].map((i) => Math.round(c0[i] + c1[i]));
  const color = ci
    .reduce((a, v) => (a << 8) + v, 0)
    .toString(16)
    .padStart(6, "0");
  console.log(" ungu is " + color);
  const newColor = [color.slice(0, 2), color.slice(2, 4), color.slice(4)];
  console.log("new color is " + newColor);
  return `#${color}`;
};

const calculateColor = (x) => {
  const maxDiff = MAX_RADIUS * 2;
  const distance = x + MAX_RADIUS;

  const ratio = distance / maxDiff;

  const stop = getGradientStop(ratio);
  return stop;
};

const randomFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
export const pointsInner = Array.from(
  { length: NUM_POINTS },
  (v, k) => k + 1
).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS);
  const randomAngle = Math.random() * Math.PI * 2;

  const x = Math.cos(randomAngle) * randomRadius;
  const y = Math.sin(randomAngle) * randomRadius;
  const z = randomFromInterval(-DEPTH, DEPTH);

  const color = calculateColor(x);
  return {
    idx: num,
    position: [x, y, z],
    color,
  };
});
