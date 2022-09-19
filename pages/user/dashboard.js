import {
  Button,
  Container,
  Grid,
  Typography
} from '@mui/material'
import Card from '../../src/components/Card'
import Link from 'next/link';

import TemplateDefault from '../../src/templates/Default'
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter()
  return (
    <TemplateDefault>
      <Container maxWidth='lg'>
        <Typography component='h1' variant='h2' align='center' color='primary'>
          Meus Anúncios
        </Typography>

        <Button onClick={() => router.push('/user/publish')} variant='contained' className='buttonAdd' color='primary' sx={{ marginY: 4, marginX: 'auto', display: 'block' }}>
          Publicar novo anúncio
        </Button>

        <Container >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Produto X'
                subtitle='R$ 60,00'
                actions={
                  <>
                    <Button size="small" color="primary">
                      Editar
                    </Button>
                    <Button size="small" color="primary">
                      Editar
                    </Button>
                  </>
                }
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </TemplateDefault>
  )
}

Home.requireAuth = true

export default Home