// var http = require("http");
// var httpProxy = require("http-proxy");

// PhusionPassenger.configure({ autoInstall: false });

// const proxyServer = httpProxy.createServer(1337, "localhost");
// proxyServer.listen("passenger");

// const proxy = httpProxy.createProxy();

// http
//   .createServer(function (req, res) {
//     proxy.web(req, res, {
//       target: "http://0.0.0.0:1337",
//     });
//   })
//   .listen("passenger");

const strapi = require("@strapi/strapi");
strapi.createStrapi().start();
