const express = require('express');
const cast = express.Router();
const pool = require('../db/mysql');

cast.get('/actor/:ActorID',(req,res)=>{
    pool.query(`SELECT * FROM cast WHERE ActorID=${req.params.ActorID}`, (err, result, fields) => {
        if (err) throw err;
        res.status(200).json(result);
      });      
});

cast.get('/movie/:MovieID',(req,res)=>{
    pool.query(`SELECT * FROM cast WHERE ActorID=${req.params.MovieID}`, (err, result, fields) => {
        if (err) throw err;
        res.status(200).json(result);
      });      
});

cast.delete('/movie/:MovieID/actor/:ActorID/role/:role',(req,res)=>{
  pool.query(`DELETE FROM cast WHERE (role='${req.params.role}' AND MovieID=${req.params.MovieID} AND ActorID=${req.params.ActorID})`,
   (err, result, fields) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

cast.post('/add',(req,res)=>{
    const {ActorID,MovieID,role} = req.body;
    const cast = {
        ActorID,
        MovieID,
        role
    };
    const sql = 'INSERT INTO cast SET ?';
    pool.query(sql,cast,(err, result, fields) => {
      if (err) throw err;
      res.status(201).json(result);
    });
});

cast.put('/movie/:MovieID/actor/:ActorID/role/:role',(req,res)=>{
    const {ActorID,MovieID,role} = req.body;
    const cast = {
        ActorID,
        MovieID,
        role
    };
    const sql = `UPDATE cast SET ? WHERE (role='${req.params.role}' AND MovieID=${req.params.MovieID} AND ActorID=${req.params.ActorID})`;
    pool.query(sql,cast,(err, result, fields) => {
      if (err) throw err;
      res.status(201).json(result);
    });
  });


module.exports = cast;