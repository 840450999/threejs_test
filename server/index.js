const Koa = require('Koa');
const server = require('Koa-static')
const Router = require('Koa-router');
const router = new Router();
const { exec } = require('child_process');
const { watch } = require('fs')
const path = require('path');
const qois = require("qois");
const app = new Koa();

let src = path.resolve(__dirname, '../src')
app.use(server(src))


let update = false;

watch(`${src}`, { deep: true }, qois((type, filename) => {
    if (type == "change") {
        update = true;
    }
}))

router.get("/startUpdate", (ctx) => {
    ctx.body = JSON.stringify({
        code:200,
        data: update? true:false
    })
    if(update) update=false;
})

app.use(router.routes());
app.listen(3000);

exec("start http://localhost:3000/index.html")