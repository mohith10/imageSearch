import { useDispatch } from "react-redux";
import { actionSet } from "../datastore/dataStore";
import { fetchDataMiddleware } from "../datastore/fetchDataMiddleware";
import classes from './../static/button.module.css'
function Button(props) {
    const dispatch = useDispatch();
    function recentSearchInjector(){
            dispatch(actionSet.clearImageDump())
            dispatch(fetchDataMiddleware("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=069842ef6228faba13d62a4841a5a65f&tags="+props.value+"&per_page=25&page=1&format=json&nojsoncallback=1",1,props.value));
    } 
    return <button className = {classes.button} onClick= {recentSearchInjector} >{props.value}</button>;
}
export default Button;
