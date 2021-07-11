/*
Loads up the search bar section. Consisting of input feild which listens to input when the user is TYPING
*/
import classes from "./../static/searchbar.module.css";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch } from "react-redux";
import  {fetchDataMiddleware}  from "../datastore/fetchDataMiddleware";
import { actionSet } from "../datastore/dataStore";
function SearchBar(props) {
  const dispatch = useDispatch()
  function searchQueryHandler(event){ //Listens to input of the user on every key stroke and make send out the data to Async THUNK i.e FetchDataMiddleware
    dispatch(actionSet.clearImageDump())
    dispatch(actionSet.notificationHandler({loadingState:true,errorState:false}))
    if(event.target.value.length>0){
      dispatch(fetchDataMiddleware("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=069842ef6228faba13d62a4841a5a65f&tags="+event.target.value+"&per_page=25&page=1&format=json&nojsoncallback=1",1,event.target.value));
    }
    else{  
      dispatch(fetchDataMiddleware("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=069842ef6228faba13d62a4841a5a65f&per_page=25&page=1&format=json&nojsoncallback=1",1,event.target.value));
    }
  } 
  return (
    <div className={classes.background}>
      <div className={classes.title}>CANVAS</div>
      <InputGroup >
        <input onChange = {searchQueryHandler} className={classes.searchBar} placeholder = 'Search Images...'></input>
      </InputGroup>
    </div>
  );
}

export default SearchBar;
