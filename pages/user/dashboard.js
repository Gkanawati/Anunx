import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import {
  Button,
  Container,
  Grid,
  Typography
} from '@mui/material';

import dbConnect from '../../src/utils/dbConnect';
import ProductsModel from '../../src/models/products';
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card';

const Home = ({ products }) => {
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
            {products.map(product => (
              <Grid key={product._id} item xs={12} sm={6} md={4}>
                <Card
                  image={`/uploads/${product.files[0].name}`}
                  title={product.title}
                  subtitle={product.price}
                  actions={
                    <>
                      <Button size="small" color="primary">
                        Editar
                      </Button>
                      <Button size="small" color="primary">
                        Remover
                      </Button>
                    </>
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </TemplateDefault>
  )
}

Home.requireAuth = true

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  await dbConnect()

  const products = await ProductsModel.find({ 'user.id': session.userId })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}

export default Home