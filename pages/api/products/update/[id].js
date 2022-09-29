import nextConnect from 'next-connect'
import { update } from '../../../../src/controllers/products'

const handler = nextConnect({
  onError: (err, req, res, next) => {
    console.error(err, err.stack)
    return res.status(500).end("Something broke!")
  },
  onNoMatch: (req, res) => {
    return res.status(404).end("Page is not found")
  },
})
  .put(update)

export default handler

export const config = {
  api: {
    bodyParser: false,
  },
}