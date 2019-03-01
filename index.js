// const express = require('express');
// const morgan = require('morgan');
import express from 'express';
import morgan from 'morgan';

// import morgan from 'morgan';
const app = express();

const PORT = 4000;

const handleListening = () =>  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send('Hi!!!! from home');

const handleProfile = (req, res) => res.send('handleProfile');

app.use(morgan('combined'));

app.get('/', handleHome);

app.get('/profile', handleProfile);

app.listen(PORT, handleListening);
