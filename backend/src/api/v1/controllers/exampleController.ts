import { Request, Response, NextFunction, response } from 'express';
import basicModel from '../models/basicModel';

export default {
  getAll: (req: Request, res: Response, next: NextFunction): any => {
    console.log('getAll')

    const columns: string[] = ['name', 'email', 'password']

    basicModel.findAll('users', columns)
      .then((result: any) => {
        console.log('result', result)
        return res.status(200).send(result);

      }).catch((error: any) => {
        return res.status(500).send({
          success: false,
          message: 'Error',
          error: error
        })
      })
  },

  getOne: (req: Request, res: Response, next: NextFunction): any => {

    const columns: string[] = ['name', 'price']
    const id: number = parseInt(req.params.id)

    basicModel.find('products', id, columns).then((result: any) => {
      console.log('result', result)
      return res.status(200).send(result);

    }).catch((error: any) => {
      console.log('error', error)
      return res.status(500).send({
        success: false,
        message: 'Error',
        error: error
      })
    })
  },

  post: (req: Request, res: Response, next: NextFunction): any => {

    const columns: string[] = ['name', 'price']

    basicModel.add('products', req.body, columns)
      .then((result: any) => {
        console.log('result', result)
        return res.status(200).send(result);

      }).catch((error: any) => {
        console.log('error', error)
        return res.status(500).send({
          success: false,
          message: 'Error',
          error: error
        })
      })
  },

  put: (req: Request, res: Response, next: NextFunction): any => {

    const columns: string[] = ['id', 'price']
    const id: number = parseInt(req.params.id)

    basicModel.update('products', id, req.body, columns)
      .then((result: any) => {
        console.log('result', result)
        return res.status(200).send(result);

      }).catch((error: any) => {
        console.log('error', error)
        return res.status(500).send({
          success: false,
          message: 'Error',
          error: error
        })
      })
  },

  delete: (req: Request, res: Response, next: NextFunction): any => {

    const columns: string[] = ['name', 'price']
    const id: number = parseInt(req.params.id)

    basicModel.remove('products', id)
      .then((result: any) => {
        console.log('result', result)
        return res.status(200).send(result.toString());
      }
      ).catch((error: any) => {

        console.log('error', error)
        return res.status(500).send({
          success: false,
          message: 'Error',
          error: error
        })
      }
      )

  },

}