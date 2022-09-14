import {
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from '@mui/material';
import { Search } from '@mui/icons-material';

import TemplateDefault from '../../src/templates/Default';
import { LightTheme } from '../../src/themes/Light';
import Card from '../../src/components/Card';

const List = () => {
  return (
    <TemplateDefault>
      <Container maxWidth='lg'>
        <Paper sx={{
          paddingX: 2,
          marginY: 3,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: LightTheme.palette.background.default,
        }}>
          <InputBase
            placeholder='Ex: Apple MacBook Pro'
            fullWidth
          />
          <IconButton>
            <Search />
          </IconButton>
        </Paper>

        <Box
          bgcolor={LightTheme.palette.background.default}
          sx={{ padding: 3 }}
        >
          <Typography component='h6' variant='h6'>
            Anúncios
          </Typography>
          <Typography sx={{ textTransform: 'uppercase', display: 'block', marginBottom: 2 }} component='span' variant='subtitle2'>
            Encontrados 200 Anúncios
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random?a=1'}
                title='Produto X'
                subtitle='R$ 60,00'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random?a=2'}
                title='Produto X'
                subtitle='R$ 60,00'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random?a=3'}
                title='Produto X'
                subtitle='R$ 60,00'
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export default List