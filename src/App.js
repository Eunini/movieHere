import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import HomePages from './components/home/HomePages';
import Footer from './components/footer/Footer';
import SinglePage from './components/watch/SinglePage';
import UpcomingMovies from './components/singlepage/UpcomingMovies';
import LatestMovies from './components/singlepage/LatestMovies';
import RecommendedMovies from './components/singlepage/RecommendedMovies';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<HomePages />} />
                <Route path='/upcoming' element={<UpcomingMovies />} />
                <Route path='/latest' element={<LatestMovies />} />
                <Route path='/trending' element={<RecommendedMovies />} />
                <Route path='/SinglePage/:id' element={<SinglePage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
