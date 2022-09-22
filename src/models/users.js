import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O campo "nome" eh obrigatorio.']
  },
  email: {
    type: String,
    required: [true, 'O campo "email" eh obrigatorio.']
  },
  password: {
    type: String,
    required: [true, 'O campo "senha" eh obrigatorio.']
  },
})

export default mongoose.models.users || mongoose.model('users', schema)