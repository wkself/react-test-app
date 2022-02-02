import * as React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
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
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </main>
    </>
  );
}

export default App;