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

module.exports = { skaterGraphData };
