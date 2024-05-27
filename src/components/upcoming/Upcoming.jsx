import React from "react"
import { Link } from "react-router-dom"
import Ucard from "./Ucard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
<<<<<<< HEAD
import './ucard.css'
=======
>>>>>>> 0c5fe7a8fe5ef5142ecbfc360060fe60633b98f9

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i class='fa fa-chevron-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i class='fa fa-chevron-left'></i>
      </button>
    </div>
  )
}
<<<<<<< HEAD
const Upcomming = ({ items, title, className }) => {
=======
const Upcomming = ({ items, title }) => {
>>>>>>> 0c5fe7a8fe5ef5142ecbfc360060fe60633b98f9
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
<<<<<<< HEAD
      <section className={`upcome ${className}`}>
        <div className='container'>
          <div className='heading '>
            <h1>{title}</h1>
            <Link to='/'>View All</Link>
          </div>
          <div className='contents'>
=======
      <section className='upcome'>
        <div className='container'>
          <div className='heading flexSB'>
            <h1>{title}</h1>
            <Link to='/'>View All</Link>
          </div>
          <div className='content'>
>>>>>>> 0c5fe7a8fe5ef5142ecbfc360060fe60633b98f9
            <Slider {...settings}>
              {
              items.map((item) => {
                return (
                  <>
                    <Ucard key={item.id} item={item} />
                  </>
                )
              })
              }
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Upcomming