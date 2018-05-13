function skaterGraphData(data) {
  let seasonalStats = {
    assists: {},
    games: {},
    goals: {},
    points: {},
    plusMinus: {},
    pim: {}
  };
  function safeAssign(stat, season) {
    seasonalStats[stat][season]
      ? (seasonalStats[stat][season.season] += season.stat[stat])
      : (seasonalStats[stat][season.season] = season.stat[stat]);
  }
  for (let season of data) {
    safeAssign("assists", season);
    safeAssign("games", season);
    safeAssign("goals", season);
    safeAssign("pim", season);
    safeAssign("plusMinus", season);
    safeAssign("points", season);
  }
  return {
    labels: Object.keys(seasonalStats.games),
    datasets: Object.keys(seasonalStats).map(k => {
      return {
        label: k,
        data: Object.values(seasonalStats[k])
      };
    })
  };
}

function sumIntegers(stat, stats) {
  return stats.map(s => s[stat]).reduce((a, b) => a + b, 0);
}

function sumTimeOnIce(stat, stats) {
  let minutes = stats
    .map(s => parseInt(s[stat].split(":")[0], 10))
    .reduce((a, b) => a + b, 0);
  let seconds = stats
    .map(s => parseInt(s[stat].split(":")[1], 10))
    .reduce((a, b) => a + b, 0);
  minutes += Math.floor(seconds / 60);
  return `${minutes}:${seconds % 60}`;
}

module.exports = { skaterGraphData, sumIntegers, sumTimeOnIce };
