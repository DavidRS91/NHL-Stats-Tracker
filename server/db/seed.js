const mongoose = require("mongoose");
const fetch = require("isomorphic-fetch");

const requests = require("../lib/requests");
const PlayerModel = require("./schemas/Player");
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
    playerDetail.stats = playerDetail.stats[0].splits;
    playerDetails.push(playerDetail);
    progress += 1;
    if (progress % 25 === 0) {
      console.log(progress);
    }
  }
  PlayerModel.insertMany(playerDetails);
  console.log("Players and stats Loaded!");
}

seedTeams();
seedPlayersAndStats();
