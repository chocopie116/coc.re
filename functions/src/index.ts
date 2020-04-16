import * as functions from "firebase-functions";

const { Nuxt } = require("nuxt");
const app = require("express")();
const nuxt = new Nuxt({
  dev: false,
  buildDir: ".nuxt",
  build: {
    publicPath: "/",
  },
});

//@ts-ignore
function handler(req, res) {
  nuxt
    .renderRoute("/", { req })
    //@ts-ignore
    .then((result) => {
      res.send(result.html);
    })
    //@ts-ignore
    .catch((e) => {
      res.send(e);
    });
}

app.use(handler);
exports.app = functions.region("asia-northeast1").https.onRequest(app);
