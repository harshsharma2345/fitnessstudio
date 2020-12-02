import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from "components/CustomButtons/Button.js";
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
   
  },
  paper: {
    backgroundColor: 'transparent',
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    width:'80vw',
    height:'80vh',
     
  },
  buttontext:
  {fontSize:'20px',
  fontWeight:'Bold',
  display:'flex',
  margin:'auto'},

  
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    
    <div>

      <Button color="danger"
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleOpen}>
                <i className="fas fa-play" />
               <p className={classes.buttontext}
              
               >Gym Tour</p>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          
          <ReactPlayer controls height='80vh' width='80vw' url="https://youtu.be/oAM6H2LqT6A" playing="true"  />
          </div>
    
  


          
        
          
        </Fade>
        
      </Modal>
    </div>
  );
}
