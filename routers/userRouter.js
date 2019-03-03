import express from 'express';
import routes from "../routes"
import { userDetail, editProfile, changePassword } from '../controller/userController';

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.usersDetails, userDetail)
userRouter.get(routes.changePassword, changePassword)

export default userRouter;