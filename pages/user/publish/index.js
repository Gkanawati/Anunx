import { Formik } from 'formik';
import {
  Typography,
  Box,
  Container,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from '@mui/material';

import TemplateDefault from '../../../src/templates/Default';
import { LightTheme as theme } from '../../../src/themes/Light';
import { initialValues, validationSchema } from './formValues';
import FileUpload from '../../../src/components/FileUpload';

const Publish = () => {
  return (
    <TemplateDefault>
      <Container maxWidth='lg' sx={{ marginBottom: 3 }}>
        <Typography component='h1' variant='h2' align='center' color='textPrimary'>
          Publicar Anúncio
        </Typography>
        <Typography component='h5' variant='h5' align='center' color='textPrimary'>
          Quanto mais detalhado, melhor!
        </Typography>
      </Container>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Enviou o form', values)
        }}
      >
        {({
          touched,
          values,
          errors,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => {

          return (
            <form onSubmit={handleSubmit}>
              <Container sx={{ paddingBottom: 3 }}>
                <Box bgcolor={theme.palette.background.default} sx={{ paddingX: 3, paddingTop: 3 }}>

                  <Box sx={{ paddingBottom: 3 }}>
                    <Typography component='h6' gutterBottom variant='h6' color='textPrimary'>
                      Título do Anúncio
                    </Typography>
                    <FormControl error={errors.title && touched.title} fullWidth>
                      <InputLabel size='small'>Ex: Xbox One Series S</InputLabel>
                      <OutlinedInput
                        name='title'
                        value={values.title}
                        label='Ex: Xbox One Series S'
                        onChange={handleChange}
                        size='small'
                      />
                      <FormHelperText>
                        {errors.title && touched.title && errors.title}
                      </FormHelperText>
                    </FormControl>
                  </Box>

                  <Box sx={{ minWidth: 120, paddingBottom: 3 }}>
                    <Typography component='h6' gutterBottom variant='h6' color='textPrimary'>
                      Categoria
                    </Typography>
                    <FormControl error={errors.category && touched.category} fullWidth>
                      <InputLabel size='small'>Categoria</InputLabel>
                      <Select
                        name='category'
                        value={values.category}
                        label="Categoria"
                        onChange={handleChange}
                        size='small'
                      >
                        <MenuItem value='Computadores'>Computadores</MenuItem>
                        <MenuItem value='Tecnologia'>Eletrônicos e celulares</MenuItem>
                        <MenuItem value='Equipamentos e Ferramentas'>Equipamentos e Ferramentas</MenuItem>
                        <MenuItem value='Automotivos'>Automotivos</MenuItem>
                        <MenuItem value='Estética'>Estética</MenuItem>
                        <MenuItem value='Bebê e Criança'>Bebê e Criança</MenuItem>
                        <MenuItem value='Agricultura'>Agricultura</MenuItem>
                        <MenuItem value='Animais'>Animais</MenuItem>
                        <MenuItem value='Móveis, Casa e Jardim'>Móveis, Casa e Jardim </MenuItem>
                        <MenuItem value='Imóveis'>Imóveis</MenuItem>
                        <MenuItem value='Esporte'>Esporte</MenuItem>
                        <MenuItem value='Lazer'>Lazer</MenuItem>
                        <MenuItem value='Outros'>Outros</MenuItem>
                      </Select>
                      <FormHelperText>
                        {errors.category && touched.category && errors.category}
                      </FormHelperText>
                    </FormControl>
                  </Box>

                </Box>
              </Container>

              <Container sx={{ paddingBottom: 3 }}>
                <FileUpload
                  setFieldValue={setFieldValue}
                  files={values.files}
                  errors={errors.files}
                  touched={touched.files}
                />
              </Container>

              <Container sx={{ paddingBottom: 3 }}>
                <Box bgcolor={theme.palette.background.default} sx={{ paddingX: 3 }}>
                  <Box sx={{ paddingY: 3 }}>
                    <Typography component='h6' gutterBottom variant='h6' color='textPrimary'>
                      Descrição
                    </Typography>
                    <Typography component='div' variant='body2' color='textPrimary'>
                      Escreva os detalhes do que está vendendo
                    </Typography>
                    <FormControl error={errors.description && touched.description} fullWidth>
                      <OutlinedInput
                        name='description'
                        multiline
                        rows={7}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.description && touched.description && errors.description}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Box>
              </Container>

              <Container sx={{ paddingBottom: 3 }}>
                <Box bgcolor={theme.palette.background.default} sx={{ paddingX: 3 }}>
                  <Box sx={{ paddingY: 3 }}>
                    <Typography component='h6' gutterBottom variant='h6' color='textPrimary'>
                      Preço
                    </Typography>
                    <FormControl fullWidth error={errors.price && touched.price}>
                      <InputLabel>Valor</InputLabel>
                      <OutlinedInput
                        name='price'
                        label="Valor"
                        value={values.price}
                        onChange={handleChange}
                        startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                      />
                      <FormHelperText>
                        {errors.price && touched.price && errors.price}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Box>
              </Container>

              <Container sx={{ paddingBottom: 3 }}>
                <Box bgcolor={theme.palette.background.default} sx={{ paddingX: 3 }}>
                  <Box sx={{ paddingY: 3 }}>
                    <Typography component='h6' gutterBottom variant='h6' color='textPrimary'>
                      Dados de Contato
                    </Typography>

                    <FormControl error={errors.name && touched.name} fullWidth sx={{ marginBottom: 2 }}>
                      <InputLabel size='small'>Nome</InputLabel>
                      <OutlinedInput
                        name='name'
                        onChange={handleChange}
                        value={values.name}
                        label="Nome"
                        size='small'
                      />
                      <FormHelperText>
                        {errors.name && touched.name && errors.name}
                      </FormHelperText>
                    </FormControl>

                    <FormControl error={errors.email && touched.email} fullWidth sx={{ marginBottom: 2 }}>
                      <InputLabel size='small'>E-mail</InputLabel>
                      <OutlinedInput
                        name='email'
                        onChange={handleChange}
                        value={values.email}
                        label="E-mail"
                        size='small'
                      />
                      <FormHelperText>
                        {errors.email && touched.email && errors.email}
                      </FormHelperText>
                    </FormControl>

                    <FormControl error={errors.phone && touched.phone} fullWidth sx={{ marginBottom: 2 }}>
                      <InputLabel size='small'>Telefone</InputLabel>
                      <OutlinedInput
                        name='phone'
                        onChange={handleChange}
                        value={values.phone}
                        label="Telefone"
                        type="number"
                        size='small'
                      />
                      <FormHelperText>
                        {errors.phone && touched.phone && errors.phone}
                      </FormHelperText>
                    </FormControl>

                  </Box>
                </Box>
              </Container>

              <Container sx={{ paddingBottom: 3 }}>
                <Box textAlign='right'>
                  <Button type='submit' color='primary' variant='contained'>
                    Publicar anúncio
                  </Button>
                </Box>
              </Container>
            </form>
          )
        }}
      </Formik>
    </TemplateDefault>
  )
}

Publish.requireAuth = true

export default Publish