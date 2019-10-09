const Koa = require('koa');
const Router = require('koa-router');
const path = require('path');
const { getFile } = require('../helpers');

const app = new Koa();
const router = new Router();

const filesDirPath = path.resolve(__dirname, 'static');

router.get('/:filename', async (ctx, next) => {
    const { params: { filename }} = ctx;
    ctx.body = await getFile(path.join(filesDirPath, filename));
});

app.use(async (ctx, next) => {
    ctx.set('Cache-Control', 'no-cache');
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
});

app
    .use(router.routes())
    .use(router.allowedMethods());

const init = (port) => {
    console.log(`restricted server started on port: ${port}`);
    return app.listen(port);
};

module.exports = { start: init };
