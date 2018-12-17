const path = require('path');
const config = require('./config/variables');
const preRequest = require('./server/helpers/pre-request');
const routes = [
  {
    method: 'GET',
    path: `${config.publicPaths.assets}{path*}`,
    handler: {
      directory: {
        path: config.paths.assets,
        index: false,
        listing: false,
        showHidden: false
      }
    }
  },
  {
    method: 'GET',
    path: '/',
    config: {
      handler(request, h) {
        return h.view('app', {
          view: 'index',
          props: {
            user: request.state.user
          }
        });
      }
    }
  },
  {
    method: 'GET',
    path: '/signup',
    handler(request, h) {
      // const user = request.state.user;
      const user = {
        name: 'Malissa'
      };
      if (user) {
        return h.view('app', {
          view: 'index',
          props: {
            user
          }
        });
      }
      return h.redirect('/account/signin');
    }
  },
  {
    method: 'GET',
    path: '/account/signin',
    config: {
      handler(request, h) {
        const user = request.state.user;
        if (user) {
          return h.redirect('/account/signout');
        }
        return h.view('signin', {
          view: 'signin',
          props: {
            user
          }
        });
      }
    }
  },
  {
    method: 'GET',
    path: '/account/authorize',
    config: {
      handler(request, h) {
        return h.response('signed in').state('user', {
          name: 'Malissa'
        });
      }
    }
  },
  {
    method: 'GET',
    path: '/redirect',
    config: {
      handler(request, h) {
        const rte = request.state.redirPath || '/';
        h.unstate('redirPath');
        return h.redirect(rte);
      }
    }
  },
  {
    method: 'GET',
    path: '/account/signout',
    config: {
      handler(request, h) {
        return h.response('signed out').unstate('user').unstate('redirPath');
      }
    }
  }
];

// Serve white-listed files from the webRoot directory
config.server.publicFiles.forEach((filename) => {
  routes.push({
    method: 'GET',
    path: `/${filename}`,
    handler: {
      file: {
        path: path.join(config.paths.webRoot, filename)
      }
    }
  });
});

// DEV SETUP
if (process.env.NODE_ENV === 'development') {
// Proxy webpack assets requests to webpack-dev-server
// Note: in development webpack bundles are served from memory, not filesystem
  routes.push({
    method: 'GET',
    path: `${config.publicPaths.build}{path*}`, // this includes HMR patches, not just webpack bundle files
    handler: {
      proxy: {
        host: config.server.host,
        port: config.webpack.port,
        passThrough: true
      }
    }
  });

// Note: We also make requests to Webpack Dev Server EventSource endpoint (typically /__webpack_hmr).
// We don't need to proxy these requests because we configured webpack-hot-middleware
// to request them directly from a webpack dev server URL in webpack-config.js
}

module.exports = routes;
