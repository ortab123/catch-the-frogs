const Renderer = function () {
  const renderLayout = function () {
    const layout = $(`
      <div id="game-container">
        <div id="header">
          <h1>Catch The Frogs!</h1>
          <span id="timer">Time: 0</span>
        </div>

        <div id="game-area"></div>

        <div id="footer">
          <span id="remaining">Frogs Left: 0</span>
          <button id="start-btn">Start Game</button>
          <span id="level">Level: 1</span>
        </div>
      </div>
    `);

    $("#app").empty().append(layout);
  };

  const renderFrogs = function (frogs) {
    const $gameArea = $("#game-area");
    $gameArea.empty();
    for (let frog of frogs) {
      const frogSize = Math.floor(Math.random() * 30) + 30;
      const frogColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;

      const frogEl = $(`
        <div class="frog" data-id="${frog.id}"><i class="fas fa-frog"></i></div>
      `);

      frogEl.css({
        top: frog.top + "%",
        left: frog.left + "%",
        width: frogSize + "px",
        height: frogSize + "px",
        color: frogColor,
        fontSize: frogSize + "px",
      });
      $gameArea.append(frogEl);
    }
  };

  const renderMessage = function (text) {
    const $gameArea = $("#game-area");
    $gameArea.html(`<div class="game-message">${text}</div>`);
  };

  const updateGameInfo = function (time, level, remaining) {
    if (time !== null) $("#timer").text(`Time: ${time}`);
    $("#level").text(`Level: ${level}`);
    $("#remaining").text(`Frogs Left: ${remaining}`);
  };
  return {
    renderLayout,
    renderFrogs,
    renderMessage,
    updateGameInfo,
  };
};
