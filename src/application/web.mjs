import express from "express";
import {publicRouter} from "../route/public-api.mjs";
import {errorMiddleware} from "../middleware/error-middleware.mjs";
import {userRouter} from "../route/api.mjs";

export const web = express();
web.use(express.json());

web.use(publicRouter);
web.use(userRouter);

web.use(errorMiddleware);
