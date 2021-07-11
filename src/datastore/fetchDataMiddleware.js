/*
THUNK to get all the API actions dispatched by components, which fetches data from API and pass to reducers
*/
import axios from "axios";
import { actionSet } from "./dataStore";
export const fetchDataMiddleware = (url, pageNumber,searchQuery) => {
  
  return (dispatch) => {
    const fetchData = async () => {
      var config = {
        method: "get",
        url: url,
        headers: {
          Cookie:
            "xb=996328; localization=en-us%3Bin%3Bin; flrbp=1625680908-81d7e85d327f0addedb95651c1457e6110a53145; flrbs=1625680908-236167a47b27d261dc08f11a9a40a0f5c2e6eb01; flrbgrp=1625680908-ec2fddc0322743d30114601b950a2e07af14c0f0; flrbgdrp=1625680908-b220ec9eb55f99ca5fb79c2aaf42c2d3567a5fea; flrbgmrp=1625680908-1461a6ed2415abfc7dcfbd7c420eee423a8d254e; flrbrst=1625680908-cb97dca0e4f4b752c1a8b7a320d48d5ea8d220b0; flrtags=1625680908-5686ae2fc0db37ed5511ae03efa66f2975aa8233; flrbrp=1625680908-8ecd1abf7c2d60266f32bc783f3f040a640d14a7; flrbrgs=1625680908-42bba8d9f7cf670ae588ecdf7d875d37908fb30f; ccc=%7B%22needsConsent%22%3Afalse%2C%22managed%22%3A0%2C%22changed%22%3A0%2C%22info%22%3A%7B%22cookieBlock%22%3A%7B%22level%22%3A0%2C%22blockRan%22%3A0%7D%7D%7D",
        },
      };
      axios(config)
        .then(function (response) {
          //Dispatches data to reducers in dataStore.js
          dispatch(actionSet.fetchData({imageDataDump:response.data.photos.photo,pageNumber:pageNumber,searchQuery:searchQuery}));
          //To store local Storage data for recent searches
          if(searchQuery.length >2){
            let key = 'recentSearch'+(Math.floor(Math.random()*6)+1)
            localStorage.setItem(key,searchQuery)
          }
        })
        .catch(function (error) {
          //Erro state handlers
          dispatch(actionSet.notificationHandler({loadingState:false,errorState:true}))
        });
    };
    fetchData();
    
  };
};
