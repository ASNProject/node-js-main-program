const InputphDataController = require('./controllers/InputphDataController');
const InputtdsDataController = require('./controllers/InputtdsDataController');
const InputsuhuudaraDataController = require('./controllers/InputsuhuudaraDataController');
const InputturbidityDataController = require('./controllers/InputturbidityDataController');


// Define url API in Here
const _routes = [
  ['/alat-ph-data', InputphDataController], // untuk alat 1 adc (sementara dipakai untuk ambil dataset)
  ['/alat-tds-data', InputtdsDataController], // untuk alat 1 volt (sementara dipakai untuk ambil dataset)
  ['/alat-suhuudara-data', InputsuhuudaraDataController], 
  ['/alat-turbidity-data', InputturbidityDataController],
];

// https://localhost:5001/tes

const routes = (app) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(`${url}`, controller);
  });
};

module.exports = routes;

// kalo class exports nya harus pake new
