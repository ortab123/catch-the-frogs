const renderer = Renderer();
const model = Model();
let gameInterval = null;

renderer.renderLayout();

$(document).on("click", "#start-btn", function () {
  model.resetGame();
  startLevel();
});

function startLevel() {
  clearInterval(gameInterval);
  const level = model.getLevel();
  const frogs = model.generateFrogs(level);
  renderer.renderFrogs(frogs);
  renderer.updateGameInfo(model.getTimeForCurrentLevel(), level, frogs.length);
  startTimer();
}

function startTimer() {
  let timeLeft = model.getTimeForCurrentLevel();
  gameInterval = setInterval(() => {
    timeLeft--;
    renderer.updateGameInfo(
      timeLeft,
      model.getLevel(),
      model.getFrogs().length
    );

    const $timer = $("#timer");
    $timer.removeClass("flash-yellow flash-red");

    const level = model.getLevel();

    if (timeLeft > level) {
      $timer.addClass("flash-yellow");
    } else {
      $timer.addClass("flash-red");
    }

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      if (model.hasFrogsLeft()) {
        $("#timer").removeClass("flash-yellow flash-red");
        renderer.renderFrogs([]);
        renderer.renderMessage("No more froggies for you 🐸");
        model.resetGame();
        renderer.updateGameInfo(0, 1, 0);
      }
    }
  }, 1000);
}

$(document).on("click", ".frog", function () {
  const frogId = $(this).data("id");
  model.removeFrog(frogId);

  const newFrogs = model.regenerateFrogPositions();
  renderer.renderFrogs(newFrogs);
  renderer.updateGameInfo(null, model.getLevel(), newFrogs.length);

  if (!model.hasFrogsLeft()) {
    model.nextLevel();
    startLevel();
  }
});
