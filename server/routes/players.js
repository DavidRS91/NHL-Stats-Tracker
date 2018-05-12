const Router = require("koa-router");
const PlayerModel = require("../db/schemas/Player");

const router = new Router({ prefix: "/players" });

router.get("/", async function(ctx) {
  const players = await PlayerModel.find();
  ctx.body = { players: players };
});

router.get("/:id", async function(ctx) {
  const player = await PlayerModel.findOne({ id: ctx.params.id });
  player.stats = player.stats.filter(
    season => season.league.name === "National Hockey League"
  );
  ctx.body = player;
});

module.exports = router;
