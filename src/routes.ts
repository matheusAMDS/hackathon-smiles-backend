import { Router } from "express"

import AuthController from "./controllers/AuthController"
import QuizController from "./controllers/QuizController"
import TopicController from "./controllers/TopicController"

const routes = Router()

routes.get("/", (req, res) => res.json({ message: "Welcome" }))

routes.post("/auth/signup", AuthController.signup)
routes.post("/auth/signin", AuthController.signin)

routes.get("/topic", TopicController.index)

routes.get("/quiz/:topic", QuizController.show)
routes.post("/quiz", QuizController.create)

export default routes