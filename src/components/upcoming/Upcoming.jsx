import React from "react"
import { Link } from "react-router-dom"
import Ucard from "./Ucard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './ucard.css'

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
const Upcomming = ({ items, title, className }) => {
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
      <section className={`upcome ${className}`}>
        <div className='container'>
          <div className='heading '>
            <h1>{title}</h1>
            <Link to='/'>View All</Link>
          </div>
          <div className='contents'>
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