/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import slugify from 'slugify';
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
import { theme } from '../../src/themes';
import Card from '../../src/components/Card';
import ProductsModel from '../../src/models/products';
import { formatCurrency } from '../../src/utils/currency';
import InputSearch from '../../src/components/InputSearch';


const List = ({ products, query }) => {
  return (
    <TemplateDefault>
      <Container maxWidth='lg'>

        <InputSearch />

        <Box
          bgcolor={theme.palette.background.default}
          sx={{ padding: 3 }}
        >
          <Typography component='h6' variant='h6'>
            Anúncios
          </Typography>
          <Typography sx={{ textTransform: 'uppercase', display: 'block', marginBottom: 2 }} component='span' variant='subtitle2'>
            {products.length} {
              products.length > 1
                ? 'Anúncios'
                : 'Anúncio'
            } {
              products.length > 1
                ? 'Encontrados'
                : 'Encontrado'
            } para "{query}"
          </Typography>
          <Grid container spacing={4}>
            {
              products.map(product => {
                const category = slugify(product.category).toLowerCase()
                const title = slugify(product.title).toLowerCase()

                return (
                  <Grid key={product._id} item xs={12} sm={6} md={4}>
                    <Link href={`/${category}/${title}/${product._id}`}>
                      <a>
                        <Card
                          image={`/uploads/${product.files[0].name}`}
                          title={product.title}
                          subtitle={formatCurrency(product.price)}
                        />
                      </a>
                    </Link>
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export async function getServerSideProps({ query }) {
  const { q } = query

  const products = await ProductsModel.find({
    $or: [
      {
        title: {
          $regex: q,
          $options: 'i'
        }
      },
      {
        description: {
          $regex: q,
          $options: 'i'
        }
      },
    ]
  })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      query: q
    }
  }
}

export default List