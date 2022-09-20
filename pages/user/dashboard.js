import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography
} from '@mui/material';

import dbConnect from '../../src/utils/dbConnect';
import ProductsModel from '../../src/models/products';
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card';
import { formatCurrency } from '../../src/utils/currency';
import useToast from '../../src/contexts/Toast';

const Home = ({ products }) => {

  const route = useRouter()
  const { setToast } = useToast()

  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [productId, setProductId] = useState('');
  const [removedProducts, setRemovedProducts] = useState([]);

  const handleOpenConfirmModal = (product_id) => {
    setOpenConfirmModal(true)
    setProductId(product_id)
  };

  const handleClose = () => {
    setOpenConfirmModal(false);
  };

  const handleConfirmRemove = () => {
    axios.delete('/api/products/delete', {
      data: {
        id: productId
      }
    })
      .then(handleSuccess)
      .catch(handleError)
  }

  const handleSuccess = () => {
    setOpenConfirmModal(false)

    setRemovedProducts([...removedProducts, productId])

    setToast({
      open: true,
      severity: 'success',
      text: 'Anúncio removido com sucesso!'
    })
  }

  const handleError = () => {
    setOpenConfirmModal(false)

    setToast({
      open: true,
      severity: 'error',
      text: 'Ops, ocorreu um erro!'
    })
  }

  return (
    <TemplateDefault>
      <Container maxWidth='lg'>
        <Typography component='h1' variant='h2' align='center' color='primary'>
          Meus Anúncios
        </Typography>

        <Button onClick={() => route.push('/user/publish')} variant='contained' className='buttonAdd' color='primary' sx={{ marginY: 4, marginX: 'auto', display: 'block' }}>
          Publicar novo anúncio
        </Button>

        <Container >
          {products.length === 0 && (
            <Typography component='div' variant='body1' align='center' color='textPrimary' gutterBottom>
              Nenhum anúncio publicado
            </Typography>
          )}
          <Grid container spacing={4}>
            {products.map(product => {
              if (removedProducts.includes(product._id)) {
                return null
              }

              return (
                (
                  <Grid key={product._id} item xs={12} sm={6} md={4}>
                    <Card
                      image={`/uploads/${product.files[0].name}`}
                      title={product.title}
                      subtitle={formatCurrency(product.price)}
                      actions={
                        <>
                          <Button size="small" color="primary" onClick={() => route.push(`/user/edit/${product._id}`)}>
                            Editar
                          </Button>
                          <Button size="small" color="primary" onClick={() => handleOpenConfirmModal(product._id)}>
                            Remover
                          </Button>
                        </>
                      }
                    />
                  </Grid>
                ))
            })}
          </Grid>
        </Container>

        <Dialog
          open={openConfirmModal}
          onClose={handleClose}
        >
          <DialogTitle>
            Deseja realmente remover esse anúncio?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Ao confirmar a operação não poderá ser revertida.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              Cancelar
            </Button>
            <Button onClick={() => handleConfirmRemove('product._id')} autoFocus>
              Remover
            </Button>
          </DialogActions>
        </Dialog>

      </Container>
    </TemplateDefault >
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