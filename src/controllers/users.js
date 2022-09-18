import UsersModel from '../models/users'
import dbConnect from '../utils/dbConnect'
import { crypto } from '../utils/password'

const get = async (req, res) => {
  await dbConnect()
  const users = await UsersModel.find()
  res.status(200).json({ success: true, users })
}

const post = async (req, res) => {
  // pegar os dados que vem no req
  const {
    name,
    email,
    password
  } = req.body

  // conectar no banco 
  await dbConnect()

  // criptografar senha
  const passwordCrypto = await crypto(password)

  const user = new UsersModel({
    name,
    email,
    password: passwordCrypto,
  })

  // salvar os dados
  user.save()

  // responder sucesso
  res.status(201).json({ success: true })
}

export {
  get,
  post
}