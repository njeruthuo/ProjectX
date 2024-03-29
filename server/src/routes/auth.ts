import { Router } from 'express';

import { authorize, protect } from "../middleware/auth"
import {
  validate,
  loginValidation,
  signUpValidation,
  changePasswordValidation,
} from "../validation/index"
import { Role } from '../types';
import { changedPassword, login, signUp } from '../controller/auth';

const router = Router();


router.route('/signUp').post(signUpValidation(), validate, signUp);
router.route('/login').post(loginValidation(), validate, login);




router
  .route('/change-password')
  .patch(changePasswordValidation(), validate, changedPassword);

export { router as authRoutes };
