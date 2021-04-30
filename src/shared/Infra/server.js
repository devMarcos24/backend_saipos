import "dotenv/config";
import setupApp from "./setupApp";

import "../database";

const port = process.env.PORT || 3333;

setupApp().then((app) => {
  app.listen(port, () => {
    console.log("running on the port 3333");
  });
});
