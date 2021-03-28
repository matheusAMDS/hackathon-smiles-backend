import { DocumentType } from "@typegoose/typegoose"
import mongoose from "mongoose"

import { QuizQuestion, QuizQuestionModel } from "../../models/QuizQuestion"
import { Topic, TopicModel } from "../../models/Topic"

interface GetQuizByTopicParams {
  topic: string
  amount: number
}

async function getQuizByTopiclUseCase(params: GetQuizByTopicParams) {
  const { topic, amount } = params
  let topicName: Topic
  let questions: DocumentType<QuizQuestion>[]

  if (topic === "all") {
    questions = await QuizQuestionModel.aggregate([
      { $sample: { size: amount }}
    ])
  } else {
    topicName = await TopicModel.findById(topic)
    questions = await QuizQuestionModel.aggregate([
      { $match: { topic: mongoose.Types.ObjectId(topic) } }, 
      { $sample: { size: amount }}
    ])
  }

  return {
    total: questions.length,
    topic: topicName?.name || topic,
    questions
  }
}

export default getQuizByTopiclUseCase