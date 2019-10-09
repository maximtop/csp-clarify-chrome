const Koa = require('koa');
const Router = require('koa-router');
const path = require('path');

const { getFile } = require('../helpers');

const app = new Koa();
const router = new Router();

const filesDirPath = path.resolve(__dirname, 'static');

router.get('/', async (ctx, next) => {
    ctx.set('Cache-Control', 'no-cache');
    ctx.body = await getFile(path.join(filesDirPath, 'index.html'));
});

router.get('/:filename', async (ctx, next) => {
    const { params: { filename }} = ctx;
    switch (filename) {
        case 'worker.js': {
            ctx.set('Content-Security-Policy', 'connect-src http://localhost:3000');
            break;
        }
        case 'favicon.ico': {
            ctx.body = '';
            return;
        }
        default:
            break;
    }
    ctx.body = await getFile(path.join(filesDirPath, filename));
});

app
    .use(router.routes())
    .use(router.allowedMethods());

const init = (port) => {
    console.log(`main server started on port: ${port}`);
    return app.listen(port);
};

module.exports = { start: init };
