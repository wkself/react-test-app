import * as React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Box, IconButton } from '@mui/material';
import { ThemeProvider, createTheme, experimentalStyled } from '@mui/material/styles';
import { indigo, green } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import ResponsiveGrid from './components/ResponsiveGrid';

const theme = createTheme({
  palette: {
    primary: {
      main: indigo['A400'],
      contrastText: '#fff',
    },
    secondary: {
      main: green['A400'],
      contrastText: '#000',
    },
  },
});

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <main>
          <div>
            <Container maxWidth="sm">
              <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                This is another update
              </Typography>
              <Typography variant="h5" align='center' color='textSecondary' paragraph>
                Hello everyone, you must be wondering why I've gathered you here today. The fire nation is under siege and now is our only chance to claim victory! The water nation's south pole militia is en route to the western border. We will meet them there and 
              </Typography>
            </Container>
          </div>
          <ResponsiveGrid>
            
          </ResponsiveGrid>
        </main>
      </ThemeProvider>
    </>
  );
}


export default App;