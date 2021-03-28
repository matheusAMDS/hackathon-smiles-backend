import { prop, getModelForClass } from "@typegoose/typegoose"
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses"

export class Post extends TimeStamps {
  @prop()
  title: string 

  @prop()
  thumbnail: string 

  @prop()
  content: string
}

export const PostModel = getModelForClass(Post)