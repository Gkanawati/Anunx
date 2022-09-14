import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery
} from "@mui/material"
import Link from "next/link"
import { LightTheme } from "../themes/Light"

const Footer = () => {

  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Container
      maxWidth='lg'
      component='footer'
      sx={[smUp ? {
        paddingTop: LightTheme.spacing(4),
        paddingBottom: LightTheme.spacing(4)
      } : {
        paddingTop: LightTheme.spacing(3),
        paddingBottom: LightTheme.spacing(3)
      }, {
        borderTop: `1px solid ${LightTheme.palette.divider}`,
      }]}
    >
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Box sx={{ color: LightTheme.palette.primary }} textAlign='center'>
            <Link href="#">
              <a>
                <Typography color='textSecondary' variant='subtitle1'>
                  Ajuda e Contato
                </Typography>
              </a>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box sx={{ color: LightTheme.palette.primary }} textAlign='center'>
            <Link href="#">
              <a>
                <Typography color='textSecondary' variant='subtitle1'>
                  Ajuda e Contato
                </Typography>
              </a>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box sx={{ color: LightTheme.palette.primary }} textAlign='center'>
            <Link href="#">
              <a>
                <Typography color='textSecondary' variant='subtitle1'>
                  Ajuda e Contato
                </Typography>
              </a>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box sx={{ color: LightTheme.palette.primary }} textAlign='center'>
            <Link href="#">
              <a>
                <Typography color='textSecondary' variant='subtitle1'>
                  Ajuda e Contato
                </Typography>
              </a>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer