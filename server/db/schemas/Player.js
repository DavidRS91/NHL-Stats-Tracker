const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Player = new Schema({
  person: {
    id: Number,
    fullName: String,
    link: String
  },
  jerseyNumber: String,
  position: {
    code: String,
    name: String,
    type: String,
    abbreviation: String
  }
});

const PlayerModel = mongoose.model("Player", Player);

module.exports = PlayerModel;
