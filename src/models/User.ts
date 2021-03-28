import { getModelForClass, prop } from "@typegoose/typegoose"

export enum Role {
  ADMIN = "ADMIN",
  CREATOR = "CREATOR",
  BASIC = "BASIC"
}

export class User {
  @prop()
  name: string

  @prop()
  email: string

  @prop()
  password: string

  @prop()
  location: String

  @prop({ enum: Role })
  role: Role
}

export const UserModel = getModelForClass(User)