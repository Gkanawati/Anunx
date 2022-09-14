import {
  Card as CardMUI,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material';
import { LightTheme } from '../themes/Light';

const Card = ({ image, title, subtitle, actions }) => {
  return (
    <CardMUI sx={{ backgroundColor: LightTheme.palette.background.default }}>
      <CardMedia
        image={image}
        title="Titulo do Anuncio"
        sx={{ paddingTop: '56%', }}
      />
      <CardContent>
        <Typography variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography>
          {subtitle}
        </Typography>
      </CardContent>
      {actions && (
        <CardActions>
          {actions}
        </CardActions>
      )}
    </CardMUI>
  )
}

export default Card