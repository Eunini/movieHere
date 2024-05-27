import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
<<<<<<< HEAD
import HomePages from './components/home/HomePages';
import Footer from './components/footer/Footer';
import SinglePage from './components/watch/SinglePage';
import UpcomingMovies from './components/singlepage/UpcomingMovies';
import LatestMovies from './components/singlepage/LatestMovies';
import RecommendedMovies from './components/singlepage/RecommendedMovies';
import './App.css';
=======
import './App.css';
import SinglePage from "./components/watch/SinglePage";
import HomePages from "./components/home/HomePages";
import Footer from './components/footer/Footer';
>>>>>>> 0c5fe7a8fe5ef5142ecbfc360060fe60633b98f9

const App = () => {
    return (
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<HomePages />} />
            <Route path='/SinglePage/:id' component={SinglePage} exact />
          </Routes>
          <Footer />
        </Router>
      );
}

export default App;
