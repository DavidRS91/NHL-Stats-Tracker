const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Logger = require("koa-logger");
const Router = require("koa-router");
const mongoose = require("mongoose");
const cors = require("@koa/cors");
const playerRouter = require("./routes/players");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/nhlStatsTracker");

mongoose.connection.on("open", async function() {
  console.log("connected to MongoDB");
});

const app = new Koa();
const router = new Router();

app.use(cors());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err;
    ctx.app.emit("error", err, ctx);
  }
});

router.get("/", async ctx => {
  ctx.body = { message: "hello world!" };
});

app.use(BodyParser());
app.use(Logger());
app.use(playerRouter.routes());
app.use(playerRouter.allowedMethods());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001);
