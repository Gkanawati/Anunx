import { useState } from 'react';
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

export default function Header() {

  const [anchorUserMenu, setAnchorUserMenu] = useState(false);

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <AppBar position="static" elevation={3}>
      <Container maxWidth='lg'>
        <Toolbar>
          <Link href="/">
            <a style={{ flexGrow: 1, textDecoration: 'none', color: '#fff' }}>
              <Typography variant="h6" component="div" >
                Anunx
              </Typography>
            </a>
          </Link>
          <Link href="/user/publish" passHref>
            <Button color="inherit" variant="outlined">
              Anunciar e Vender
            </Button>
          </Link>
          <IconButton color='secondary' onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
            {
              true === false
                ? <Avatar src="" />
                : <AccountCircle />
            }
            <Typography variant='subtitle2' color='secondary' sx={{ paddingLeft: '6px' }}>
              Gabriel Kanawati
            </Typography>
          </IconButton>

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
            <MenuItem>Sair</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
