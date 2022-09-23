import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/client';
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  Container,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery,
  useTheme,
  Box
} from '@mui/material'

import { AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';

import { ColorModeContext } from '../../src/contexts/ColorModeContext'

export default function Header() {
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const [session] = useSession()
  const [anchorUserMenu, setAnchorUserMenu] = useState(false);
  const openUserMenu = Boolean(anchorUserMenu)

  const theme = useTheme()
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="static" elevation={3}>
      <Container maxWidth='lg'>
        <Toolbar>
          <Link href="/">
            <a style={{ flexGrow: 1, textDecoration: 'none', color: '#fff', display: 'flex' }}>
              <Image
                src="/images/logo-anunx-removebg.png"
                width={32}
                height={32}
                alt="Anunx"
              />
              <Typography variant="h6" component="div" sx={{ marginX: 1 }}>
                Anunx
              </Typography>
            </a>
          </Link>
          {smUp || !smUp && !session ? (
            <Link href={session ? '/user/publish' : '/auth/signin'} passHref>
              <Button color="inherit" variant="outlined" size='small'>
                {session ? 'Anunciar e Vender' : 'Entrar'}
              </Button>
            </Link>
          ) : null}
          {session && (
            <IconButton color='secondary' onClick={(e) => setAnchorUserMenu(e.currentTarget)} sx={{ paddingLeft: 2 }}>
              {
                session.user.image
                  ? <Avatar src={session.user.image} />
                  : <AccountCircle />
              }
              <Typography variant='subtitle2' sx={{ paddingLeft: 1 }}>
                {session.user.name}
              </Typography>
            </IconButton>
          )}
          <Box>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>

          <Menu
            anchorEl={anchorUserMenu}
            open={openUserMenu}
            onClose={() => setAnchorUserMenu(null)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
          >
            <Link href="/user/dashboard">
              <MenuItem>Meus Anúncios</MenuItem>
            </Link>
            <Link href="/user/publish">
              <MenuItem>Publicar novo anúncio</MenuItem>
            </Link>
            <Divider />
            <MenuItem onClick={() => signOut({
              callbackUrl: '/'
            })}>
              Sair
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
