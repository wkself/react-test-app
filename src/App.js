import * as React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { indigo, green } from '@mui/material/colors';

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
        <AppBar position="relative" color='primary'>
          <Toolbar>
            <MonetizationOnRoundedIcon />
            <Typography variant="h6">
              Welcome to the test app!
            </Typography>
          </Toolbar>
        </AppBar>
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
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;