import dotenv from 'dotenv';
dotenv.config();
import express,  { Application } from 'express';
import AllRoutes from "./api/v1/routes";
import cors from 'cors';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

// CORS settings
const corsOptions = {
  origin: process.env.ALLOWED_ORIGIN || 'http://localhost:5173',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));


const {exampleRouter } = AllRoutes;
app.use('/api/v1/example', exampleRouter);


app.listen(port, () => {
  console.log(`Express server running  at http://localhost:${port}`);
});
                                                                          