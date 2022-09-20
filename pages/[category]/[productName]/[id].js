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
} from '@mui/material';
import Carousel from 'react-material-ui-carousel'

import { LightTheme } from '../../../src/themes/Light';
import TemplateDefault from '../../../src/templates/Default';
import ProductsModel from '../../../src/models/products';
import dbConnect from '../../../src/utils/dbConnect';
import { formatCurrency } from '../../../src/utils/currency';

const Product = ({ product }) => {
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
                {
                  product.files.map(file =>
                    <Card key={file.name} sx={{ height: '100%' }}>
                      <CardMedia
                        sx={{ paddingTop: '56%' }}
                        image={`/uploads/${file.name}`}
                      />
                    </Card>
                  )
                }
              </Carousel>
            </Box>

            <Box
              bgcolor={LightTheme.palette.background.default}
              sx={{ padding: 3, marginBottom: 3 }}
              textAlign='left'
            >
              <Typography component='span' variant='caption'>
                Publicado 16 junho de 2021 - TO DO
              </Typography>
              <Typography component='h4' variant='h4' sx={{ marginY: 2 }}>
                {product.title}
              </Typography>
              <Typography component='h4' variant='h4' sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                {formatCurrency(product.price)}
              </Typography>
              <Chip label={product.category} />
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
                {product.description}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Card
              elevation={0}
              sx={{ backgroundColor: LightTheme.palette.background.default, padding: 1, marginBottom: 3 }}
            >
              <CardHeader
                avatar={
                  <Avatar src={product.user.image}>
                    {product.user.image || product.user.name[0]}
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
              bgcolor={LightTheme.palette.background.default}
              sx={{ padding: 3, marginBottom: 3 }}
            >
              <Typography component='h6' variant='h6'>
                Localização - TO DO
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