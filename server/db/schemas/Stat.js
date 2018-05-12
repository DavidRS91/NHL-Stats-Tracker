const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Stat = new Schema({
  season: String,
  stat: {
    timeOnIce: String,
    ot: Number,
    shutouts: Number,
    ties: Number,
    wins: Number,
    losses: Number,
    saves: Number,
    powerPlaySaves: Number,
    shortHandedSaves: Number,
    evenSaves: Number,
    shortHandedShots: Number,
    evenShots: Number,
    powerPlayShots: Number,
    savePercentage: Number,
    goalAgainstAverage: Number,
    games: Number,
    gamesStarted: Number,
    shotsAgainst: Number,
    goalsAgainst: Number,
    powerPlaySavePercentage: Number,
    shortHandedSavePercentage: Number,
    evenStrengthSavePercentage: Number,
    timeOnIce: String,
    assists: Number,
    goals: Number,
    pim: Number,
    shots: Number,
    games: Number,
    hits: Number,
    powerPlayGoals: Number,
    powerPlayPoints: Number,
    powerPlayTimeOnIce: String,
    evenTimeOnIce: String,
    penaltyMinutes: String,
    faceOffPct: Number,
    shotPct: Number,
    gameWinningGoals: Number,
    overTimeGoals: Number,
    shortHandedGoals: Number,
    shortHandedPoints: Number,
    shortHandedTimeOnIce: String,
    blocked: Number,
    plusMinus: Number,
    points: Number,
    shifts: Number
  },
  team: {
    id: Number,
    name: String,
    link: String
  },
  league: {
    id: Number,
    name: String,
    link: String
  },
  sequenceNumber: Number
});

const StatModel = mongoose.model("Stat", Stat);

module.exports = { Stat, StatModel };
