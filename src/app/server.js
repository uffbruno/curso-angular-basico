// importar express
const express = require('express');

//iniciar express
const app = express();

const appName = "curso-angular-basico";

//local onde será feito o build no heroku
const outputPath = `${__dirname}`