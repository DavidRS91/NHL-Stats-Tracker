const mongoose = require("mongoose");
const fetch = require("isomorphic-fetch");

const requests = require("../lib/requests");
const PlayerModel = require("./schemas/Player");
const SeasonalStatsModel = require("./schemas/SeasonalStats");
const TeamModel = require("./schemas/Team");

const { getTeams, getAllPlayers, getPlayerStats } = requests;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/nhlStatsTracker");

async function seedTeams() {
  try {
    let teams = await getTeams();
    TeamModel.insertMany(teams);
  } catch (err) {
    console.log(err);
  }
  console.log("Teams loaded!");
}

async function seedPlayersAndStats() {
  let playerSummaries = await getAllPlayers();
  let playerDetails = [];
  let progress = 0;
  for (let player of playerSummaries) {
    let playerDetail = await getPlayerStats(player.person.link);
    let playerStats = playerDetail.stats[0].splits;
    delete playerDetail.stats;
    playerDetails.push(playerDetail);
    for (let season of playerStats) {
      season.playerId = player.person.id;
      await new SeasonalStatsModel(season).save();
      progress += 1;
      if (progress % 10 === 0) {
        console.log(progress);
      }
    }
  }
  PlayerModel.insertMany(playerDetails);
  console.log("Players Loaded!");
}

seedTeams();
seedPlayersAndStats();
