const Router = require("koa-router");
const PlayerModel = require("../db/schemas/Player");

const router = new Router({ prefix: "/players" });

router.get("/", async function(ctx) {
  const players = await PlayerModel.find();
  ctx.body = { players: players };
});

module.exports = router;
