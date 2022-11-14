import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = (props:any) => {
  const { loginWithRedirect,isAuthenticated,user,logout } = useAuth0();
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {isAuthenticated?<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {`Welcome ${user?.name}`}
            </Typography>:<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Auth0 Demo
            </Typography>}
            {isAuthenticated?<Button color="inherit" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>:
            <Button color="inherit"onClick={() => loginWithRedirect()}>Login</Button>}
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

export default Navbar