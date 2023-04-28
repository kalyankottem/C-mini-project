import React from 'react'
import './Assets/shop.css'
import Carousel from 'nuka-carousel';
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import wg from './Assets/wineglasses.jpg'
import mug from './Assets/mug.jpg'
import bt from './Assets/bottle.jpg'
import pc from './Assets/pc.jpg'

const Shop = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='shop-container'>
        <div className="shop-main">
            <div className="shop-top">
                <div className="top-txt">Newest <br></br> Arrivals</div>
                <div className="categories">
                    <div className="cat">Snap 'n Sass Phone Case</div>
                    <div className="cat">Pop 'n Party</div>
                    <div className="cat">Chug 'n Chill Mugs</div>
                    <div className="cat">Swirl 'n Sip Wine Glasses</div>
                    <div className="cat">Glitz 'n Glam Jewelry Box</div>
                </div>
            </div>
            <div className="shop-bot">

                <Carousel responsive={responsive} wrapAround={true} slidesToShow={3} animation={'zoom'} autoplay={1} autoplayInterval={2000} dragging={1} pauseOnHover={0} >

                <img
                src={wg}
                className="wineglass"
                />
                <img
                src={mug}
                className="wineglass"
                />
                <img
                src={bt}
                className="wineglass"
                />
                <img
                src={pc}
                className="wineglass"
                />
          </Carousel>
                
                    
            </div>
        </div>
    </div>
  )
}

export default Shop