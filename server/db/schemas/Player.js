const mongoose = require("mongoose");
const StatSchema = require("./Stat");
const { Stat } = StatSchema;

const Schema = mongoose.Schema;

const Player = new Schema({
  id: Number,
  fullName: String,
  link: String,
  firstName: String,
  lastName: String,
  primaryNumber: String,
  birthDate: String,
  currentAge: Number,
  birthCity: String,
  birthStateProvince: String,
  birthCountry: String,
  nationality: String,
  height: String,
  weight: Number,
  active: Boolean,
  alternateCaptain: Boolean,
  captain: Boolean,
  rookie: Boolean,
  shootsCatches: String,
  rosterStatus: String,
  currentTeam: {
    id: Number,
    name: String,
    link: String
  },
  primaryPosition: {
    code: String,
    name: String,
    abbreviation: String
  },
  stats: [Stat]
});

const PlayerModel = mongoose.model("Player", Player);

module.exports = PlayerModel;
