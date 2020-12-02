import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";
const styles = {
  ...imagesStyles,
  cardTitle,
  textMuted: {
  color: "#6c757d"
  },
};

const useStyles = makeStyles(styles);

export default function Cards(props) {
  const classes = useStyles();
  return(
    <div>
      <Card>
        <img src={props.image} height="200px" className={classes.imgCardTop}  alt="Card-img-cap" />
        <CardBody>
          <h4 className={classes.cardTitle}>{props.cardtitle}</h4>
          <p>{props.para}</p>
        </CardBody>
      </Card>
      {/* <Card>
        <CardBody>
          <h4 className={classes.cardTitle}>Card title</h4>
          <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p>
        </CardBody>
        <img className={classes.imgCardBottom} src="..." alt="Card-img-cap" />
      </Card> */}
    </div>
  );
};