import nextConnect from 'next-connect';
import { update } from '../../../src/controllers/products';

const route = nextConnect()

route.put(update)

export default route