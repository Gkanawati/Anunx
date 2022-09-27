import { Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client';
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
  Alert,
  useTheme,
  useMediaQuery
} from '@mui/material';

import TemplateDefault from '../../../src/templates/Default';
import { initialValues, validationSchema } from '../../../src/utils/SignInFormValues';

const Signin = ({ APP_URL }) => {

  const router = useRouter()
  const theme = useTheme()

  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));

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
          <Typography component='h1' variant={smDown ? 'h4' : 'h2'} align='center' color='textPrimary'>
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
                      <Link href='./signup' passHref>
                        <a>
                          <Typography sx={{ marginTop: 1, textDecoration: 'underline', fontSize: 15 }}>
                            Crie sua conta com email
                          </Typography>
                        </a>
                      </Link>

                      <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '1px',
                        marginY: 4,
                        backgroundColor: '#ddd',

                        '& span': {
                          padding: '0 25px',
                          backgroundColor: theme.palette.background.default,
                        }
                      }}>
                        <span>ou</span>
                      </Box>

                      <Box sx={{ marginTop: 2 }}>
                        <Button
                          variant='contained'
                          sx={{ backgroundColor: theme.palette.background.paper, color: theme.palette.primary.textAltered }}
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

export async function getServerSideProps() {
  const APP_URL = process.env.APP_URL
  return { props: { APP_URL } }
}

export default Signin