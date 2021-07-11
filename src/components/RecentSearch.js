import classes from './../static/recentsearch.module.css'
import Button from "../ui/Button";
import { Fragment } from "react";
function RecentSearch() {
  const keySet = ['recentSearch1','recentSearch2','recentSearch3','recentSearch4','recentSearch5'];
  const valueSet = [localStorage.getItem('recentSearch1'),localStorage.getItem('recentSearch2'),localStorage.getItem('recentSearch3'),localStorage.getItem('recentSearch4'),localStorage.getItem('recentSearch5')]
  return(
      <Fragment>
        <div className = {classes.recentsearch}>Recent Searches {valueSet.filter(valueSetItem => valueSetItem!== null).map((valueSetItem,index) => <Button key = {keySet[index]} value = {valueSetItem}/>)}</div>
      </Fragment>
  )
}
export default RecentSearch;
