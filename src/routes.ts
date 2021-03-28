import { Router } from "express"

import AuthController from "./controllers/AuthController"
import QuizController from "./controllers/QuizController"
import TopicController from "./controllers/TopicController"
import PostController from "./controllers/PostController"
import QuizResultController from "./controllers/QuizResultController"
import UserController from "./controllers/UserController"

import upload from "./lib/upload"
import authenticate from "./lib/auth/authenticate"
import checkRole from "./lib/auth/checkRole"
import { Role } from "./models/User"

const routes = Router()

routes.get("/", (req, res) => res.json({ message: "Welcome" }))

routes.post("/auth/signup", upload.single("avatar"), AuthController.signup)
routes.post("/auth/signin", AuthController.signin)

routes.get("/me", authenticate, UserController.show)

routes.get("/post", authenticate, PostController.index)
routes.get("/post/:id", authenticate, PostController.show)
routes.post(
  "/post", 
  authenticate, 
  checkRole(Role.CREATOR), 
  upload.single("thumbnail"), 
  PostController.create
  )

routes.get("/topic", TopicController.index)

routes.get("/quiz/:topic", authenticate, QuizController.show)
routes.post("/quiz", authenticate, checkRole(Role.ADMIN), QuizController.create)

routes.post("/quiz/result", authenticate, QuizResultController.create)

export default routes