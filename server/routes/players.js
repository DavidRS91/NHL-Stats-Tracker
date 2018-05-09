const Router = require("koa-router");
const PlayerModel = require("../db/schemas/Player");
const SeasonalStatsModel = require("../db/schemas/SeasonalStats");

const router = new Router({ prefix: "/players" });

router.get("/", async function(ctx) {
  const players = await PlayerModel.find();
  ctx.body = { players: players };
});

router.get("/:id", async function(ctx) {
  const player = await PlayerModel.findOne({ id: ctx.params.id });
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
  ctx.body = { player, stats, pointsBySeason };
});

module.exports = router;
