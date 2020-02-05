require('./build/check-versions')();

const config = require('./config');
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const csp = require('express-csp-header');
const bodyparser = require('body-parser');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = require('./build/webpack.dev.conf');
const DBService = require('./build/DBService');
const ResultRepo = require('./build/ResultRepo');
const Max = require('max-api');

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port;

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable;

const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
});

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' });
    cb()
  })
});

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

app.use(bodyparser.json());

DBService.init();

app.use(csp({
  policies: {
    'default-src': [csp.NONE],
    'img-src': [csp.SELF],
  }
}));

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

const uri = 'http://localhost:' + port;

devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
});

app.post('/', async (req, res) => {
  try {
    const result = req.body;

    const entry = await ResultRepo.saveResult(result);

    await Max.outlet(entry);

    res.json()
  } catch (err) {
    console.error(err.status);
    res.status(500).json({message: err.message});
  }

});

module.exports = app.listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});


