import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
//importing cards
import Cards from 'components/Card/Cards.js';
// importing images
import strength from '/Users/harshsharma/Downloads/material-kit-react-master/src/assets/img/strength.jpg'
import cardio from '/Users/harshsharma/Downloads/material-kit-react-master/src/assets/img/cardio.jpg'
import zumba from '/Users/harshsharma/Downloads/material-kit-react-master/src/assets/img/zumba.jpg'
import aerobics from '/Users/harshsharma/Downloads/material-kit-react-master/src/assets/img/Aerobics.jpg'
import boxing from '/Users/harshsharma/Downloads/material-kit-react-master/src/assets/img/boxing.jpg'
import nutrition from '/Users/harshsharma/Downloads/material-kit-react-master/src/assets/img/nutrition.jpg'


const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Services</h2>
          <h5 className={classes.description}>
            Fitness Studio is the best gym in the city. It is the most Spacious, Luxury, Packed with Being Strong
            equipments, Highly Qualified and Experienced personal trainers and Nutrition center inside it So that you
            won't miss a meal.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
              <Cards
                image={strength}
                cardtitle="Strength"
                para="We have all the Latest and world in class jerai equipments."
              />
            


          </GridItem>
          <GridItem xs={12} sm={12} md={4}>

            <Cards
              image={nutrition}
              cardtitle="Nutrition Cafe"
              para="We have all the Latest and world in class jerai equipments."

            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>

            <Cards
              image={cardio}
              cardtitle="Cardio"
              para="We have all the Latest and world in class jerai equipments."
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Cards
              image={zumba}
              cardtitle="Zumba"
              para="We have all the Latest and world in class jerai equipments."
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Cards
              image={aerobics}
              cardtitle="Aerobics"
              para="We have all the Latest and world in class jerai equipments."
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Cards
              image={boxing}
              cardtitle="Boxing"
              para="We have all the Latest and world in class jerai equipments."
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
