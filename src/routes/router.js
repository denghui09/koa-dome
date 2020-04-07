const koaCombineRouters = require('koa-combine-routers');

const aRoutes = require('./aRouter');
const bRoutes = require('./bRouter');

module.exports = koaCombineRouters(aRoutes, bRoutes);
