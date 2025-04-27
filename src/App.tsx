import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Menu from './components/Menu.tsx';
import Room from './components/Room.tsx';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 80;
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Menu', id: 'menu' },
    { label: 'Rooms', id: 'room' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const drawer = (
    <Box sx={{ width: "auto", margin: "0", padding: "0" }} role="presentation">
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.id} onClick={() => scrollToSection(item.id)}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyWebsite
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            navItems.map((item) => (
              <Button key={item.id} color="inherit" onClick={() => scrollToSection(item.id)}>
                {item.label}
              </Button>
            ))
          )}
        </Toolbar>
      </AppBar>

      <Toolbar />

      <Box>
        <Home />
        <Menu />
        <Room/>
        <About />
      </Box>

    </>
  );
}

export default App;
