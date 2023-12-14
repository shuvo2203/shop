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


app.use('/api/v1', user);


app.listen(PORT,()=>{
    console.log(`server running on port : ${PORT}`);
});