import React, { useState, useEffect } from 'react';
import Home from "../home/Home"
import "./Trending.css"
import { trending } from '../../dummyData';

<<<<<<< HEAD
const Trending = ({ className }) => {
=======
const Trending = () => {
>>>>>>> 0c5fe7a8fe5ef5142ecbfc360060fe60633b98f9
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
<<<<<<< HEAD
      <section className={`trending ${className}`}>
=======
      <section className='trending'>
>>>>>>> 0c5fe7a8fe5ef5142ecbfc360060fe60633b98f9
        <Home items={items}/>
      </section>
    </>
  )
}

export default Trending