import { makeStyles, Typography, Paper, TextField, Button} from "@material-ui/core";
//import React from 'react';
//import React, { useState } from 'react'

const Contacto = ({title, id, dark}) => {
    const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
       <div className={ classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Paper className={classes.root}>
        <div className={classes.titleandchoices}>
        <Typography variant="h5">CONTACTA ME</Typography>
        
        </div>
        <form className={ classes.form } noValidate autoComplete="off">
          <TextField label="Tu nombre"/>
          <TextField label="Tu email"/>
          <TextField label="Escribe un mensaje"/>
        </form>
        <Button variantgit ="contanied">Submit</Button>
        </Paper>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      judtifyContent: "flex-start",
      alignItems: "center",

    },
    sectiondark: {
        background: "#333",
        color: "#fff",
    },
    root: {
      marginTop: theme.spacing(4),
      background: "#FF9CEE",
      color: "#fff",
      fontSize: "1.2rem",
      maxWidth: "500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: theme.spacing(4),
      "& button": {
        backgroundColor: "#fff",
        color: "tomato",
        fontWeight: 900,
        fontSize: "1.2rem",
        marginTop: theme.spacing(4)
      },
     "& button:hover": {
       backgroundColor: theme.palette.primary.main,
        color: "#fff",
      }
    },
    sectioncontent: {
      maxWidth: "80vw",
    },
    titleandchices: {
      "& h5": {
        marginTop: theme.spacing(2),
      }
    },
    form:{
      display: "flex",
      flexDirection: "column",
      "& input": {
        marginBottom: theme.spacing(1)
      }
    }
  }))

export default Contacto
