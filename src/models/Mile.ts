import { prop, getModelForClass, pre } from "@typegoose/typegoose"
import jwt from "jsonwebtoken"
import { QUIZ_CODE_KEY } from "../config"

@pre<Mile>("save", function() {
  if (!jwt.verify(this.code, QUIZ_CODE_KEY))
    throw new Error("Invalid code")
})
export class Mile {
  @prop()
  amount: number

  @prop()
  code: string
}

export const MileModel = getModelForClass(Mile)