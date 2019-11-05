import React from 'react';
import Modal from '@material-ui/core/Modal';
import CreateIcon from '@material-ui/icons/Create';
import { useStyles } from "./style.js"
import CloseIcon from '@material-ui/icons/Close';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function SimpleModal(props) {

  const { title, cardId, listId, description, deleteCard } = props;

  // console.log("Props from CardModal:", props)

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <CreateIcon fontSize="inherit" opacity="0.5" type="button" onClick={handleOpen}/>
      </div>
      
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>


          <h2 id="simple-modal-title">{title}</h2>


          <p style={{fontSize: "3"}}>Blah blah blah</p>


          <p id="simple-modal-description">
            {description}
          </p>


          

          <SimpleModal />
          <p style={{fontSize: "small"}}>Delete card:</p>
          
          <CloseIcon onClick={() => deleteCard(listId, cardId)}/>

        </div>
      </Modal>
    </div>
  );
}