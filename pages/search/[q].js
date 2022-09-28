import { useState } from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import {
  Box,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from '@mui/material';

import TemplateDefault from '../../src/templates/Default';
import Card from '../../src/components/Card';
import ProductsModel from '../../src/models/products';
import InputSearch from '../../src/components/InputSearch';
import { useRouter } from 'next/router';


const List = ({ products, query }) => {

  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const [filter, setFilter] = useState('')
  const route = useRouter()

  const handleSelectCategory = (value) => {
    setFilter(value)
    console.log(value)
    route.push({
      pathname: `/search/${value}`,
    })
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <TemplateDefault>
      <Container maxWidth='lg'>
        <Container maxWidth='lg'>
          <InputSearch />
        </Container>
        <Box sx={{ padding: 2 }}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Box>
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
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={[{ display: 'flex', alignItems: 'center', mb: 2 }, smUp && { justifyContent: 'right', marginBottom: 0 }]}>
                <Typography component='h6' variant='subtitle2' sx={{ fontSize: '1rem' }}>
                  Filtrar por categoria:
                </Typography>
                <FormControl size='small'>
                  <Select
                    name='category'
                    value={filter}
                    onChange={(e) => handleSelectCategory(e.target.value)}
                    size='small'
                    sx={{ width: '60%', maxHeight: 1, ml: 2, maxWidth: 150 }}
                    MenuProps={MenuProps}
                  >
                    <MenuItem value='Computadores'>Computadores</MenuItem>
                    <MenuItem value='Eletrônicos e celulares'>Eletrônicos e celulares</MenuItem>
                    <MenuItem value='Equipamentos e Ferramentas'>Equipamentos e Ferramentas</MenuItem>
                    <MenuItem value='Automotivos'>Automotivos</MenuItem>
                    <MenuItem value='Estética'>Estética</MenuItem>
                    <MenuItem value='Bebê e Criança'>Bebê e Criança</MenuItem>
                    <MenuItem value='Agricultura'>Agricultura</MenuItem>
                    <MenuItem value='Animais'>Animais</MenuItem>
                    <MenuItem value='Móveis, Casa e Jardim'>Móveis, Casa e Jardim </MenuItem>
                    <MenuItem value='Imóveis'>Imóveis</MenuItem>
                    <MenuItem value='Esporte'>Esporte</MenuItem>
                    <MenuItem value='Lazer'>Lazer</MenuItem>
                    <MenuItem value='Outros'>Outros</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          {
            products.length < 1
            && (
              <Typography>Nenhum anúncio encontrado 😔</Typography>
            )
          }
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
                          image={product.files[0].url}
                          title={product.title}
                          subtitle={'R$ ' + product.price}
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
    </TemplateDefault >
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
        category: {
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