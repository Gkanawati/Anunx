import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
  Button
} from '@mui/material';
import { Search } from '@mui/icons-material';
import TemplateDefault from '../src/templates/Default';
import Card from '../src/components/Card';

const Home = () => {
  return (
    <TemplateDefault>
      <Container>
        <Container maxWidth='lg'>
          <Typography component='h1' variant='h3' align='center' color='textPrimary'>
            O que deseja encontrar?
          </Typography>
          <Paper sx={styles.searchBox}>
            <InputBase
              placeholder='Ex: Apple MacBook Pro'
              fullWidth
            />
            <IconButton>
              <Search />
            </IconButton>
          </Paper>
        </Container>
        <Container maxWidth='lg' sx={styles.cardGrid}>
          <Typography component='h1' variant='h4' align='center' color='textPrimary' sx={{ paddingBottom: 2 }}>
            Destaques
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Produto X'
                subtitle='R$ 60,00'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Produto X'
                subtitle='R$ 60,00'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Produto X'
                subtitle='R$ 60,00'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Produto X'
                subtitle='R$ 60,00'
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </TemplateDefault>
  )
}

const styles = {
  cardGrid: {
    paddingTop: 6,
  },
  searchBox: {
    paddingX: 2,
    marginTop: 3,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
}

export default Home