import { Router } from "express"

import AuthController from "./controllers/AuthController"
import QuizController from "./controllers/QuizController"
import TopicController from "./controllers/TopicController"
import PostController from "./controllers/PostController"

import multer from "./lib/upload"
import authenticate from "./lib/auth/authenticate"

const routes = Router()

routes.get("/", (req, res) => res.json({ message: "Welcome" }))

routes.post("/auth/signup", AuthController.signup)
routes.post("/auth/signin", AuthController.signin)

routes.get("/post", PostController.index)
routes.post("/post", multer.single("thumbnail"), PostController.create)

routes.get("/topic", TopicController.index)

routes.get("/quiz/:topic", QuizController.show)
routes.post("/quiz", QuizController.create)

export default routes