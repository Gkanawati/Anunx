import { useState } from 'react';
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
} from '@mui/material'

import Link from 'next/link';
import { AccountCircle } from '@mui/icons-material';
import Image from 'next/image';

export default function Header() {

  const [session] = useSession()

  const [anchorUserMenu, setAnchorUserMenu] = useState(false);

  const openUserMenu = Boolean(anchorUserMenu)

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
          <Link href={session ? '/user/publish' : '/auth/signin'} passHref>
            <Button color="inherit" variant="outlined">
              Anunciar e Vender
            </Button>
          </Link>
          {session && (
            <IconButton color='secondary' onClick={(e) => setAnchorUserMenu(e.currentTarget)} sx={{ paddingLeft: 2 }}>
              {
                session.user.image
                  ? <Avatar src={session.user.image} />
                  : <AccountCircle />
              }
              <Typography variant='subtitle2' color='secondary' sx={{ paddingLeft: 1 }}>
                {session.user.name}
              </Typography>
            </IconButton>
          )}

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
