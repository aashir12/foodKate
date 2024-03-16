const express = require('express');
const router = express.Router();
const User = require('./users');
const dataOrder = require('./dataOrder');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt=require('jsonwebtoken')
const byCript=require('bcryptjs')
const jwtSecret='sakjldnkf904tjk4nerojdfg0ertnk';

router.use(bodyParser.json());
router.use(cors());

// Login Sign Up

router.post('/sign', async (req, res) => {
    const { name, email, password, address } = req.body;
    console.log(email)

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already registered' });
        }

        var salt = await byCript.genSalt(5);
        var hasha = await byCript.hash(password, salt);
        const newUser = await User.create({
            name: name,
            email: email,
            password: hasha,
            address: address
        });

        res.json(newUser);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
});


router.post('/login', async (req, res) => {
    const { name, email, password, address } = req.body;

    try {
        const user = await User.findOne({ email: email });
   
        if (!user) {
            return res.status(400).json({ message: 'User not registered' });
        }

        const isPasswordValid = await byCript.compare(password, user.password);
        if (!isPasswordValid) {
            return res.json({login:'Login Failed'});
        } 

        const data={
            user:{
                id:user._id
            }
        }
        const authToken=jwt.sign(data,jwtSecret);
        res.json({success:true,authToken})

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
});

// Displaying Data on the screen
router.get('/data',(req,res)=>{
    try{
    

      res.json({
        success:true,
        foodData,
        foodCat
      })
    }
    catch{

    }
})
router.post('/sendData',(req,res)=>{
 
        var {insideCart,email}=req.body;
        try{
       console.log(insideCart)
        for(var i=0;i<insideCart.length;i++){
            dataOrder.create(
                {
                    name:insideCart[i].name,
                    qty:insideCart[i].quantity,
                    total:insideCart[i].singleTotal,
                    action:"Delivered",
                    size:insideCart[i].size,
                    email:email,
                    img:insideCart[i].image

    
                }
            )
        }
     
        }
        catch{
     console.log('error')
        }
    
    
})
router.get("/sendData",(req,res)=>{

    res.json(
       {
        success:true,
        datas,
        
       }
    )
})


module.exports = router;
