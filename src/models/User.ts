import { getModelForClass, prop, Ref } from "@typegoose/typegoose"

import { Mile } from "./Mile"

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

  @prop({ required: false })
  avatar?: string

  @prop({ enum: Role })
  role: Role

  @prop({ autopopulate: true, ref: () => Mile })
  miles: Ref<Mile>[]
}

export const UserModel = getModelForClass(User)