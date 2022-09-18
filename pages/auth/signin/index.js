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
import { LightTheme as theme } from '../../../src/themes/Light';
import { initialValues, validationSchema } from './formValues';
import useToast from '../../../src/contexts/Toast';
import { useRouter } from 'next/router';

const Signin = () => {

  const router = useRouter()
  const { setToast } = useToast()

  const handleFormSubmit = async values => {

  }


  return (
    <TemplateDefault>
      <Container maxWidth='md' >
        <Container component='main' sx={{ marginBottom: 3 }}>
          <Typography component='h1' variant='h2' align='center' color='textPrimary'>
            Entre na sua conta
          </Typography>
        </Container>

        <Container>
          <Box
            bgcolor={theme.palette.background.default}
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
                            Entrar
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

export default Signin