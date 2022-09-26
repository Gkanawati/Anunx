import axios from 'axios';
import { Formik } from 'formik';
import {
  Container,
  Box,
  Typography,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Button,
  CircularProgress
} from '@mui/material';

import TemplateDefault from '../../../src/templates/Default';
import { initialValues, validationSchema } from './formValues';
import useToast from '../../../src/contexts/Toast';
import { useRouter } from 'next/router';

const Signup = () => {

  const router = useRouter()
  const { setToast } = useToast()

  const handleFormSubmit = async values => {
    const response = await axios.post('/api/users', values)

    if (response.data.success) {
      setToast({
        open: true,
        severity: 'success',
        text: 'Cadastro realizado com sucesso!'
      })

      router.push('/auth/signin')
    }
  }


  return (
    <TemplateDefault>
      <Container maxWidth='md' >
        <Container component='main' sx={{ marginBottom: 3 }}>
          <Typography component='h1' variant='h2' align='center' color='textPrimary'>
            Crie sua conta
          </Typography>
          <Typography component='h5' variant='h5' align='center' color='textPrimary'>
            E anuncie para todo o Brasil
          </Typography>
        </Container>

        <Container>
          <Box
            sx={{ padding: 3, }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                handleFormSubmit(values)
              }}
            >
              {
                ({
                  touched,
                  values,
                  errors,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <FormControl error={errors.name && touched.name} fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel >Nome</InputLabel>
                        <OutlinedInput
                          name='name'
                          onChange={handleChange}
                          value={values.name}
                          label="Nome"
                        />
                        <FormHelperText>
                          {errors.name && touched.name && errors.name}
                        </FormHelperText>
                      </FormControl>

                      <FormControl error={errors.email && touched.email} fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel>E-mail</InputLabel>
                        <OutlinedInput
                          name='email'
                          type='email'
                          onChange={handleChange}
                          value={values.email}
                          label="E-mail"
                        />
                        <FormHelperText>
                          {errors.email && touched.email && errors.email}
                        </FormHelperText>
                      </FormControl>

                      <FormControl error={errors.password && touched.password} fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel>Senha</InputLabel>
                        <OutlinedInput
                          name='password'
                          type='password'
                          onChange={handleChange}
                          value={values.password}
                          label="Senha"
                        />
                        <FormHelperText>
                          {errors.password && touched.password && errors.password}
                        </FormHelperText>
                      </FormControl>

                      <FormControl error={errors.passwordConf && touched.passwordConf} fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel>Confirme a senha</InputLabel>
                        <OutlinedInput
                          name='passwordConf'
                          type='password'
                          onChange={handleChange}
                          value={values.passwordConf}
                          label="Confirme a senha"
                        />
                        <FormHelperText>
                          {errors.passwordConf && touched.passwordConf && errors.passwordConf}
                        </FormHelperText>
                      </FormControl>
                      {isSubmitting
                        ? <CircularProgress sx={{
                          display: 'block',
                          marginY: 1,
                          marginX: 'auto',
                          maxWidth: '40px'
                        }} />
                        : (
                          <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            size='large'
                          >
                            Cadastrar
                          </Button>
                        )
                      }
                    </form>
                  )
                }
              }
            </Formik>
          </Box>
        </Container>
      </Container>
    </TemplateDefault>
  )
}

export default Signup