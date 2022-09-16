import { useDropzone } from 'react-dropzone';
import { Box, IconButton, Typography } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';

import {
  CardSendImage,
  MainImage,
  Mask,
  Thumb,
  ThumbsContainer
} from './fileUpload.styles';
import { LightTheme as theme } from '../../../src/themes/Light';

const FileUpload = ({ files, errors, touched, setFieldValue }) => {

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map(file => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      })

      setFieldValue('files', [
        ...files,
        ...newFiles
      ])
    }
  })

  const handleRemoveFile = (fileName) => {
    const newFiles = files.filter(item => item.name !== fileName)
    setFieldValue('files', newFiles)
  }

  return (
    <Box bgcolor={theme.palette.background.default} sx={{ paddingX: 3, paddingY: 3 }}>
      <Typography component='h6' gutterBottom variant='h6' color='textPrimary'>
        Imagens
      </Typography>
      <Typography component='div' variant='body2' color='textPrimary' gutterBottom>
        A primeira imagem é a foto principal do seu anúncio
      </Typography>

      {errors && touched && (
        <Typography variant='body2' color='error' gutterBottom>
          {errors && touched && errors}
        </Typography>
      )}

      <ThumbsContainer>
        <CardSendImage {...getRootProps()}>
          <input name='files' {...getInputProps()} />
          <Typography variant='body2' color={errors && touched ? 'error' : 'textPrimary'}>
            Clique para adicionar ou arraste a imagem aqui.
          </Typography>
        </CardSendImage>

        {files.map((file, index) => (
          <Thumb
            key={file.name}
            style={{ backgroundImage: `url(${file.preview})` }}
          >
            {index === 0 &&
              <MainImage>
                <Typography variant='body' color='secondary'>
                  Principal
                </Typography>
              </MainImage>
            }
            <Mask className='mask'>
              <IconButton color='secondary' onClick={() => handleRemoveFile(file.name)}>
                <DeleteForever />
              </IconButton>
            </Mask>
          </Thumb>
        ))}
      </ThumbsContainer>
    </Box>
  )
}

export default FileUpload