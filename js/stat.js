'use strict'

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 18;
var TEXT_WIDTH = 70;
var BAR_WIDTH = 40;
var COLUMN_GAP = 50;
var barHeight = 150;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
};

var getRandomColor = function (min, max) {
  return 'hsl(' + (Math.random() * (max - min) + min) + ', 100%, 50%)';
};


window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Поздравляем, Вы победили !!!', CLOUD_X + COLUMN_GAP + BAR_WIDTH, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + COLUMN_GAP + BAR_WIDTH, CLOUD_Y + 2 * GAP + 2 * FONT_GAP);

  var maxTime = getMaxElement(times);
  var players = ['Вы', 'Алекс', 'Диана', 'Кекс'];

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP + i * (BAR_WIDTH + COLUMN_GAP), CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP + i * (BAR_WIDTH + COLUMN_GAP), CLOUD_HEIGHT - 3 * GAP + (-barHeight * times[i]) / maxTime);
    if (i > 0) {
      ctx.fillStyle = getRandomColor(200, 260);
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    };
    ctx.fillRect(CLOUD_X + COLUMN_GAP + i * (BAR_WIDTH + COLUMN_GAP), CLOUD_HEIGHT - GAP - FONT_GAP, BAR_WIDTH, (-barHeight * times[i]) / maxTime);
    }
};
