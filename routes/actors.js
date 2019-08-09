const express = require('express');
const actors = express.Router();
const pool = require('../db/mysql');

actors.get('/',(req,res)=>{
    pool.query(`SELECT * FROM actor`, (err, result, fields) => {
        if (err) res.status(400).send(err);
        res.status(200).json(result);
      });      
});

actors.get('/:id',(req,res)=>{
    pool.query(`SELECT * FROM actor WHERE ActorID=${req.params.id}`, (err, result, fields) => {
        if (err) res.status(400).send(err);
        res.status(200).json(result);
      });      
});

actors.delete('/:id',(req,res)=>{
  pool.query(`DELETE FROM actor WHERE ActorID=${req.params.id}`,
   (err, result, fields) => {
    if (err) res.status(400).send(err);
    res.status(200).json(result);
  });
});

actors.post('/add',(req,res)=>{
    const {firstName,secondName,gender,image} = req.body;
    const actor = {
      firstName,
      secondName,
      gender,
      image
      };
    const sql = 'INSERT INTO actor SET ?';
    pool.query(sql,actor,(err, result, fields) => {
      if (err) res.status(400).send(err);
      res.status(201).json(result);
    });
});

actors.put('/:id',(req,res)=>{
  const {firstName,secondName,gender,image} = req.body;
    const actor = {
      firstName,
      secondName,
      gender,
      image
      };
    const sql = `UPDATE actor SET ? WHERE ActorID=${req.params.id}`;
    pool.query(sql,actor,(err, result, fields) => {
      if (err) res.status(400).send(err);
      res.status(201).json(result);
    });
});


module.exports = actors;