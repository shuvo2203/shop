const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
require('./db/db');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const user = require('./routes/userRoute');
const product = require('./routes/productRoute');


app.use('/api/v1', user);
app.use('/api/v1', product);


app.listen(PORT,()=>{
    console.log(`server running on port : ${PORT}`);
});