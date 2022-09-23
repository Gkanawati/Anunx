import {
  Card as CardMUI,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material';

const Card = ({ image, title, subtitle, actions }) => {
  return (
    <CardMUI sx={[{ position: 'relative', minHeight: '345px', }, actions && { minHeight: '366px', }]}>
      <CardMedia
        image={image}
        sx={{ paddingTop: '56%', }}
      />
      <CardContent>
        <Typography variant='h5' component='h2' gutterBottom sx={{ fontSize: '1.3rem', display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }} >
          {title}
        </Typography>
        <Typography variant='span' component='h3' sx={!actions && { fontWeight: '700', fontSize: 20, position: 'absolute', bottom: 25 }}>
          {subtitle}
        </Typography>
      </CardContent>
      {actions && (
        <CardActions sx={{ position: 'absolute', bottom: 0 }}>
          {actions}
        </CardActions>
      )}
    </CardMUI>
  )
}

export default Card