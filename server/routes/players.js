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
  ctx.body = { player, stats };
});

module.exports = router;
