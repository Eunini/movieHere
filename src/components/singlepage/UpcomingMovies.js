// UpcomingMovies.js
import React, { useState } from 'react';
import { upcome } from '../../dummyData';
import Upcoming from '../upcoming/Upcoming';

const UpcomingMovies = () => {
    const [items, setItems] = useState(upcome);

    return (
        <div>
            <Upcoming items={items} title='Upcoming Movies' className='upcoming-movies' />
        </div>
    );
}

export default UpcomingMovies;