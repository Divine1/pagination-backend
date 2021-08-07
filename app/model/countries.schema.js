/* eslint-disable camelcase */
'use strict';

const mongoose =  require('mongoose');
const {Schema} = mongoose;

var countriesSchema = new mongoose.Schema({
  name: {
    type: String,
    unique : true
  },
  continent: {
    type: String
  },
  
},
{ 
  timestamps: true 
});

module.exports=countriesSchema;