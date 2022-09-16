import * as yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConf: '',
}

const validationSchema = yup.object().shape({
  name: yup.string().min(4).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  passwordConf: yup.string().required().oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais'),
})

export { initialValues, validationSchema }