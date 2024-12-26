
const { Router } = require("express");
const { Signup, Login, deleteuser, GetUser } = require("../controller/user_controller");
const userRouter = Router();

userRouter.get("/", GetUser);
userRouter.post("/signup", Signup);
userRouter.post("/login", Login);
userRouter.delete("/delete/:id",  deleteuser)


module.exports = { userRouter };