const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
const { mongoConnect } = require('./services/mongo');
const usersRouter = require('./routes/users/users.router');
const pharmaciesRouter = require('./routes/pharmacies/pharmacies.router');

const PORT = process.env.PORT || 8000;
const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());
app.use('/users', usersRouter);
app.use('/pharmacies', pharmaciesRouter);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
const server = http.createServer(app);
async function startServer() {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`);
  });
}

startServer();
