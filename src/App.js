import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import {action, ComedyMovies, HorrorMovies, originals} from '../src/Constants'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title="Originals" islarge/>
      <RowPost url={action} title="Action"/>
      <RowPost url={ComedyMovies} title="Comedy"/>
      
    </div>
  );
}

export default App;
