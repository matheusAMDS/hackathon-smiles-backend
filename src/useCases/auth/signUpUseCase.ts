import bcrypt from "bcryptjs"

import { UserModel, Role } from "../../models/User"

interface SignUpParams {
  name: string 
  email: string 
  password: string
  location: string
}

async function signUpUseCase(params: SignUpParams) {
  const { name, email, password, location } = params
  
  let user = await UserModel.findOne({ email })

  if (user) 
    throw new Error("E-mail already being used")

  user = await UserModel.create({
    name,
    email,
    location,
    role: Role.BASIC,
    password: await bcrypt.hash(password, 12)
  })

  return user
}

export default signUpUseCase