import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@mui/material'

import TemplateDefault from '../../src/templates/Default'

export default function Home() {
  return (
    <TemplateDefault>
      <Container maxWidth='lg' sx={{ paddingTop: 8, paddingBottom: 6 }}>
        <Typography component='h1' variant='h2' align='center' color='primary'>
          Meus Anúncios
        </Typography>
        <Button variant='contained' className='buttonAdd' color='primary' sx={{ marginY: 4, marginX: 'auto', display: 'block' }}>
          Publicar novo anúncio
        </Button>
        <Container >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  image={'https://source.unsplash.com/random'}
                  title="Titulo do Anuncio"
                  sx={{ paddingTop: '56%', }}
                />
                <CardContent>
                  <Typography variant='h5' component='h2'>
                    Produto Exemplo
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  image={'https://source.unsplash.com/random'}
                  title="Titulo do Anuncio"
                  sx={{ paddingTop: '56%', }}
                />
                <CardContent>
                  <Typography variant='h5' component='h2'>
                    Produto Exemplo
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  image={'https://source.unsplash.com/random'}
                  title="Titulo do Anuncio"
                  sx={{ paddingTop: '56%', }}
                />
                <CardContent>
                  <Typography variant='h5' component='h2'>
                    Produto Exemplo
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  image={'https://source.unsplash.com/random'}
                  title="Titulo do Anuncio"
                  sx={{ paddingTop: '56%', }}
                />
                <CardContent>
                  <Typography variant='h5' component='h2'>
                    Produto Exemplo
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  image={'https://source.unsplash.com/random'}
                  title="Titulo do Anuncio"
                  sx={{ paddingTop: '56%', }}
                />
                <CardContent>
                  <Typography variant='h5' component='h2'>
                    Produto Exemplo
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                  <Button size="small" color="primary">
                    Editar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </TemplateDefault>
  )
}