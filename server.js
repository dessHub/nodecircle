import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import path from 'path';

const app = express();
const port = process.env.PORT || 5000;


app.use(morgan('dev'));
app.use(bodyParser());

app.set('view engine', ejs);
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log("Server Live On " + port);
});