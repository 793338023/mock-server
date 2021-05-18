const Koa = require("koa");
const koaBody = require("koa-body");
const path = require("path");
const fs = require("fs");

const app = new Koa();

app.use(koaBody());

const sleep = () =>
  new Promise((res) =>
    setTimeout(() => res(), 10 * Math.floor(Math.random() * 500))
  );

app.use(async (ctx) => {
  try {
    const url = ctx.url.slice(1);
    const filename = url.split("/").join(".");
    const filePath = path.resolve(process.cwd(), `./data/${filename}.js`);

    // 模拟等待
    // await sleep();
    
    ctx.type = "application/json;charset=utf-8";
    if (fs.existsSync(filePath)) {
      const fn = require(filePath);
      const data = await fn(ctx);
      ctx.body = data;
    } else {
      ctx.body = {
        code: 404,
        msg: `${filePath}不存在`,
      };
    }
  } catch (err) {
    console.error(err);
    ctx.body = err;
  }
});

app.listen(8808);
