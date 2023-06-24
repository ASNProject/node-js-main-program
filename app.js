const express = require('express');
const routes = require('./routes');
const response = require('./helpers/response');
const app = express();

// This is the route the API will call
const port = process.env.PORT || 40027;

// Serialize dan Deserialize Input
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Welcome API
app.get('/', async (req, res, next) => {
  res.status(200).send({
    message: 'Halo halooooo',
  });
});

app.get('/about', (req, res) => {
  res.send('Ini adalah halaman About');
});

//Routes
routes(app);

// Error Handler
//app.use(response.errorHandler)

app.listen(port, () => {
  console.log(`Server is Listening on port http://localhost:${port}`);
});
