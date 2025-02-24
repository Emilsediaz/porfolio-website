import { makeStyles, Typography, Paper, Button, TextField } from "@material-ui/core";
import React from 'react';
//import {useState} from 'react';
//import { useStyles } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

// const Contacto = ({title, id, dark}) => {
//   const classes = useStyles();
//     //const Contacto = () => {
//       //const form = useRef();
//       //const [formData, setFormData] = useState({
//         //nombre: "",
//         //email: "",
//         //mensaje: "",
//       //});
//       //const handleChange = (e) => {
//         //const { name, value } = e.target;
//         //setFormData ({
//           //...formData({
//             //[name]: value
//           //}),
//         //});
//       //};
//     //}



//     return (
//     <div className={`${classes.section} ${dark && classes.sectiondark}`}>
//         <div className={ classes.sectioncontent} id={id}>
//         <Typography variant="h3">{title}</Typography>
//         <Paper className={classes.root}>
//         <div className={classes.titleandchoices}>
//         <Typography variant="h5">CONTACTA ME</Typography>
        
//         </div>
//         <form className={ classes.form } noValidate autoComplete="off">
//           <TextField label="Tu nombre"/>
//           <TextField label="Tu email" name="email"/>
//           <TextField label="Escribe un mensaje" name="email"/>
//         </form>
//         <Button variantgit ="contanied">Submit</Button>
//         </Paper>
//       </div>
//     </div>
//   )
// }

// const useStyles = makeStyles((theme) => ({
//     section:{
//       minHeight: "100vh",
//       display: "flex",
//       flexDirection: "column",
//       judtifyContent: "flex-start",
//       alignItems: "center",

//     },
//     sectiondark: {
//         background: "#333",
//         color: "#fff",
//     },
//     root: {
//       marginTop: theme.spacing(4),
//       background: "#FF9CEE",
//       color: "#fff",
//       fontSize: "1.2rem",
//       maxWidth: "500px",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "space-between",
//       padding: theme.spacing(4),
//       "& button": {
//         backgroundColor: "#fff",
//         color: "tomato",
//         fontWeight: 900,
//         fontSize: "1.2rem",
//         marginTop: theme.spacing(4)
//       },
//     "& button:hover": {
//       backgroundColor: theme.palette.primary.main,
//       color: "#fff",
//       }
//     },
//     sectioncontent: {
//       maxWidth: "80vw",
//     },
//     titleandchices: {
//       "& h5": {
//         marginTop: theme.spacing(2),
//       }
//     },
//     form:{
//       display: "flex",
//       flexDirection: "column",
//       "& input": {
//         marginBottom: theme.spacing(1)
//       }
//     },
//   }))


// export default Contacto;


const Contacto = ({title, id, dark}) => {
const form = useRef();
//const classes = useStyles();

  const sendEmail = (e) => {
    e.preventDefault();
    //const Contacto = ({title, id, dark}) => {
     // const classes = useStyles();

    emailjs
      .sendForm('service_wrxsgye', 'template_a10euc3', form.current, {
        publicKey: '3i5AcZ2pEecI_AZsE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  
 //const Contacto = () => {
const classes = useStyles();


return (
<div className={`${classes.section} ${dark && classes.sectiondark}`}>
<div className={ classes.sectioncontent} id={id}>
<Typography variant="h3">{title}</Typography>
<Paper className={classes.root}>
<div className={classes.titleandchoices}>
<Typography variant="h5">CONTACTA ME</Typography>
                
</div>
{/* <form ref={form} onSubmit={sendEmail} className={ classes.form } noValidate autoComplete="off">
<TextField label="Tu nombre" type="text" name="user_name"/>          
<TextField label="Tu email" type="email" name="user_email"/>
<TextField label="Escribe un mensaje" type="text" name="menssage"/>
</form> */}
<form ref={form} onSubmit={sendEmail}className={ classes.form } noValidate autoComplete="off">
  <TextField
      label="Name"
      name="user_name"/>
      <TextField
      label="Email"
      name="user_email" 
      type="email"/>
      <TextField
      label="Message"
      name="message"/>
      <Button variantgit ="contanied" type="submit" value="Send">Submit</Button>
    </form>
</Paper>
</div>
</div>
)
};

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
      marginTop: theme.spacing(4),
      }
      },
      form:{
        display: "flex",
        flexDirection: "column",
        "& input": {
        marginBottom: theme.spacing(1)
      }
      },
    }))
  
  




export default Contacto;