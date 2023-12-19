import React from 'react';
import {  MuiThemeProvider, makeStyles, createMuiTheme } from "@material-ui/core";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";
import MyWork from "./components/MyWork.js";
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
      <About title="About Me" id="about" dark={true} />
      <Skills title="My Coding Journey" id="skills" dark={false} />
      <MyWork title="My Work" id="work" dark={true} />
      <Contact title="You can contact me at..." id="contact" dark={false} />
    </div>
    </MuiThemeProvider>

  );
}
const useStyles = makeStyles((theme) => ({
  root:{

  }
}))


export default App;
