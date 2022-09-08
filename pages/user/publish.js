import { useState } from 'react';
import {
  TextField,
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

const Publish = () => {

  const [category, setCategory] = useState('');
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map(file => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      })

      setFiles([
        ...files,
        ...newFiles
      ])
      console.log(files)
    }
  })

  const handleRemoveFile = (fileName) => {
    const newFiles = files.filter(item => item.name !== fileName)
    setFiles(newFiles)
  }

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <TemplateDefault>
      <Container maxWidth='lg' sx={{ paddingTop: 8, paddingBottom: 6 }}>
        <Typography component='h1' variant='h2' align='center' color='textPrimary'>
          Publicar Anúncio
        </Typography>
        <Typography component='h5' variant='h5' align='center' color='textPrimary'>
          Quanto mais detalhado, melhor!
        </Typography>
      </Container>

      <Container sx={{ paddingBottom: 3 }}>
        <Box bgcolor={theme.palette.background.default} sx={{ paddingX: 3, paddingTop: 3 }}>
          <Box sx={{ paddingBottom: 3 }}>
            <Typography component='h6' gutterBottom variant='h6' color='textPrimary'>
              Título do Anúncio
            </Typography>
            <TextField
              label="ex: Xbox One Series S"
              size='small'
              fullWidth
            />
          </Box>
          <Box sx={{ minWidth: 120, paddingBottom: 3 }}>
            <Typography component='h6' gutterBottom variant='h6' color='textPrimary'>
              Categoria
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="select-category">Categoria</InputLabel>
              <Select
                labelId="select-category"
                id="select-category"
                value={category}
                label="Categoria"
                onChange={handleChange}
              >
                <MenuItem value={10}>Computadores</MenuItem>
                <MenuItem value={20}>Automotivos</MenuItem>
                <MenuItem value={30}>Estética</MenuItem>
              </Select>
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

            <ThumbsContainer>
              <CardSendImage {...getRootProps()}>
                <input {...getInputProps()} />
                <Typography variant='body2' color='textPrimary'>
                  Clique para adicionar ou arraste a imagem aqui.
                </Typography>
              </CardSendImage>

              {files.map((file, index) => (
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
            <TextField
              multiline
              rows={6}
              variant='outlined'
              fullWidth
            />
          </Box>
        </Box>
      </Container>

      <Container sx={{ paddingBottom: 3 }}>
        <Box bgcolor={theme.palette.background.default} sx={{ paddingX: 3 }}>
          <Box sx={{ paddingY: 3 }}>
            <Typography component='h6' gutterBottom variant='h6' color='textPrimary'>
              Preço
            </Typography>
            <FormControl fullWidth variant='outlined'>
              <InputLabel labelId="input-price">Valor</InputLabel>
              <OutlinedInput
                labelId="input-price"
                id="input-price"
                label="Valor"
                onChange={() => { }}
                startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
              />
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

            <TextField
              label="Nome"
              variant='outlined'
              size='small'
              fullWidth
              sx={{ marginBottom: 2 }}
            />

            <TextField
              label="E-mail"
              variant='outlined'
              size='small'
              fullWidth
              sx={{ marginBottom: 2 }}
            />

            <TextField
              label="Telefone"
              type="number"
              variant='outlined'
              size='small'
              fullWidth
              sx={{ marginBottom: 2 }}
            />

          </Box>
        </Box>
      </Container>

      <Container sx={{ paddingBottom: 3 }}>
        <Box textAlign='right'>
          <Button color='primary' variant='contained'>
            Publicar anúncio
          </Button>
        </Box>
      </Container>

    </TemplateDefault>
  )
}


export default Publish