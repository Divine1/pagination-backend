const {countriesModel} = require("./model/index");

const insertCountries = (req,res)=>{

    console.log("insertCountries req.body ",req.body)
    let newCountries = new countriesModel(req.body)

    newCountries.save().then((data)=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })
};

const getCountries = (req,res)=>{

    let page_ = Number(req.query.page);
    let page = page_ ? page_ : 0;

    let limit_ = Number(req.query.limit);
    let limit = limit_ ? limit_ : 0;
    
    console.log("page_ ",page_," page ",page);
    console.log("limit_ ",limit_," limit ",limit);

    let startIndex = (page * limit) - limit;
    
    countriesModel.find({},{_id :0,createdAt:0,updatedAt:0,__v:0}).sort({name : 1}).skip(startIndex).limit(limit).then(async (data)=>{
        
        let totalCurrentRecords = data.length;
        let totalRecords = await countriesModel.countDocuments();
        let totalPages=0;
        if(limit >0){
            totalPages = Math.ceil(totalRecords/limit);
        }
        console.log(" totalPages ",totalPages);

        res.status(200).send({
            content : data,
            page : page,
            limit : limit,
            totalRecords : totalRecords,
            totalPages : totalPages,
            totalCurrentRecords : totalCurrentRecords
        });
    }).catch(err=>{
        console.log("err ",err);
        res.status(500).send(err);
    })
};



module.exports={
    getCountries,
    insertCountries
}