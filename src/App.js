import React from 'react';
import {  MuiThemeProvider, makeStyles, createMuiTheme } from "@material-ui/core";
import Navbar from "./components/Navbar.js";
import Acerca from "./components/Acerca de mi.js";
import Habilidades from "./components/Habilidades.js";
import Contacto from "./components/Contacto.js";
import MiTrabajo from "./components/MiTrabajo.js";
import { purple } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette:{
    primary: { main: purple[500] },
    secondary: { main: "#333"}
  }
})

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
<div className={classes.root}>
      <Navbar />
      <Acerca title="Acerca de mi" id="acerca" dark={true} />
      <Habilidades title="Habilidades" id="habilidades" dark={false} />
      <MiTrabajo title="Mi Trabajo" id="Trabajo" dark={true} />
      <Contacto title="You can contact me at..." id="contacto" dark={false} />
    </div>
    </MuiThemeProvider>

  );
}
const useStyles = makeStyles((theme) => ({
  root:{

  }
}))


export default App;
