import express from 'express';
import morgan from 'morgan';
import config from './config/config'
import db from './database/connection';
import errorMiddelware from './middlewares/errors';
import routes from './routes';

const app = express();
const port = config.port || 3000;
// connect to database
db()
app.use(morgan('common'));
app.use(express.json());
app.use('/api',routes)
 
const err =new errorMiddelware();
app.use(err.error);
app.listen(port,()=>{
     console.log(config)
     console.log(`server start listing on port ${port}`);
})
export default app;