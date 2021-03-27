import { prop, getModelForClass } from "@typegoose/typegoose"

export class Topic {
  @prop()
  name: string
}

export const TopicModel = getModelForClass(Topic)