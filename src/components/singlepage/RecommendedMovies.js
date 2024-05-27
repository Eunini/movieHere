// RecommendedMovies.js
import React, { useState } from 'react';
import { recommended } from '../../dummyData';
import Upcoming from '../upcoming/Upcoming';

const RecommendedMovies = () => {
    const [rec, setRec] = useState(recommended);

    return (
        <div>
            <Upcoming items={rec} title='Recommended Movies' className='recommended-movies' />
        </div>
    );
}

export default RecommendedMovies;