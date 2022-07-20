var mongoose = require('mongoose')

const connectDB="mongodb+srv://Mehdi:12345@mongoose-checkpoint.gjgvnep.mongodb.net/?retryWrites=true&w=majority"

module.exports=()=>mongoose.connect(connectDB,{ useNewUrlParser: true, useUnifiedTopology: true  },err=>{
    if(err){console.log(err);return}
    console.log("Database is connected well")
})