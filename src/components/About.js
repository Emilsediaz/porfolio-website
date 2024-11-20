import { Button, CardMedia, Card, Typography, makeStyles, CardContent, CardActions } from "@material-ui/core";
import React from 'react';
import Emilse from "../images/Emilse.jpg";
import TypeWriterEffect from "react-typewriter-effect"
import pdf from "../images/CV PROGRAMADOR.pdf";


const About = ({title, id, dark}) => {
  const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`} >
      <div className={ classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Card className={classes.card}>
          <CardMedia image={Emilse} className={classes.media} title="picture"/>
        <CardContent className={classes.cardcontent}>
         <TypeWriterEffect 
          text="Hola, soy Emilse Diaz"
          textStyle={{ fontSize: "3rem", fontWeight:"700px", color:"#F6A6FF"}}
          startDelay={100}
          cursorColor="black"
          typeSpeed={100}
        /> 
        <TypeWriterEffect 
          text="Desarrollador web full stack"
          textStyle={{ fontSize: "1.2rem", fontWeight:"500px" }}
          startDelay={2500}
          cursorColor="black"
          typeSpeed={100}
        /> 
        <Typography variant="h6" color="textSecondary">
          Desarrolador Web en la busqueda de nuevos conocimientos con ambicion de mejorar profesionalmente, para potenciar mi desarrollo humano y academico, y de esta manera poder brindar a la empresa un buen rendimiento y compromiso laboral
        </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" 
          className={classes.pdfbutton}>
            <a href={pdf} download>
            Download Cv
            </a>
            
            </Button>
        </CardActions>
        </Card>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",

    },

    sectiondark: {
        background: "#333",
        color: "#fff",
    },

    sectioncontent: {
      maxWidth: " 80vw",
      margin: "0 auto",
    },

    card: {
      height: "70vh",
      display: "flex",
      marginTop: theme.spacing(6),
      position: "relative",
    },

    media: {
      width: "250px",
      height: "auto",
      objectFit: "cover",
      borderRadius: "10px",
      margin: theme.spacing(5),

    },
    cardcontent:{
      marginTop: theme.spacing(2),
      "& h6": {
        marginTop: theme.spacing(6),
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
    },
    pdfbutton:{
      position: "absolute",
      bottom: "5rem",
      right: "4rem",
      [theme.breakpoints.down("sm")]: {
        bottom: "2.5rem",
        right: "1rem",
      },
      backgroundColor: "#FF9CEE",
      padding: theme.spacing(3),
      "&:hover": {
        backgroundColor: "#fff",
      },
      "& a": {
        color: "#fff",
        textDecoration: "none",
        fontWeight: 900, 
      },
      "& a:hover": {
        color: "#EC7063",
      },

    },
  }))


export default About
