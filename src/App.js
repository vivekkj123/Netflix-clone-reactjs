import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import {action, ComedyMovies, Documentaries, HorrorMovies, originals, RomanceMovies} from '../src/Constants'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title="Originals" islarge/>
      <RowPost url={action} title="Action"/>
      <RowPost url={ComedyMovies} title="Comedy"/>
      <RowPost url={HorrorMovies} title="Horror"/>
      <RowPost url={RomanceMovies} title="Romance"/>
      <RowPost url={Documentaries} title="Documentaries"/>



    </div>
  );
}

export default App;
