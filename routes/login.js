var express=require('express');
var router=express.Router();
const User = require('../models/user');

//get user/ check user sign in
router.get('/',function(req,res,next){

});
// Register new user
router.post('/signup',function(req,res,next){
  // signup logic goeshere.
  let newUser =  new User({
    employee_id: req.body.employee_id,
    first_Name: req.body.first_Name,
    last_Name: req.body.last_Name,
    email_id: req.body.email_id,
    password: req.body.password,
    role: req.body.role
  });
  newUser.save((err,user)=>{
    if(err){
        res.json({msg:'Failed to register new user'})
    }
    else{
        res.json({msg:'Successfully registered new user'})
    }
    });
});

router.get('/signin',function(req,res,next){
    //sign in logic goes here.
  res.send('signin api working...');

    });

module.exports=router;
