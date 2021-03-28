import { MileModel } from "../../models/Mile"
import { UserModel } from "../../models/User"
import { QuizQuestionModel } from "../../models/QuizQuestion"

interface Answer {
  question: string 
  answer: string
}

interface RetrieveQuizMilesParams {
  responses: Answer[]
  code: string
  userId: string 
}

async function retrieveQuizMilesUseCase(params: RetrieveQuizMilesParams) {
  const { code, userId, responses } = params

  try {
    const quizQuestionsIds = responses.map(resp => resp.question)
    const quizQuestions = await QuizQuestionModel.find({
      _id: { $in: quizQuestionsIds }
    })
    console.log(quizQuestions)
    const correctAnswers = quizQuestions.filter((question, index) => {
      console.log(question.correctOption, responses[index].answer)
      return question.correctOption === responses[index].answer
    })

    const mile = await MileModel.create({
      amount: correctAnswers.length * 50,
      code,
    })
    const user = await UserModel.findByIdAndUpdate(userId, {
      $push: { miles: mile._id }
    }, { new: true })

    return { mile, user }
  } catch (error) {
    throw error
  }
}

export default retrieveQuizMilesUseCase