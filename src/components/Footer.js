import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material"
import Link from "next/link"
import { LightTheme as theme } from "../themes"
import Copyright from "./Copyright";

const Footer = () => {
  const theme = useTheme()
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
        borderTop: '1px solid #ddd',
        marginTop: 'auto',
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

      <Box align="center" sx={{ mt: 3, mb: 1 }}>
        <Typography
          variant="h6"
          component={Link}
          noLinkStyle
          href="/"
          color="inherit"
          gutterBottom
          sx={{ textDecoration: 'none', '&:hover': { opacity: [0.9, 0.8, 0.7], } }}
        >
          Anunx
        </Typography>
      </Box>

      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Feito com ❤️ por {' '}
        <Link
          color="inherit"
          rel="noopener noreferrer"
          href="https://github.com/Gkanawati"
          target="_blank"
          sx={{ textDecoration: 'none', color: '#f98180', '&:hover': { opacity: [0.9, 0.8, 0.7] } }}
        >
          Gabriel Kanawati
        </Link>.
      </Typography>
      <Copyright />
    </Container>
  )
}

export default Footer