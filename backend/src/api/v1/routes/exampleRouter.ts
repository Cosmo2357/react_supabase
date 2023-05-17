import express, { Application, Request, Response, NextFunction } from 'express';
import AllControllers from '../controllers';
const { ExampleController } = AllControllers;
import ExampleValidator  from '../validations/ExampleValidation';

const router = express.Router();

router
  .get('/', ExampleController.getAll)

  .get('/:id', ExampleController.getOne)

  .post('/', ExampleValidator.post, ExampleController.post)

  .put('/:id', ExampleValidator.post,  ExampleController.put)
  
  .delete('/:id', ExampleController.delete);

export default router;
