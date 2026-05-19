import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "./app/routes/routes.js";
import notFound from "./app/middleware/notFound.js";
import globalError from "./app/middleware/globalError.js";
import { UserRoutes } from "./app/modules/user/users.route.js";

const app: Application = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  (Application Routes)
app.use("/api/v1", router);

//  (Testing Route)
app.get("/", (req: Request, res: Response) => {
  res.send("Backend Server Running");
});
// Not Found p
app.use(notFound);
// globar error

app.use(globalError);

export default app;
