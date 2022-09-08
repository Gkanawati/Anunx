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
} from '@mui/material';
import TemplateDefault from '../../src/templates/Default';

import { LightTheme } from '../../src/themes/Light';

const Publish = () => {

  const [category, setCategory] = useState('');

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
        <Box bgcolor={LightTheme.palette.background.default} sx={{ paddingX: 3, paddingTop: 3 }}>
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
              <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
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
        <Box bgcolor={LightTheme.palette.background.default} sx={{ paddingX: 3 }}>
          <Box sx={{ paddingY: 3 }}>
            <Typography component='h6' gutterBottom variant='h6' color='textPrimary'>
              Imagens
            </Typography>
            <Typography component='div' variant='body2' color='textPrimary'>
              A primeira imagem é a foto principal do seu anúncio
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container sx={{ paddingBottom: 3 }}>
        <Box bgcolor={LightTheme.palette.background.default} sx={{ paddingX: 3 }}>
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
        <Box bgcolor={LightTheme.palette.background.default} sx={{ paddingX: 3 }}>
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