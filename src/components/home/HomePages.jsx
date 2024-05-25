import React, { useState } from 'react';
import Homes  from "./Homes"
import { latest, recommended, upcome } from '../../dummyData';
import Upcomming from '../upcoming/Upcoming';
import Trending from '../trending/Trending';

const HomePages = () => {
    const [items, setItems] = useState(upcome);
    const [item, setItem] = useState(latest);
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