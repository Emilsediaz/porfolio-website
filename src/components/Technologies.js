import React from 'react';
import CSS from "../images/CSS.jpg";
import HTML from "../images/HTML.jpg";
import Javascript from "../images/JavascriptES6.jpg";
import MYSQL from "../images/MYSQL.jpg";
import react from "../images/React.jpg";
import Sequelize from "../images/Sequelize.jpg";
import next from "../images/next.jpg";
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineContent  } from "@material-ui/lab";
import { Typography, makeStyles, Paper } from '@material-ui/core';
import StarRating from './StarRating';




const Technologies = () => {
const classes= useStyles()
const skills = [
  {
    year: "2022",
    src: CSS,
    title: "CSS",
    stars: 4,
  },
  {
    year: "2022",
    src: HTML,
    title: "HTML",
    stars: 4,
  },
  {
    year: "2022",
    src: Javascript,
    title: "Javascript ES6",
    stars: 3,
  },
  {
    year: "2022",
    src: MYSQL,
    title: "MYSQL",
    stars: 4,
  },
  {
    year: "2022/2023",
    src: react,
    title: "React",
    stars: 4,
  },
  {
    year: "2022",
    src: Sequelize,
    title: "Sequelize",
    stars: 4,
  },
  {
  year: "2024",
  src: next,
  title: "next",
  stars: 4,
}, 
];

  return (
    <Timeline align="left">
        {
          skills.map(({year, src, title, stars}, index)=> (
         <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="h6" color="textSecondary">
              {year}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <img src={src} alt={title} className={classes.customlogo} />
            <TimelineConnector/>         
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                {title}
                  </Typography>
                  <StarRating stars={stars}/>
                </Paper>
          </TimelineContent>
          </TimelineItem>
          ))
        }
    </Timeline>
  )
}

const useStyles = makeStyles((theme) => ({
  customlogo:{
     width:"40px",
    },
    paper:{
      padding: "6ps 16px",
      maxwidth: "200px",
    }
}))

export default Technologies
