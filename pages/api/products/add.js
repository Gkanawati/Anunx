import nextConnect from 'next-connect';
import { post, edit } from '../../../src/controllers/products';

const route = nextConnect()

route.post(post)

route.put(edit)

export default route

export const config = {
  api: {
    bodyParser: false
  }
}