import Link from 'next/link';
import slugify from 'slugify';
import {
  Container,
  Grid,
  Typography,
} from '@mui/material';
import TemplateDefault from '../src/templates/Default';
import Card from '../src/components/Card';
import dbConnect from '../src/utils/dbConnect';
import ProductsModel from '../src/models/products';
import InputSearch from '../src/components/InputSearch';

const Home = ({ products }) => {
  return (
    <TemplateDefault>
      <Container>
        <Container maxWidth='lg'>
          <Typography component='h1' variant='h3' align='center' color='textPrimary'>
            O que deseja encontrar?
          </Typography>
          <InputSearch />
        </Container>
        <Container maxWidth='lg' >
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
        </Container>
      </Container>
    </TemplateDefault >
  )
}

export async function getServerSideProps() {
  await dbConnect()

  const products = await ProductsModel.aggregate([{ $sample: { size: 9 } }, { $sort: { publishDate: -1 } }])

  // const products = await ProductsModel.find().limit(6).sort({ publishDate: -1 })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}

export default Home