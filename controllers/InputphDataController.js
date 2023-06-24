const { Router } = require('express');
const m$todo = require('../modules/input_phData.modules');
const response = require('../helpers/response');

const SensorController = Router();

SensorController.get('/', async (req, res, next) => {
  const add = await m$todo.listSensor();

  response.sendResponse(res, add);
});

SensorController.post('/', async (req, res, next) => {
  const add = await m$todo.addSensor(req.body);

  response.sendResponse(res, add);
});
module.exports = SensorController;
