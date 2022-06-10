import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {budgetRouter} from "./routes/index.js";
import {errorHandler} from './middlewares/index.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cors());
app.use(morgan('tiny'));

app.use('/api/', budgetRouter);


// health check request
app.get('/health', (req, res) => {
    res.json({ok: true});
});

app.use(errorHandler);

export default app;
