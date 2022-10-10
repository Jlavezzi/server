const express = require('express');
const router = express.Router();
const path = require ('path');
const data = {};
data.employees = require('../../data/employees.json');


router.route('/')
    .get( async(req,res)=>{
       await res.json(data.employees)
    })
     .post (async (req, res)=>{
        await req.json({
            fName,lName : req.body
        })
     })
     .put (async (req, res)=>{
        await req.json({
            fName,lName : req.body
        })
     })

     .delete ( async ( req, res)=>{
        await res.json({"id": req.body.id})
     })
     
//request parameters

router.route('/:id')
  .get(async(req, res)=>{
    await res.json ({"id": req.params.id})
  })

module.exports = router;