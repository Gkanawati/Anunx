import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Typography,
  Box,
  Container,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  IconButton,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from '@mui/material';
import { DeleteForever } from '@mui/icons-material';

import {
  CardSendImage,
  MainImage,
  Mask,
  Thumb,
  ThumbsContainer
} from './publish.styles';
import TemplateDefault from '../../src/templates/Default';
import { LightTheme as theme } from '../../src/themes/Light';
import { useDropzone } from 'react-dropzone';

const validationSchema = yup.object().shape({
  title: yup.string().min(5).max(100).required(),
  category: yup.string().required(),
  description: yup.string().min(40).max(1000).required(),
  price: yup.number().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().required(),
  files: yup.array().min(1, 'Envie pelo menos uma foto').required(),
})

const Publish = () => {

  const [category, setCategory] = useState('');

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
        initialValues={{
          title: '',
          category: '',
          description: '',
          price: '',
          name: '',
          email: '',
          phone: '',
          files: [],
        }}
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
          const { getRootProps, getInputProps } = useDropzone({
            accept: 'image/*',
            onDrop: (acceptedFile) => {
              const newFiles = acceptedFile.map(file => {
                return Object.assign(file, {
                  preview: URL.createObjectURL(file)
                })
              })

              setFieldValue('files', [
                ...values.files,
                ...newFiles
              ])
            }
          })

          const handleRemoveFile = (fileName) => {
            const newFiles = values.files.filter(item => item.name !== fileName)
            setFieldValue('files', newFiles)
          }
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
                <Box bgcolor={theme.palette.background.default} sx={{ paddingX: 3 }}>
                  <Box sx={{ paddingY: 3 }}>
                    <Typography component='h6' gutterBottom variant='h6' color='textPrimary'>
                      Imagens
                    </Typography>
                    <Typography component='div' variant='body2' color='textPrimary' gutterBottom>
                      A primeira imagem é a foto principal do seu anúncio
                    </Typography>

                    {errors.files && touched.files && (
                      <Typography variant='body2' color='error' gutterBottom>
                        {errors.files && touched.files && errors.files}
                      </Typography>
                    )}

                    <ThumbsContainer>
                      <CardSendImage {...getRootProps()}>
                        <input name='files' {...getInputProps()} />
                        <Typography variant='body2' color={errors.files && touched.files ? 'error' : 'textPrimary'}>
                          Clique para adicionar ou arraste a imagem aqui.
                        </Typography>
                      </CardSendImage>

                      {values.files.map((file, index) => (
                        <Thumb
                          key={file.name}
                          style={{ backgroundImage: `url(${file.preview})` }}
                        >
                          {index === 0 &&
                            <MainImage>
                              <Typography variant='body' color='secondary'>
                                Principal
                              </Typography>
                            </MainImage>
                          }
                          <Mask className='mask'>
                            <IconButton color='secondary' onClick={() => handleRemoveFile(file.name)}>
                              <DeleteForever />
                            </IconButton>
                          </Mask>
                        </Thumb>
                      ))}

                    </ThumbsContainer>
                  </Box>
                </Box>
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
                        variant='outlined'
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
                        variant='outlined'
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
                        variant='outlined'
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


export default Publish