const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const countries = require("./controller")
const app = express();

app.use(cors())
app.use(bodyParser.json());

/*
    paginated api
*/
app.get("/countries",countries.getCountries)

/*
    inserts one unique record per request
*/
app.post("/countries",countries.insertCountries)


app.listen(3000,()=>{
    console.log("Application listening on port 3000")
});