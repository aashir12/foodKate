const mongoose = require('mongoose');
require('dotenv').config(); 
const URI = process.env.URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    console.log('Connected to MongoDB');

    
    // Access the MongoDB native driver's db object
    const db0 =await mongoose.connection.db.collection('foodData').find({}).toArray();
    const db1 =await mongoose.connection.db.collection('foodCat').find({}).toArray();
    const db2 =await mongoose.connection.db.collection('datas').find({}).toArray();
    
    // Access the foodData collection and retrieve all documents
   global.foodData=db0;
   global.foodCat=db1;
   global.datas=db2;



})
.catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
});



  const schema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    address:String
  })


  module.exports=mongoose.model('user',schema);