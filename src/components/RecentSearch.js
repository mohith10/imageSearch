/*
Keep a track of 5 recent searches by storing them in local storage so user can pick them up when he opens in brownser next time
*/
import classes from './../static/recentsearch.module.css'
import Button from "../ui/Button";
import { Fragment } from "react";
function RecentSearch() {
  const keySet = ['recentSearch1','recentSearch2','recentSearch3','recentSearch4','recentSearch5'];
  const valueSet = [localStorage.getItem('recentSearch1'),localStorage.getItem('recentSearch2'),localStorage.getItem('recentSearch3'),localStorage.getItem('recentSearch4'),localStorage.getItem('recentSearch5')]
  //array.filter filters out the null value from local storage and populate on the division
  return(
      <Fragment>
        <div className = {classes.recentsearch}>Recent Searches {valueSet.filter(valueSetItem => valueSetItem!== null).map((valueSetItem,index) => <Button key = {keySet[index]} value = {valueSetItem}/>)}</div>
      </Fragment>
  )
}
export default RecentSearch;
