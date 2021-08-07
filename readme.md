Libraries used
```
express
mongoose
body-parser
cors
```

Tools used
```
Nodejs
Mongodb
```

This project contains implementation for below 2 apis
```
GET
http://localhost:3000/countries?page=6&limit=0

POST
http://localhost:3000/countries
BODY (application/json)
{
    "name" : "india",
    "continent" : "asia"
}
```


Command to export a collection from mongodb
```
mongoexport -d demodb -c countries --jsonArray -o out.json
mongoexport -d database_name -c collection_name --jsonArray -o output_filename
```