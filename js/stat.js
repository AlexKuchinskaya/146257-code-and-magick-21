'use strict';
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const COLUMN_GAP = 50;
const TEXT_HEIGHT = 32;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;


const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const getRandomColor = function () {
  const saturation = randomInteger(0, 100);
  const lightness = randomInteger(0, 100);
  return `hsl(240, ${saturation}%, ${lightness}%)`;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + GAP, CLOUD_Y + 2 * GAP);
  ctx.fillText(`Список результатов: `, CLOUD_X + GAP, CLOUD_Y + 4 * GAP);

  const maxTime = Math.round(getMaxElement(times));

  for (let i = 0; i < names.length; i++) {
    ctx.fillStyle = `#000`;

    ctx.fillText(
        Math.round(times[i]).toString(),
        CLOUD_X + 3 * GAP + (COLUMN_GAP + BAR_WIDTH) * i,
        CLOUD_Y + 3 * GAP + TEXT_HEIGHT
    );

    ctx.fillText(
        names[i],
        CLOUD_X + 3 * GAP + (COLUMN_GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - 2 * GAP
    );

    ctx.fillStyle = names[i] === `Вы` ? `rgba(255, 0, 0, 1)` : getRandomColor();

    ctx.fillRect(
        CLOUD_X + 3 * GAP + (COLUMN_GAP + BAR_WIDTH) * i,
        CLOUD_Y + 5 * GAP + TEXT_HEIGHT + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime),
        BAR_WIDTH,
        (BAR_HEIGHT * times[i]) / maxTime
    );
  }
};
