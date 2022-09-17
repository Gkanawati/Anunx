import dbConnect from '../../src/utils/dbConnect';
import { crypto } from '../../src/utils/password';
import UsersModel from '../../src/models/users';

const users = async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      await dbConnect()
      res.status(200).json({ success: true })
      break
    case 'POST':
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
}

export default users