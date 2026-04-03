const mongoose =require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('database ok');
    } catch(err){
        console.log('database failed'+err);
    }
}

module.exports = connectDB;