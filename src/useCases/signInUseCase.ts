import bcrypt from "bcryptjs"

import User from "../models/User"
import generateToken from "../lib/auth/generateToken"

interface SignInParams {
  email: string 
  password: string 
}

async function SignInUseCase(params: SignInParams) {
  const { email, password } = params 

  const user = await User.findOne({ email })

  if (!user)
    throw new Error("E-mail not registered")

  if (!await bcrypt.compare(password, user.password))
    throw new Error("Wrong password")

  const token = generateToken({ id: user._id })

  return {
    user,
    token
  }
}

export default SignInUseCase