import "./App.css";

import AppBar from "@material-ui/core/AppBar";
import { Product } from "./components/product";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@material-ui/core//Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function App() {
  const btnStyle = {
    marginLeft: "auto",
  };
  return (
    <div className="App">
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

          <Button
            color="inherit"
            onClick={() => {
              // history.push("/");
            }}
          >
            Product
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              // history.push("/movies/add");
            }}
          >
            Contact
          </Button>

          <Button color="inherit" style={btnStyle}>
            Cart <AddShoppingCartIcon />
          </Button>
        </Toolbar>
      </AppBar>

      <Product />
    </div>
  );
}

export default App;
