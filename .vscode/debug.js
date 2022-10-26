(async function () {
  const HANDLER_PATH = "../src/functions/sum/index.js";
  const EVENT_PATH = "../src/functions/sum/event.js";

  const { handler } = require(HANDLER_PATH);
  const event = require(EVENT_PATH);

  const response = await handler(event);

  console.log(`Response: ${response}`);
})();
