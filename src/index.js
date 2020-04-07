const koa = require('koa');
const router = require('./routers/router');


const app = new koa();

app.use(router);

app.listen(3000);
