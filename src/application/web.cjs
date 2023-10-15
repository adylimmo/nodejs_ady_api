import express from "express";
import {publicRouter} from "../route/public-api.cjs";
import {errorMiddleware} from "../middleware/error-middleware.cjs";
import {userRouter} from "../route/api.cjs";

export const web = express();
web.use(express.json());

web.use(publicRouter);
web.use(userRouter);

web.use(errorMiddleware);
