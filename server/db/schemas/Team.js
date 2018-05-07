const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Team = new Schema({
  id: Number,
  name: String,
  link: String,
  venue: {
    name: String,
    link: String,
    city: String,
    timeZone: {
      id: String,
      offset: Number,
      tz: String
    }
  },
  abbreviation: String,
  teamName: String,
  locationName: String,
  firstYearOfPlay: String,
  division: {
    id: Number,
    name: String,
    link: String
  },
  conference: {
    id: Number,
    name: String,
    link: String
  },
  franchise: {
    franchiseId: Number,
    teamName: String,
    link: String
  },
  shortName: String,
  officialSiteUrl: String,
  franchiseId: Number,
  active: Boolean
});

const TeamModel = mongoose.model("Team", Team);

module.exports = TeamModel;
