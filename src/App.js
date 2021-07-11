import {Fragment} from 'react'
import SearchBar from './components/SearchBar';
import ImagesBoard from './components/ImagesBoard';
import RecentSearch from './components/RecentSearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/*
Loading up the the componenets in order - Search Bar Header, Recent Search div, Image Board section to show the images
*/
function App() {
  return (
    <Fragment>
      <SearchBar />
      <RecentSearch />
      <ImagesBoard/>
    </Fragment>
   
  );
}

export default App;
