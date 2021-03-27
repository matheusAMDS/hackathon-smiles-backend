import "dotenv/config"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import mongoose from "mongoose"

import routes from "./routes"
import { PORT, DB_URI } from "./config"

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => console.log("API running on port " + PORT))