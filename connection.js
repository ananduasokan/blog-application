var mongoose=require('mongoose')

const connection=()=>{
    try {
        mongoose.connect('mongodb+srv://anandu22695:Fendocaster123@cluster0.scrfn.mongodb.net/dbgreenday?retryWrites=true&w=majority',{UseNewUrlParser:true,UseUnifiedTopology:true})
        console.log('database connected')
    } catch (err) {
        console.log('error to connect database')
    }
}

module.exports=connection