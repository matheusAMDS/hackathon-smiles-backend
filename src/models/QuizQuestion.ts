import { prop, getModelForClass, Ref } from "@typegoose/typegoose"
import { Topic } from "./Topic"

export class QuizQuestion {
  @prop()
  title: string 

  @prop({ ref: () => Topic })
  topic: Ref<Topic>

  @prop({ type: () => String })
  option: String[]

  @prop()
  correctOption: string 
}

export const QuizQuestionModel = getModelForClass(QuizQuestion)