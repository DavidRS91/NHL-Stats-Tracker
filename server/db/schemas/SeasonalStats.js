const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SeasonalStats = new Schema({
  playerId: Number,
  season: String,
  stat: {
    timeOnIce: String,
    assists: Number,
    goals: Number,
    games: Number,
    faceOffPct: Number,
    points: Number
  },
  team: {
    id: Number,
    name: String,
    link: String
  },
  league: {
    name: String,
    link: String
  },
  sequenceNumber: Number
});

const SeasonalStatsModel = mongoose.model("SeasonalStats", SeasonalStats);

module.exports = SeasonalStatsModel;
