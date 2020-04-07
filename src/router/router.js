const koaCombineRouters = require('koa-combine-routers');

const aRouter = require('./aRouter');
const bRouter = require('./bRouter');

module.exports = koaCombineRouters(aRouter, bRouter);
