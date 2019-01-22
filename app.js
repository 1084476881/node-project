const express =require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');

app.use(express.static(path.resolve(__dirname,'./public')));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('views',path.resolve(__dirname,'./views'));
app.set('view engine','ejs');
app.use('/',indexRouter);

app.listen(3000);