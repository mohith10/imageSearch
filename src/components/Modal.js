/*
Fetches the data from Image card and show the image accordingly on Modal
*/
import classes from './../static/modal.module.css'
import { Fragment } from 'react'
import ReactDOM from 'react-dom'
const Backdrop = props => {
    // If we click on backdrop, modalClose function will be called 
    return (
        <div className = {classes.backdrop} onClick = {props.onClose}></div> 
    )
    
}
const ModalOverlay = props => {
    //Modal populates the data accroding to Image that is clicked
    return (
        <div className = {classes.modal}>
            <div className = {classes.content}> {props.children} </div> 
        </div>
    )
}
const portalElement = document.getElementById('overlays') //fetched 'overlays' id from index.html
function Modal(props){
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose = {props.onClose} />,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    

    )
}
export default Modal