import React, { useState } from 'react';
<<<<<<< HEAD
import Homes from "./Homes";
import { latest, recommended, upcome } from '../../dummyData';
import Upcoming from '../upcoming/Upcoming';
=======
import Homes  from "./Homes"
import { latest, recommended, upcome } from '../../dummyData';
import Upcomming from '../upcoming/Upcoming';
>>>>>>> 0c5fe7a8fe5ef5142ecbfc360060fe60633b98f9
import Trending from '../trending/Trending';

const HomePages = () => {
    const [items, setItems] = useState(upcome);
    const [item, setItem] = useState(latest);
<<<<<<< HEAD
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
=======
    const [rec, setrec] = useState(recommended);
  return (
    <>
       <Homes />
       <Upcomming items={items} title='Upcoming Movies'/>
       <Upcomming items={item} title='Latest Movies'/>
       <Trending />
       <Upcomming items={rec} title='Recommended Movies'/>
    </>
  )
} 

export default HomePages;
>>>>>>> 0c5fe7a8fe5ef5142ecbfc360060fe60633b98f9
