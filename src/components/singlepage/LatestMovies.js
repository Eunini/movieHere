// LatestMovies.js
import React, { useState } from 'react';
import { latest } from '../../dummyData';
import Upcoming from '../upcoming/Upcoming';

const LatestMovies = () => {
    const [item, setItem] = useState(latest);

    return (
        <div>
            <Upcoming items={item} title='Latest Movies' className='latest-movies' />
        </div>
    );
}

export default LatestMovies;