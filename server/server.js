const express = require('express');
const http = require('http');
const { mongoConnect } = require('./services/mongo');
const usersRouter = require('./routes/users/users.router');
const pharmaciesRouter = require('./routes/pharmacies/pharmacies.router');
app = express();
const PORT = process.env.PORT || 8000;

app.use('/users', usersRouter);
app.usr('/pharmacies', pharmaciesRouter);

const server = http.createServer(app);
async function startServer() {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log(`Listening on Port${PORT}`);
  });
}

startServer();
