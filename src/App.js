import {Fragment} from 'react'
import SearchBar from './components/SearchBar';
import ImagesBoard from './components/ImagesBoard';
import RecentSearch from './components/RecentSearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
