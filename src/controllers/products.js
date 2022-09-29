import formidable from 'formidable-serverless';
import ProductsModel from '../models/products';
import dbConnect from '../utils/dbConnect';
import cloudinary from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY_CLOUDINARY,
  api_secret: process.env.API_SECRET_CLOUDINARY,
})

const post = async (req, res) => {
  await dbConnect()

  const form = new formidable.IncomingForm({
    multiples: true,
    keepExtensions: true,
  })

  form.parse(req, async (error, fields, data) => {
    if (error) {
      return res.status(500).json({ success: false })
    }
    const { files } = data

    // transform files in an array
    const filesArray = files instanceof Array
      ? files
      : [files]

    let uploadedImg = []
    const filesWrapper = []
    const filesToSave = []

    for (let i = 0; i < filesArray.length; i++) {
      uploadedImg = await cloudinary.v2.uploader.upload(filesArray[i].path, {
        resource_type: 'image',
        access_type: 'anonymous',
      }, (error) => {
        if (error) {
          console.error(error)
          return res.status(500).json({ success: false })
        }
      })

      filesWrapper.push(uploadedImg)

      const newFilename = filesWrapper[i].original_filename
      const newUrl = filesWrapper[i].secure_url
      const publicId = filesWrapper[i].public_id

      filesToSave.push({
        name: newFilename,
        url: newUrl,
        publicId,
      })
    }

    const {
      title,
      category,
      description,
      price,
      name,
      email,
      phone,
      userId,
      image,
      locationCity,
      locationState,
      publishDate,
    } = fields

    const product = new ProductsModel({
      title,
      category,
      description,
      price,
      user: {
        id: userId,
        name,
        email,
        phone,
        image,
      },
      files: filesToSave,
      locationCity,
      locationState,
      publishDate,
    })

    const register = await product.save()

    if (register) {
      res.status(201).json({ success: true })
    }
    else {
      res.status(500).json({ success: false })
    }
  })
}

const update = async (req, res) => {
  await dbConnect()

  const { id } = req.query

  const form = new formidable.IncomingForm({
    multiples: true,
    uploadDir: 'public/uploads',
    keepExtensions: true,
  })

  form.parse(req, async (error, fields, data) => {
    if (error) {
      return res.status(500).json({ success: false })
    }

    const {
      title,
      category,
      description,
      price,
      name,
      email,
      phone,
      locationCity,
      locationState,
    } = fields

    const product = await ProductsModel.findById(id)

    product.title = title
    product.category = category
    product.description = description
    product.price = price
    product.user.name = name
    product.user.email = email
    product.user.phone = phone
    product.locationCity = locationCity
    product.locationState = locationState

    const updated = product.save()

    if (updated) {
      res.status(200).json({ success: true })
    }
    else {
      res.status(500).json({ success: false })
    }
  })
}

const remove = async (req, res) => {
  await dbConnect()

  const id = req.body.id
  const files = req.body.files

  for (let i = 0; i < files.length; i++) {
    cloudinary.v2.uploader.destroy(files[i].publicId)
  }

  const deleted = await ProductsModel.findOneAndRemove({ _id: id })

  if (deleted) {
    res.status(200).json({ success: true })
  }
  else {
    res.status(500).json({ success: false })
  }
}

export { post, update, remove }