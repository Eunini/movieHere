import React, { useState } from 'react';
import Homes  from "./Homes"
import { latest, recommended, upcome } from '../../dummyData';
import Upcomming from '../upcoming/Upcoming';
import Trending from '../trending/Trending';

const HomePages = () => {
    const [items, setItems] = useState(upcome);
    const [item, setItem] = useState(latest);
    const [rec, setRec] = useState(recommended);

    return (
        <>
            <Homes />
            <Upcomming items={items} title='Upcoming Movies' className='upcoming-movies' />
            <Upcomming items={item} title='Latest Movies' className='latest-movies' />
            <Trending />
            <Upcomming items={rec} title='Trending Movies' className='recommended-movies' />
        </>
    );
};

export default HomePages;
    