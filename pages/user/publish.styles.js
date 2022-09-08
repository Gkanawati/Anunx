import { styled } from '@mui/system';
import { LightTheme as theme } from '../../src/themes/Light';

export const CardSendImage = styled('Box')({
  width: 200,
  height: 160,
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  border: theme.spacing(0.5),
  borderStyle: 'dashed',
  backgroundColor: theme.palette.background.paper
});

export const ThumbsContainer = styled('Box')({
  display: 'flex',
  margin: theme.spacing(2),
  gap: theme.spacing(2),
  flexWrap: 'wrap',
});

export const Thumb = styled('Box')({
  width: 200,
  height: 160,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  position: 'relative',

  "&:hover": {
    // Mask
    ".mui-style-1p8fxnf": {
      display: "flex",
    },
  }
});

export const Mask = styled('Box')({
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: 'rgba(0,0,0,0.7)',
  width: '100%',
  height: '100%',
});

export const MainImage = styled('Box')({
  backgroundColor: theme.palette.secondary.greenLight,
  paddingTop: 2,
  paddingBottom: 2,
  paddingLeft: 4,
  paddingRight: 4,
  position: 'absolute',
  bottom: 0,
  left: 0,
});