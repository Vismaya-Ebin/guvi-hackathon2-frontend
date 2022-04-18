import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@material-ui/core//Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export function Header(){
    const btnStyle = {
        marginLeft: "auto",
      };
    return(<div>
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

      Equipment Renting Shopping Cart

      <Button color="inherit" style={btnStyle}>
            Contact 
          
          </Button>
          <Button color="inherit" href="#/signin" style={btnStyle}>
            Sign In
          
          </Button>
      
          <Button color="inherit" style={btnStyle}>
            Cart <AddShoppingCartIcon />
            <Badge badgeContent={1} color="error">
          </Badge>
          </Button>
        
          
        </Toolbar>
      </AppBar></div>);
}