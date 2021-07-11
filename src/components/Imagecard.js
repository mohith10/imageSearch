import Card from "react-bootstrap/Card";
import classes from "./../static/imagecard.module.css";
import Modal from "./Modal";
import {useState} from 'react'
function Imagecard(props) {
  const [showImageModal, imageModalHandler] = useState(false)
  const imageSource = "https://farm" + props.imageData.farm + ".staticflickr.com/" + props.imageData.server + "/" + props.imageData.id +"_" +props.imageData.secret +".jpg";
  function showModal(){
    imageModalHandler(true)
  }
  function hideModal(){
    imageModalHandler(false)
  }
  return ( 
    <Card className={classes.card}>
      <a onClick = {showModal}>
        <Card.Img className={classes.imageStyle} variant="top" src={imageSource}/>
      </a>
      {showImageModal && <Modal onClose = {hideModal}> <Card.Img className={classes.imageStyle}  variant="top" src={imageSource}/></Modal>}
    </Card>
  );
}

export default Imagecard;
