import bcrypt from "bcryptjs"

import User from "../../models/User"

interface SignUpParams {
  name: string 
  email: string 
  password: string
}

async function signUpUseCase(params: SignUpParams) {
  const { name, email, password } = params
  
  let user = await User.findOne({ email })

  if (user) 
    throw new Error("E-mail already being used")

  user = await User.create({
    name,
    email,
    password: await bcrypt.hash(password, 12)
  })

  return user
}

export default signUpUseCase