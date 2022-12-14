import * as yup from 'yup';

const validationSchema = yup.object().shape({
  title: yup.string().min(5).max(100).required(),
  category: yup.string().required(),
  description: yup.string().min(20).max(1500).required(),
  price: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  locationCity: yup.string().required(),
  locationState: yup.string().required(),
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
  locationCity: '',
  locationState: '',
  publishDate: formatDate(new Date()),
  files: [],
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export {
  initialValues,
  validationSchema
}