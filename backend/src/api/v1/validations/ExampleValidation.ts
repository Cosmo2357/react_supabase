import { Request, Response, NextFunction } from 'express';
import { body, validationResult ,check} from 'express-validator';

export default {

post:  (req: Request, res: Response, next: NextFunction) => {
  
  //body('name').isEmail(),
  body('name').isLength({ min: 5 }),

  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }}
  next();
}

}