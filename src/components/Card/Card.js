// import React from "react";
// // material-ui components
// import { makeStyles } from "@material-ui/core/styles";
// // core components
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";

// import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

// import { cardTitle } from "assets/jss/material-kit-react.js";

// const styles = {
//   ...imagesStyles,
//   cardTitle,
//   textMuted: {
//     color: "#6c757d"
//   },
// };

// const useStyles = makeStyles(styles);

// export default function Cards() {
//   const classes = useStyles();
//   return(
//     <div>
//       <Card>
//         <img className={classes.imgCardTop} src="..." alt="Card-img-cap" />
//         <CardBody>
//           <h4 className={classes.cardTitle}>Card title</h4>
//           <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//           <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p>
//         </CardBody>
//       </Card>
//       <Card>
//         <CardBody>
//           <h4 className={classes.cardTitle}>Card title</h4>
//           <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//           <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p>
//         </CardBody>
//         <img className={classes.imgCardBottom} src="..." alt="Card-img-cap" />
//       </Card>
//     </div>
//   );
// };
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "assets/jss/material-kit-react/components/cardStyle.js";

const useStyles = makeStyles(styles);

export default function Card(props) {
  const classes = useStyles();
  const { className, children, plain, carousel, ...rest } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
  children: PropTypes.node
};
