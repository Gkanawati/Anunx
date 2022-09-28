import UsersModel from '../../models/users'
import dbConnect from '../../utils/dbConnect'
import { compare } from '../../utils/password'

export async function post(req, res) {
  const {
    email,
    password,
  } = req.body

  await dbConnect()

  const user = await UsersModel.findOne({ email })

  if (!user) {
    return res.status(401).json({ success: false, message: 'invalid' })
  }

  const passIsCorrect = await compare(password, user.password)
  console.log('passIsCorrect', passIsCorrect)
  if (passIsCorrect) {
    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  }

  return res.status(401).json({ success: false, message: 'invalid' })
}