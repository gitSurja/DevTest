import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import Link from '@mui/material/Link';

import logoLarge from './../assets/logo/logoLarge.png'
import { routerPaths } from '../router/routerConfig';
import { Link as RouterLink } from "react-router-dom";

const settings = ['Profile', 'Settings', 'Logout'];
interface NavBar {
  isLoggedIn?: boolean,
}
function NavBar({isLoggedIn} : NavBar) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* HEADER LEFT */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link component={RouterLink} to={'.'} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={logoLarge} />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'center',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                position: 'absolute',
                top: '5%',
              }}
            >
              {routerPaths.map((path) => {
                if (isLoggedIn && path.path.includes('login')) {
                  return;
                } else {
                  return(
                    <MenuItem key={path.id}>
                      <Link key={path.id} component={RouterLink} to={path.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button sx={{ color: 'text.primary' }}>
                          {path.label}
                        </Button>
                      </Link>
                    </MenuItem>
                  )
                }
                })}
            </Menu>
          </Box>
          {/* HEADER CENTER */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <img src={logoLarge} />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4  }}>
            {routerPaths.map((path) => {
              if (isLoggedIn && path.path.includes('login')) {
                return;
              } else {
                return (
                  <Link key={path.id} component={RouterLink} to={path.path}>
                    <Button sx={{ color: 'text.primary' }}>
                      {path.label}
                    </Button>
                  </Link>
                )
              }
              })}
            <Button variant={'contained'}>Free Post Property</Button>
          </Box>
          {/* HEADER RIGHT */}
          {isLoggedIn && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ alignItems: 'center' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;