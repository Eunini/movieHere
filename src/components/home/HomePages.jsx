import React, { useState } from 'react';
import Homes from "./Homes";
import { latest, recommended, upcome } from '../../dummyData';
import Upcoming from '../upcoming/Upcoming';
import Trending from '../trending/Trending';

const HomePages = () => {
    const [items, setItems] = useState(upcome);
    const [item, setItem] = useState(latest);
    const [rec, setRec] = useState(recommended);

    return (
        <>
            <Homes />
            <Upcoming items={items} title='Upcoming Movies' className='upcoming-movies' />
            <Upcoming items={item} title='Latest Movies' className='latest-movies' />
            <Trending />
            <Upcoming items={rec} title='Trending Movies' className='recommended-movies' />
        </>
    );
};

export default HomePages;
