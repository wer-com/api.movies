const express = require('express');
const movies = express.Router();
const pool = require('../db/mysql');

movies.get('/',(req,res)=>{
    pool.query(`SELECT * FROM movie`, (err, result, fields) => {
        if (err) throw err;
        res.status(200).json(result);
      });      
});

movies.get('/:id',(req,res)=>{
    pool.query(`SELECT * FROM movie WHERE movieID=${req.params.id}`, (err, result, fields) => {
        if (err) throw err;
        res.status(200).json(result);
      });      
});

movies.delete('/:id',(req,res)=>{
  pool.query(`DELETE FROM movie WHERE movieID=${req.params.id}`,
   (err, result, fields) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

movies.post('/add',(req,res)=>{
    const {name,year,country,category,image,duration} = req.body;
    const movie = {
      name,
      year,
      country,
      category,
      image,
      duration
    };
    const sql = 'INSERT INTO movie SET ?';
    pool.query(sql,movie,(err, result, fields) => {
      if (err) throw err;
      res.status(201).json(result);
    });
});

movies.put('/:id',(req,res)=>{
    const {name,year,country,category,image,duration} = req.body;
    const movie = {
      name,
      year,
      country,
      category,
      image,
      duration
    };
    const sql = `UPDATE movie SET ? WHERE MovieID=${req.params.id}`;
    pool.query(sql,movie,(err, result, fields) => {
      if (err) throw err;
      res.status(201).json(result);
    });
  });


module.exports = movies;