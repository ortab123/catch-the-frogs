const Model = function () {
  let level = 1;
  let frogs = [];

  const generateFrogs = function (num) {
    frogs = [];

    for (let i = 0; i < num; i++) {
      frogs.push({
        id: "f" + i,
        top: Math.floor(Math.random() * 80) + 10,
        left: Math.floor(Math.random() * 80) + 10,
        color: getRandomColor(),
        size: Math.floor(Math.random() * 30) + 30,
      });
    }
    return frogs;
  };

  const regenerateFrogPositions = function () {
    frogs = frogs.map((frog) => ({
      ...frog,
      top: Math.floor(Math.random() * 80) + 10,
      left: Math.floor(Math.random() * 80) + 10,
    }));
    return frogs;
  };

  const getFrogs = () => frogs;
  const getLevel = () => level;
  const nextLevel = () => ++level;
  const resetGame = () => {
    level = 1;
    frogs = [];
  };

  const removeFrog = function (id) {
    frogs = frogs.filter((f) => f.id !== id);
  };

  const hasFrogsLeft = () => frogs.length > 0;
  const getTimeForCurrentLevel = () => 3 + level;

  function getRandomColor() {
    const colors = ["green", "purple", "orange", "blue", "red"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return {
    generateFrogs,
    regenerateFrogPositions,
    getFrogs,
    getLevel,
    nextLevel,
    resetGame,
    removeFrog,
    hasFrogsLeft,
    getTimeForCurrentLevel,
  };
};
