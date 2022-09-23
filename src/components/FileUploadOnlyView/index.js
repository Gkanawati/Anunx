import { Box, IconButton, Typography } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';

import {
  CardSendImage,
  MainImage,
  Mask,
  Thumb,
  ThumbsContainer
} from './fileUpload.styles';

const FileUploadOnlyView = ({ files, errors, touched }) => {

  return (
    <Box sx={{ paddingX: 3, paddingY: 3, zIndex: -1 }}>
      <Typography component='h6' gutterBottom variant='h6' color='#fff'>
        Imagens
      </Typography>
      <Typography component='div' variant='body2' color='#fff' gutterBottom>
        A primeira imagem é a foto principal do seu anúncio
      </Typography>

      {errors && touched && (
        <Typography variant='body2' color='error' gutterBottom>
          {errors && touched && errors}
        </Typography>
      )}

      <ThumbsContainer>
        <CardSendImage >
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
              <IconButton color='secondary' onClick={() => { }}>
                <DeleteForever />
              </IconButton>
            </Mask>
          </Thumb>
        ))}
      </ThumbsContainer>
    </Box>
  )
}

export default FileUploadOnlyView