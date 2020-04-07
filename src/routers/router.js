const koaCombineRouters = require('koa-combine-routers');

const aRouter = require('./aRouter');
const bRouter = require('./bRouter');

// console.log(aRouter);
// console.log(bRouter);.

module.exports = koaCombineRouters(aRouter, bRouter);
