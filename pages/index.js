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
import dbConnect from '../src/utils/dbConnect';
import { formatCurrency } from '../src/utils/currency';
import ProductsModel from '../src/models/products';
import Link from 'next/link';
import slugify from 'slugify';

const Home = ({ products }) => {
  return (
    <TemplateDefault>
      <Container>
        <Container maxWidth='lg'>
          <Typography component='h1' variant='h3' align='center' color='textPrimary'>
            O que deseja encontrar?
          </Typography>
          <Paper sx={{
            paddingX: 2,
            marginTop: 3,
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#fff',
          }}>
            <InputBase
              placeholder='Ex: Apple MacBook Pro'
              fullWidth
            />
            <IconButton>
              <Search />
            </IconButton>
          </Paper>
        </Container>
        <Container maxWidth='lg' sx={{ paddingTop: 6 }}>
          <Typography component='h1' variant='h4' align='center' color='textPrimary' sx={{ paddingBottom: 2 }}>
            Destaques
          </Typography>
          <Grid container spacing={4}>
            {
              products.map(product => {
                const category = slugify(product.category).toLowerCase()
                const title = slugify(product.title).toLowerCase()
                return (
                  <Grid key={product._id} item xs={12} sm={6} md={4}>
                    <Link href={`/${category}/${title}/${product._id}`} passHref>
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
              }

              )
            }
          </Grid>
        </Container>
      </Container>
    </TemplateDefault>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  const products = await ProductsModel.aggregate([{
    $sample: { size: 9 }
  }])

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}

export default Home