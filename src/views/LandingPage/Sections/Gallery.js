
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components

// // core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
// //carousel images

import image5 from "assets/img/carousel/image5.jpg";
import image6 from "assets/img/carousel/image6.jpg";
import image7 from "assets/img/carousel/image7.jpg";
import image8 from "assets/img/carousel/image8.jpg";
import image9 from "assets/img/carousel/image9.jpg";
import image10 from "assets/img/carousel/image10.jpg";

//Grid Images
import File1 from "assets/img/File1.jpg";
import File2 from "assets/img/File2.jpg";
import File3 from "assets/img/File3.jpg";
import File4 from "assets/img/File4.jpg";
import File5 from "assets/img/File5.jpg";
import File6 from "assets/img/File6.jpg";
import File7 from "assets/img/File7.jpg";
import File8 from "assets/img/File8.jpg";
import File9 from "assets/img/File9.jpg";



import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import imagesStyles from 'assets/jss/material-kit-react/imagesStyles';
import { cardTitle } from "assets/jss/material-kit-react.js";
import CardBody from "components/Card/CardBody.js";


const containerStyle = {
  width: '120vw',
  height: '60vh',
  marginLeft: '70px',
  padding: '0'

};





// export default function SectionCarousel() {
//   const classes = useStyles();


//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true
//   };
//   return (
//     <div className={classes.section}>
//       <h2 className={classes.title}>Gallery</h2>


//          <GridContainer>
//          <>
//           <Card>
//             <Carousel {...settings}>

//               <div>
//                 <img
//                   src={image5}
//                   alt="Third slide"
//                   className="slick-image"
//                 />


//               </div>
//               <div>
//                 <img
//                   src={image6}
//                   alt="Third slide"
//                   className="slick-image"
//                 />


//               </div>
//               <div>
//                 <img
//                   src={image7}
//                   alt="Third slide"
//                   className="slick-image"
//                 />


//               </div>
//               <div>
//                 <img
//                   src={image8}
//                   alt="Third slide"
//                   className="slick-image"
//                 />


//               </div>
//               <div>
//                 <img
//                   src={image9}
//                   alt="Third slide"
//                   className="slick-image"
//                 />


//               </div>
//               <div>
//                 <img
//                   src={image10}
//                   alt="Third slide"
//                   className="slick-image"
//                 />


//               </div>


//             </Carousel>
//           </Card>







//       </GridContainer>
//     </div>
//   );


// }


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {

    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  GridAlignment: {
    display: "flex",
    margin: "auto",
    marginLeft: "6vw",

  },
  ImgStyle: {
    borderRadius: '10px',
    boxShadow: '10px 10px 10px lightgrey'
  }

}));

export default function AutoGrid() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <div className={classes.section}>
        <h2 style={{
          color: "#3C4858",
          margin: "1rem 0 0.875rem",
          fontSize: "3rem",
          marginTop: "0px",
          minHeight: "32px",
          fontFamily: "Roboto Slab, Times New Roman, serif",
          fontWeight: "700",
          marginBottom: "1rem",
          textDecoration: "none"
        }} className={classes.title}>Gallery</h2>
      </div>

      <Grid container spacing={3} className={classes.GridAlignment}>

        <Grid item xs>
          <img
            src={File1}
            alt="Third slide"
            className="slick-image"
            width="220vw"
            height='220vh'
            className={classes.ImgStyle}
          />

        </Grid>
        <Grid item xs>
          <img
            src={File2}
            alt="Third slide"
            className="slick-image"
            width="220vw"
            height='220vh'
            className={classes.ImgStyle}
          />        </Grid>
        <Grid item xs>
          <img
            src={File3}
            alt="Third slide"
            className="slick-image"
            width="220vw"
            height='220vh'
            className={classes.ImgStyle}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.GridAlignment}>
        <Grid item xs>
          <img
            src={File4}
            alt="Third slide"
            className="slick-image"
            width="220vw"
            height='220vh'
            className={classes.ImgStyle}
          />
        </Grid>
        <Grid item xs>
          <img
            src={File5}
            alt="Third slide"
            className="slick-image"
            width="220vw"
            height='220vh'
            className={classes.ImgStyle}
          />
        </Grid>
        <Grid item xs>
          <img
            src={File6}
            alt="Third slide"
            className="slick-image"
            width="220vw"
            height='220vh'
            className={classes.ImgStyle}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.GridAlignment}>
        <Grid item xs>
          <img
            src={File7}
            alt="Third slide"
            className="slick-image"
            width="220vw"
            height='220vh'
            className={classes.ImgStyle}
          />
        </Grid>
        <Grid item xs>
          <img
            src={File8}
            alt="Third slide"
            className="slick-image"
            width="220vw"
            height='220vh'
            className={classes.ImgStyle}
          />
        </Grid>
        <Grid item xs>
          <img
            src={File9}
            alt="Third slide"
            className="slick-image"
            width="220vw"
            height='220vh'
            className={classes.ImgStyle}
          />
        </Grid>
      </Grid>

    </div>
  );
}
