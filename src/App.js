import './App.css';
import { Routes, Route } from 'react-router-dom';
import Catalogue from './Catalogue';
import MovieDetails from './MovieDetails';
import ErrorPage from './ErrorPage';

function App() {
    
  return (
    <div className="wrapper">
      <header>
        <h1>Hackflix</h1>
      </header>
      {/* create paths allowing us to render different things depending on the URL  */}
      <Routes>
        {/* show catalogue on default path  */}
        <Route path="/" element={ <Catalogue /> } />
        {/* show the MovieDetails component on /movie/:movieID, passing it the movie ID  */}
        <Route path="/movie/:movieID" element={ <MovieDetails /> } />
        {/* show the ErrorPage for routes that don't exist  */}
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </div>
  );
}

export default App;

