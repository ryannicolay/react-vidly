import Raven from "raven-js";

function init() {
  Raven.config("https://8f0980588bfe4ad08326106521dffa2b@sentry.io/1399756", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
};
