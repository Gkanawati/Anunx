import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
  Paper,
  Button
} from '@mui/material';
import Carousel from 'react-material-ui-carousel'

import { LightTheme } from '../src/themes/Light';
import TemplateDefault from '../src/templates/Default';

const Product = () => {

  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    }
  ]

  return (
    <TemplateDefault>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box
              bgcolor={LightTheme.palette.background.default}
              sx={{ padding: 3, marginBottom: 3 }}
            >
              <Carousel autoPlay={false} animation='slide' navButtonsAlwaysVisible indicators={false}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    sx={{ paddingTop: '56%' }}
                    image='https://source.unsplash.com/random?a=1'
                    title='Titulo da Imagem'
                  />
                </Card>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    sx={{ paddingTop: '56%' }}
                    image='https://source.unsplash.com/random?a=2'
                    title='Titulo da Imagem'
                  />
                </Card>
              </Carousel>
            </Box>

            <Box
              bgcolor={LightTheme.palette.background.default}
              sx={{ padding: 3, marginBottom: 3 }}
              textAlign='left'
            >
              <Typography component='span' variant='caption'>
                Publicado 16 junho de 2021
              </Typography>
              <Typography component='h4' variant='h4' sx={{ marginY: 2 }}>
                Jaguar XE 2.0 D R-Sport Aut.
              </Typography>
              <Typography component='h4' variant='h4' sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                R$ 50.000
              </Typography>
              <Chip label='Categoria' />
            </Box>

            <Box
              bgcolor={LightTheme.palette.background.default}
              sx={{ padding: 3, marginBottom: 3 }}
              textAlign='left'
            >
              <Typography component='h6' variant='h6'>
                Descrição
              </Typography>
              <Typography component='p' variant='body2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio sem, pretium quis aliquam sed, placerat vitae lorem. Donec faucibus mollis ex, vitae aliquet risus auctor id. Phasellus sit amet mattis nunc. Mauris viverra, diam quis convallis tempor, lacus risus convallis ligula, et venenatis augue ligula vel massa.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Card
              elevation={0}
              sx={{ backgroundColor: LightTheme.palette.background.default, padding: 3, marginBottom: 3 }}
            >
              <CardHeader
                avatar={
                  <Avatar>T</Avatar>
                }
                title='Gabriel Kanawati'
                subheader='gabrielkanawati3@gmail.com'
              />
              <CardMedia
                image='https://source.unsplash.com/random'
                title='Gabriel Kanawati'
              />
            </Card>

            <Box
              bgcolor={LightTheme.palette.background.default}
              sx={{ padding: 3, marginBottom: 3 }}
            >
              <Typography component='h6' variant='h6'>
                Localização
              </Typography>
            </Box>

          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">
        Check it out!
      </Button>
    </Paper>
  )
}

export default Product