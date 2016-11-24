const Game = require("../entity/game.js");

class GameService {
  constructor() {}

  async getAll() {
    return await Game.find().exec();
  }
}

module.exports = GameService;