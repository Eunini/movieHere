import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=d7a200f4';



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('spiderman');
    }, []);

    return(
        <div className='app'>
            <h1>MovieHere</h1>

            <div className='search'>
                <input 
                placeholder='search for movies'
                value={searchTerm}
                onChange={(e) =>setSearchTerm(e.target.value)}
                />

               <img 
                src={searchIcon}
                alt='search icon'
                onClick={() => searchMovies(searchTerm)}
                /> 
            </div>

{/* C:\Users\Eunice Atanda\OneDrive\my_react_course\src */}
{/* create a dynamic block here */}
            {
                movies?.length > 0
                ? (
                    <div className='container'>
                        {
                        movies.map((movie, index) => (
                            <MovieCard  key={index} movie={movie}/>
                        ))
                        };
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
        </div>
    );
}


export default App;