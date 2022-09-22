import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery
} from "@mui/material"
import Link from "next/link"
import { LightTheme as theme } from "../themes"

const Footer = () => {

  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Container
      maxWidth='lg'
      component='footer'
      sx={[smUp ? {
        paddingTop: 4,
        paddingBottom: 4
      } : {
        paddingTop: 3,
        paddingBottom: 3
      }, {
        borderTop: `1px solid ${theme.palette.divider}`,
      }]}
    >
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Box sx={{ color: theme.palette.primary }} textAlign='center'>
            <Link href="/">
              <a>
                <Typography color='textSecondary' variant='subtitle1'>
                  Home
                </Typography>
              </a>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box sx={{ color: theme.palette.primary }} textAlign='center'>
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
          <Box sx={{ color: theme.palette.primary }} textAlign='center'>
            <Link href="/user/dashboard">
              <a>
                <Typography color='textSecondary' variant='subtitle1'>
                  Meus Anúncios
                </Typography>
              </a>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box sx={{ color: theme.palette.primary }} textAlign='center'>
            <Link href="/user/publish">
              <a>
                <Typography color='textSecondary' variant='subtitle1'>
                  Anunciar e Vender
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