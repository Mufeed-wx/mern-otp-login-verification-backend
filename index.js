const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')
const testRoute = require('./routes/testRoute')
const app = express();

app.use(cors({
    origin:"*"
}))


app.use(bodyParser.json())
app.use('/',testRoute)

const PORT = 8000
app.listen(PORT, () => {
    console.log("port running on 8000");
})