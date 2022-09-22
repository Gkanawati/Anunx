import axios from 'axios';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';
import {
  Container,
  Box,
  Typography,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Button,
  CircularProgress,
  Alert
} from '@mui/material';

import TemplateDefault from '../../../src/templates/Default';
import { initialValues, validationSchema } from './formValues';
import useToast from '../../../src/contexts/Toast';
import Image from 'next/image';

const Signin = ({ APP_URL }) => {

  const router = useRouter()
  const { setToast } = useToast()
  const [session] = useSession()

  console.log(session, router.query.i);

  const handleFormSubmit = async values => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: `${APP_URL}/user/dashboard`
    })
  }

  const handleGoogleLogin = () => {
    signIn('google', {
      callbackUrl: `${APP_URL}/user/dashboard`
    })
  }

  return (
    <TemplateDefault>
      <Container maxWidth='sm' >
        <Container component='main' sx={{ marginBottom: 3 }}>
          <Typography component='h1' variant='h2' align='center' color='textPrimary'>
            Entre na sua conta
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
                      {
                        router.query.i === '1' && (
                          <Alert
                            severity='error'
                            sx={{ marginBottom: 2 }}
                          >
                            Usuário ou senha inválidos
                          </Alert>
                        )
                      }
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
                      {isSubmitting
                        ? <CircularProgress size='sm' sx={{
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
                            Entrar
                          </Button>
                        )
                      }

                      <Box sx={styles.orSeparator}>
                        <span>ou</span>
                      </Box>

                      <Box sx={{ marginTop: 2 }}>
                        <Button
                          variant='contained'
                          color='secondary'
                          fullWidth
                          size='large'
                          startIcon={
                            <Image
                              src="/images/Google_logo.webp"
                              width={25}
                              height={25}
                              alt="Login com Google"
                            />
                          }
                          onClick={handleGoogleLogin}>
                          Entrar com Google
                        </Button>
                      </Box>
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

const styles = {
  orSeparator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    width: '100%',
    height: '1px',
    marginY: 4,

    '& span': {
      backgroundColor: 'white',
      padding: '0 25px',
    }
  }
}

export async function getServerSideProps() {
  const APP_URL = process.env.APP_URL
  return { props: { APP_URL } }
}

export default Signin