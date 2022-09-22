import fs from 'fs';
import path from 'path';
import formidable from 'formidable-serverless';
import ProductsModel from '../models/products';
import dbConnect from '../utils/dbConnect';

const post = async (req, res) => {
  await dbConnect()

  const form = new formidable.IncomingForm({
    multiples: true,
    uploadDir: 'public/uploads',
    keepExtensions: true,
  })

  form.parse(req, async (error, fields, data) => {
    if (error) {
      return res.status(500).json({ success: false })
    }
    const { files } = data

    console.log("FILES ")
    console.log(files)

    const filesToRename = files instanceof Array
      ? files
      : [files]

    const filesToSave = []

    filesToRename.forEach(file => {
      const timeStamp = Date.now()
      const randomNumber = Math.floor(Math.random() * 999999) + 1
      const extension = path.extname(file.name)

      const fileName = `${timeStamp}_${randomNumber}${extension}`

      const oldPath = path.join(__dirname, `../../../../../${file.path}`)
      const newPath = path.join(__dirname, `../../../../../${form.uploadDir}/${fileName}`)

      filesToSave.push({
        name: fileName,
        path: newPath,
      })

      fs.rename(oldPath, newPath, (error) => {
        if (error) {
          console.log(error)
          return res.status(500).json({ success: false, erro: "RENAME FILE ERROR" })
        }
      })
    })

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

    console.log('FIELDS')
    console.log(fields)

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
      publishDate,
    } = fields

    const product = await ProductsModel.findById(id)

    product.title = title
    product.category = category
    product.description = description
    product.price = price
    product.name = name
    product.email = email
    product.phone = phone
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

  const deleted = await ProductsModel.findOneAndRemove({ _id: id })

  if (deleted) {
    res.status(200).json({ success: true })
  }
  else {
    res.status(500).json({ success: false })
  }
}

export { post, update, remove }

/* const { title, category, locationCity } = req.body

const product = await ProductsModel.findById({ _id: id })

product.title = title
product.category = category
product.locationCity = locationCity

const register = await product.save()

if (register) {
  res.status(201).json({ success: true })
}
else {
  res.status(500).json({ success: false })
}
const updated = await ProductsModel.updateOne({ _id: id }, { title, category, locationCity }) */