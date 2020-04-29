import express from 'express';
import { PORT } from './config/constants';
import { userRouter } from './routes';

const app = express();
app.use(express.json());

app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on  port ${PORT}`);
});


//app start : npm run dev