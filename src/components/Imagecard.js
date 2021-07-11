/*
Takes the image data consumed from the API and populated the images on card
*/
import Card from "react-bootstrap/Card";
import classes from "./../static/imagecard.module.css";
import Modal from "./Modal";
import {useState} from 'react'
function Imagecard(props) {
  const [showImageModal, imageModalHandler] = useState(false) // To manage the state of Modal
  const imageSource = "https://farm" + props.imageData.farm + ".staticflickr.com/" + props.imageData.server + "/" + props.imageData.id +"_" +props.imageData.secret +".jpg";
  function showModal(){
    imageModalHandler(true) //To show the Modal
  }
  function hideModal(){
    imageModalHandler(false) // To close the Modal
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
