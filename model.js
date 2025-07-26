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
      });
    }

    return frogs;
  };

  const getFrogs = function () {
    return frogs;
  };

  const getLevel = function () {
    return level;
  };

  const nextLevel = function () {
    level++;
    return level;
  };

  const resetGame = function () {
    level = 1;
    frogs = [];
  };

  return {
    generateFrogs,
    getFrogs,
    getLevel,
    nextLevel,
    resetGame,
  };
};
