import { Fragment, useState } from "react";
import Imagecard from "./Imagecard";
import classes from "./../static/imageboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import  {fetchDataMiddleware}  from "../datastore/fetchDataMiddleware";
import { actionSet } from "../datastore/dataStore";
function ImagesBoard(props) {
  const [initialLoad, initilaLoadToggler] = useState(1);
  const imageDataDump = useSelector((state) => state.imageDataDump);
  const pageNumber = useSelector((state) => state.pageNumber);
  const searchQuery = useSelector((state) => state.searchQuery);
  const loader = useSelector((state) => state.loader);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  function infiniteScrollHandler(event) {
    const target = event.target;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      dispatch(actionSet.notificationHandler({loadingState:true,errorState:false}))
      var newPageNumber = pageNumber + 1
      if(searchQuery.length === 0){
        dispatch(fetchDataMiddleware("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=069842ef6228faba13d62a4841a5a65f&per_page=25&page="+newPageNumber+"&format=json&nojsoncallback=1",pageNumber+1,searchQuery))
    }else{
      dispatch(fetchDataMiddleware("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=069842ef6228faba13d62a4841a5a65f&tags="+searchQuery+"&per_page=25&page="+newPageNumber+"&format=json&nojsoncallback=1", pageNumber+1,searchQuery));
    }
  }
  }
  if (initialLoad === 1) {
    dispatch(fetchDataMiddleware("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=069842ef6228faba13d62a4841a5a65f&per_page=25&page=1&format=json&nojsoncallback=1",1,searchQuery));
    initilaLoadToggler(0);
  }
  return (
    <Fragment>
      <div className={classes.imageBoard} onScroll={infiniteScrollHandler}>
        {imageDataDump.map((imageData) => (
          <Imagecard key={imageData.id} imageData={imageData} />
        ))}
      </div>
      {loader && <div className = {classes.messages}>LOADING</div>}
      {error && <div className = {classes.messages}>ERROR</div>}
    </Fragment>
  );
}
export default ImagesBoard;
