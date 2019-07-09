import express  from 'express';

import DataController from '../controllers/DataController';

const router = express.Router();

router.route('/v1/products')
  .get(DataController.index)
//   .post(DataController.create)
  .put(DataController.update);