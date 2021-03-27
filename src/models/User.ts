import { getModelForClass, prop } from "@typegoose/typegoose"

class User {
  @prop()
  name: string

  @prop()
  email: string

  @prop()
  password: string
}

export default getModelForClass(User)