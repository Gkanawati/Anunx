import * as yup from 'yup';

const validationSchema = yup.object().shape({
  title: yup.string().min(5).max(100).required(),
  category: yup.string().required(),
  description: yup.string().min(40).max(1000).required(),
  price: yup.number().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().required(),
  files: yup.array().min(1, 'Envie pelo menos 1 foto').required(),
})

const initialValues = {
  title: '',
  category: '',
  description: '',
  price: '',
  name: '',
  email: '',
  phone: '',
  files: [],
}

export {
  initialValues,
  validationSchema
}