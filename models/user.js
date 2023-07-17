let mongoose=require('mongoose')
let Schema=mongoose.Schema

let blogSchema= new Schema({

       noms:{
              type:String,
              require:true
       },
       status:{
              type:String,
              require:true
       },
       ages:{
              type:Number,
              require:true
       
       }

       
       
       },{timestamps:true})
let User=mongoose.model('User',blogSchema)
module.exports=User