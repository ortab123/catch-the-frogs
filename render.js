const Renderer = function () {
  const renderLayout = function () {
    const layout = $(`
            <div id=header"><h1>Catch The Frogs!</h1></div>
            <div id="game-info">
                <span id="timer">Time: 0</span>
                <span id="level">Level: 1</span>
                <span id="remainimg">Frogs Left: 0</span>
            </div>
            <div id="game-area"></div>
            <div id="controlers">
                <button id="start-btn">Start Game</button>
            </div>
                `);

    $("#app").empty().append(layout);
  };

  const renderFrogs = function (frogs) {
    const $gameArea = $("#game-area");
    $gameArea.empty();

    for (let frog of frogs) {
      const frogEl = $(`<div class="frog"></div>`);
      frogEl.css({ top: frog.top, left: frog.left });
      $gameArea.append(frogEl);
    }
  };

  const updateGameInfo = function (time, level, remaining) {
    $("#timer").text(`Time: ${time}`);
    $("#level").text(`Level: ${level}`);
    $("#remaining").text(`Frogs Left: ${remaining}`);
  };

  return {
    renderLayout,
    renderFrogs,
    updateGameInfo,
  };
};
