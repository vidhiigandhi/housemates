import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import HouseIcon from '@mui/icons-material/House';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Clicked on the button');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
            marginBottom: '200px',
          }}
        >
          <Avatar sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main'}}>
            <HouseIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ marginBottom: '50px' }}>
            Housemates
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '75%' }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, justifyContent: 'space-evenly', color: '#000', backgroundColor: '#fff' }}
            >
              <GoogleIcon/>
              Sign In with Google
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, justifyContent: 'space-evenly', color: '#000', backgroundColor: '#fff' }}
            >
              <AppleIcon
                sx={{ marginRight: '10px' }}
              />
              Sign In with Apple
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, justifyContent: 'space-evenly', color: '#000', backgroundColor: '#fff' }}
            >
              <PersonIcon/>
              Sign In with a token
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}