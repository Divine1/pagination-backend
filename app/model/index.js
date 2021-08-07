const {mongdb_conn} = require("../mongoconnect");

const countriesSchema = require("./countries.schema");

const countriesModel = mongdb_conn.model('countries',countriesSchema);



module.exports={
    countriesModel
};