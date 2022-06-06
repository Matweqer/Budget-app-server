import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// import { ErrorHandler } from './middlewares';
// import {
//   authRouter,
//   statsRouter,
//   usersRouter,
// } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cors());
app.use(morgan('tiny'));

// app.use('/api/auth', authRouter);
// app.use('/api/users', usersRouter);
// app.use('/api/stats', statsRouter);

// health check request
app.get('/health', (req, res) => {
    res.json({ ok: true });
});

// app.use(ErrorHandler);

export default app;
