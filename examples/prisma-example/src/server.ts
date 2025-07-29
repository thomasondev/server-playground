import compression from "compression";
import bodyParser from "body-parser";
import app from "./app";
import { config } from "./config";
import errorhandler from "errorhandler";

app.use(compression());
app.use(bodyParser.json());
app.use(errorhandler());

// logging ?

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
