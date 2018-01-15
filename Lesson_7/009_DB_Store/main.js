const express = require('express');
const session = require('express-session');
const MSSQLStore = require('connect-mssql')(session);
const mssql = require('mssql');

const app = express();
const port = 8080;

const config = {
  user: 'SA',
  password: 'Ms24118#',
  server: 'localhost',
  database: "TestDB",
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

app.use(session({
  store: new MSSQLStore(config),
  resave: false,
  saveUninitialized: true,
  secret: 'supersecret'
}));