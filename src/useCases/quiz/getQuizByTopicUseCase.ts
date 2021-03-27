import { QuizQuestionModel } from "../../models/QuizQuestion"

interface GetQuizByTopicParams {
  topic: string
  amount?: number
}

async function getQuizByTopiclUseCase(params: GetQuizByTopicParams) {
  const { topic, amount=5 } = params 

  const questions = await QuizQuestionModel.aggregate([
    { topic }, 
    { $sample: { size: amount }}
  ])

  return {
    total: amount,
    topic,
    questions
  }
}

export default getQuizByTopiclUseCase