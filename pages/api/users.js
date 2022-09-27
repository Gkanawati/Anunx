import nextConnect from 'next-connect'
import { get, post } from '../../src/controllers/users'

const route = nextConnect({
  onError: (err, req, res, next) => {
    console.error(err);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .get(get)
  .post(post)

export default route