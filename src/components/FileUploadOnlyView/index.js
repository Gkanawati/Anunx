import { Box, IconButton, Typography } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';

import {
  CardSendImage,
  MainImage,
  Mask,
  Thumb,
  ThumbsContainer
} from '../FileUpload/fileUpload.styles';

const FileUploadOnlyView = ({ files, errors, touched }) => {

  return (
    <Box sx={{ paddingX: 3, paddingY: 3, zIndex: -1 }}>
      <Typography component='h6' gutterBottom variant='h6' color='#fff'>
        Imagens
      </Typography>

      {errors && touched && (
        <Typography variant='body2' color='error' gutterBottom>
          {errors && touched && errors}
        </Typography>
      )}

      <ThumbsContainer>
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
          </Thumb>
        ))}
      </ThumbsContainer>
    </Box>
  )
}

export default FileUploadOnlyView