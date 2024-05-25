import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './App.css';
import SinglePage from "./components/watch/SinglePage";
import HomePages from "./components/home/HomePages";
import Footer from './components/footer/Footer';

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
