import { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel'

import TemplateDefault from '../../../src/templates/Default';
import ProductsModel from '../../../src/models/products';
import dbConnect from '../../../src/utils/dbConnect';

const Product = ({ product }) => {

  const smDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [month, setMonth] = useState('')

  const day = product.publishDate.substring(0, 2);
  const monthNumber = product.publishDate.substring(3, 5);
  const year = product.publishDate.substring(6, 10);

  useEffect(() => {
    switch (monthNumber) {
      case '01':
        setMonth('Janeiro')
        break;
      case '02':
        setMonth('Fevereiro')
        break;
      case '03':
        setMonth('Março')
        break;
      case '04':
        setMonth('Abril')
        break;
      case '05':
        setMonth('Maio')
        break;
      case '06':
        setMonth('Junho')
        break;
      case '07':
        setMonth('Julho')
        break;
      case '08':
        setMonth('Agosto')
        break;
      case '09':
        setMonth('Setembro')
        break;
      case '10':
        setMonth('Outubro')
        break;
      case '11':
        setMonth('Novembro')
        break;
      case '12':
        setMonth('Dezembro')
        break;
    }
  }, [monthNumber])

  return (
    <TemplateDefault>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Box
              component={Paper}
              elevation={0}
              sx={smDown ? { padding: 1, marginBottom: 3 } : { padding: 2, marginBottom: 3 }}
            >
              <Carousel autoPlay={false} animation='slide' navButtonsAlwaysVisible indicators={false}>
                {
                  product.files.map(file =>
                    <Card key={file.name} sx={{ height: '100%' }}>
                      <CardMedia
                        sx={{ paddingTop: '56%' }}
                        image={file.url}
                      />
                    </Card>
                  )
                }
              </Carousel>
            </Box>

            <Box
              component={Paper}
              elevation={0}
              sx={{ padding: 3, marginBottom: 3 }}
              textAlign='left'
            >
              <Typography component='span' variant='caption'>
                Publicado em {day} de {month} de {year}
              </Typography>
              <Typography component='h4' variant='h4' sx={{ marginY: 2 }}>
                {product.title}
              </Typography>
              <Typography component='h4' variant='h4' sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                {'R$ ' + product.price}
              </Typography>
              <Chip label={product.category} />
            </Box>

            <Box
              component={Paper}
              elevation={0}
              sx={{ padding: 3, marginBottom: 3 }}
              textAlign='left'
            >
              <Typography component='h6' variant='h6'>
                Descrição
              </Typography>
              <Typography component='p' variant='body2'>
                {product.description}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card
              elevation={0}
              sx={{ padding: 1, marginBottom: 3 }}
            >
              <CardHeader
                avatar={
                  <Avatar src={product.user.image}>
                    {product.user.name[0]}
                  </Avatar>
                }
                title={product.user.name}
                subheader={product.user.email}
              />
              <CardMedia
                image={product.user.image}
                title={product.user.name}
              />
            </Card>

            <Box
              component={Paper}
              elevation={0}
              sx={{ padding: 3, marginBottom: 3 }}
            >
              <Typography component='h6' variant='h6'>
                Localização:
              </Typography>
              <Typography component='h5' variant='subtitle1'>
                {product.locationCity} - {product.locationState}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export async function getServerSideProps({ query }) {
  const { id } = query

  await dbConnect()

  const product = await ProductsModel.findOne({ _id: id })

  return {
    props: {
      product: JSON.parse(JSON.stringify(product))
    }
  }
}

export default Product