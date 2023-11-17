import { MongoHelper } from "../infra/db/mongo/mongo-helper";
import { app } from "./config/app";
import env from "./config/env";

MongoHelper.connect(env.mongoUrl)
  .then(async (_) => {
    app.listen(env.port, () =>
      console.log("Server running at http://localhost:3333")
    );
  })
  .catch((e) => console.error(e));
