import React, { useState, useEffect } from 'react';
import Home from "../home/Home"
import "./Trending.css"
import { trending } from '../../dummyData';

const Trending = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      if (trending && Array.isArray(trending)) {
        setItems(trending);
      } else {
        // Handle case where trending is not an array or is undefined/null
        setItems([]);
      }
    }, []);

  return (
    <>
      <section className='trending'>
        <Home items={items}/>
      </section>
    </>
  )
}

export default Trending