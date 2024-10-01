
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import MovieList from './Components/Movie/Movielist/MovieList';
import MovieDetail from './Components/Movie/Moviedetail/MovieDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />}/>
          <Route path="/search/:id" element={<MovieDetail />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
