import { Router } from "express"

import AuthController from "./controllers/AuthController"

const routes = Router()

routes.get("/", (req, res) => {
  return res.json({ message: "Welcome" })
})

routes.post("/auth/signup", AuthController.signup)
routes.post("/auth/signin", AuthController.signin)

export default routes