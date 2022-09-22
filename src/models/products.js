import mongoose from "mongoose";

const filesSchema = new mongoose.Schema({
  name: String,
  path: String,
})

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'O campo "titulo" eh obrigatorio'],
  },
  category: {
    type: String,
    required: [true, 'O campo "categoria" eh obrigatorio'],
  },
  description: {
    type: String,
    required: [true, 'O campo "descricao" eh obrigatorio'],
  },
  price: {
    type: Number,
    required: [true, 'O campo "preco" eh obrigatorio'],
  },
  user: {
    id: String,
    name: String,
    email: String,
    phone: String,
    image: String,
  },
  files: {
    type: [filesSchema],
    default: undefined,
  },
  publishDate: {
    type: String,
  },
  locationCity: {
    type: String,
    required: [true, 'O campo "cidade" eh obrigatorio'],
  },
  locationState: {
    type: String,
    required: [true, 'O campo "estado" eh obrigatorio'],
  },
})

export default mongoose.models.products || mongoose.model('products', schema)