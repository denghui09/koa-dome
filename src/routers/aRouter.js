const koaRouter = require('koa-router');
const a = require('../api/a');
console.log(a);

const router = new koaRouter();

router.get('/', (ctx) => {
  console.log(ctx);
  console.log(ctx.request);
  ctx.body = 'hello world';
});

router.get('/a', a);

module.exports = router;
