import { makeStyles, Typography, Grid, Card, CardMedia, CardContent } from "@material-ui/core";
import React from 'react';
import mockData from "../mockData";
import Link from '@material-ui/core/Link'



const MiTrabajo = ({title, id, dark}) => {
    const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h4">{title}</Typography>
        <Grid container className={classes.grid}>
          {
            mockData.map(({ title, image, link }, index) =>(
              <Grid item Key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                <CardMedia image={image} className={classes.caratula} titlo="caratula"/>
                <CardContent>
                  <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                    {title}
                  </Link>
                </CardContent>


                </Card>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    section:{
        minHeight: "100vh",

    },
    sectiondark: {
        background: "#333",
        color: "#fff",
    },
    sectioncontent:{
    maxWidth: "90vw",
    margin: "0 auto",
    padding: theme.spacing(5),
      },
    grid: {
      marginTop: theme.spacing(10),
    },
    card: {
      maxWidth: 345,
      minHeight: 275,
      margin: theme.spacing(3),
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: "0 0 0 4px #F6A6FF",
        transform: "translateY(-5px)",
      },
    },
    caratula: {
        height: 200,
        backgroundSize: "contain",
        backgroundPosition: "center",
      },
  }))

export default MiTrabajo
