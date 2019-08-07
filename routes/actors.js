const express = require('express');
const actors = express.Router();
const pool = require('../db/mysql');

actors.get('/',(req,res)=>{
    pool.query(`SELECT * FROM actor`, (err, result, fields) => {
        if (err) throw err;
        res.status(200).json(result);
      });      
})

actors.get('/:id',(req,res)=>{
    pool.query(`SELECT * FROM actor WHERE ActorID=${req.params.id}`, (err, result, fields) => {
        if (err) throw err;
        res.status(200).json(result);
      });      
})

actors.delete('/:id',(req,res)=>{
  pool.query(`DELETE FROM actor WHERE ActorID=${req.params.id}`,
   (err, result, fields) => {
    if (err) throw err;
    res.status(200).json(result);
  });
})

actors.post('/add',(req,res)=>{
    const actor = [[
      req.body.firstName,
      req.body.secondName,
      req.body.gender,
      req.body.image
    ]];
    const sql = 'INSERT INTO actor (firstName,secondName,gender,image) VALUES ?';
    pool.query(sql,[actor],
     (err, result, fields) => {
      if (err) throw err;
      res.status(201).json(result);
    });
});

actors.put('/:id',(req,res)=>{
    const sql = `UPDATE actor SET firstName='${req.body.firstName}',secondName='${req.body.secondName}',gender='${req.body.gender}',image='${req.body.image}' WHERE ActorID=${req.params.id}`;
    pool.query(sql,
     (err, result, fields) => {
      if (err) throw err;
      res.status(201).json(result);
    });
  });


module.exports = actors;