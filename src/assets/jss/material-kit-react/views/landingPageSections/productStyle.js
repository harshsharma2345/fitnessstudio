import { title } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    padding: "30px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    fontSize: "3rem"

  },
  description: {
    color: "#999"
  },
  galleryheading:
  { ...title,
    display:"flex",
    justifyContent:"center",
    
  }
};

export default productStyle;
