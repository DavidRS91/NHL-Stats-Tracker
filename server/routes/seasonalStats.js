const Router = require("koa-router");
const SeasonalStatsModel = require("../db/schemas/SeasonalStats");

const router = new Router({ prefix: "/stats" });

router.get("/", async function(ctx) {
  const stats = await SeasonalStatsModel.find();
  ctx.body = stats;
});

router.get("/:id", async function(ctx) {
  const stats = await SeasonalStatsModel.find({
    playerId: ctx.params.id,
    "league.name": "National Hockey League"
  });
  let pointsBySeason = {};
  stats.map(s => {
    s.season = `${s.season.substring(0, 4)}-${s.season.substring(6, 8)}`;
    s.points = s.stat.assists + s.stat.goals;
    pointsBySeason[s.season]
      ? (pointsBySeason[s.season] += s.points)
      : (pointsBySeason[s.season] = s.points);
  });
  ctx.body = { stats, pointsBySeason };
});

module.exports = router;
