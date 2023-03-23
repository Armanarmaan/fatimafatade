import '../../styles/projects.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from "react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../../styles/Swiper.scss";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

function Regain(){
  const imgCoverWide = require('../../assets/projects/Regain/wide.jpg');
  const imgCover1 = require('../../assets/projects/Regain/1.jpg');
  const imgCover2 = require('../../assets/projects/Regain/2.jpg');
  const imgCover3 = require('../../assets/projects/Regain/3.jpg');
  const imgCover4 = require('../../assets/projects/Regain/4.jpg');
  const imgCover5 = require('../../assets/projects/Regain/5.jpg');
  const imgCover6 = require('../../assets/projects/Regain/6.jpg');
  const imgCover7 = require('../../assets/projects/Regain/7.jpg');
  const imgCover8 = require('../../assets/projects/Regain/8.jpg');
  const imgCover9 = require('../../assets/projects/Regain/9.jpg');
  const imgCover10 = require('../../assets/projects/Regain/10.jpg');
  const imgCover13 = require('../../assets/projects/Regain/13.jpeg');
  const imgCover14 = require('../../assets/projects/Regain/14.jpeg');
  const imgCover15 = require('../../assets/projects/Regain/15.jpeg');
  const imgCover16 = require('../../assets/projects/Regain/16.jpeg');
  const imgCover17 = require('../../assets/projects/Regain/17.jpeg');
  const imgCover18 = require('../../assets/projects/Regain/18.jpeg');
  const imgCover19 = require('../../assets/projects/Regain/19.jpeg');
  const [thumbsSwiper] = useState(null);

  return (
    <div className='fatade-container'>
      <p className='title'>Regain F/W Campaign</p>
      <p className='sub-title'>
        Inspired by my loved ones who have experienced severe or developmental trauma. 
        I created this collection by using 5 senses approach – hearing, touch, sight, taste and smell.
      </p>
      <p className='sub-title m-0 desktop'>Designer: Fatima Jannah</p>
      <p className='sub-title m-0 desktop'>Photographer: Zulham Siregar</p>
      <p className='sub-title m-0 desktop'>Make Up Artist: Aditya Vague Skin</p>
      <p className='sub-title m-0 desktop'>Muse: Tatyana Mirova & Vadym Komisar</p>
      <div className='projects desktop regain'>
        <div className='column-project wide'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCoverWide.width}
              height={imgCoverWide.height}
              src={imgCoverWide}
              delayTime={500}
              />
          </div>
        </div>
        <div className='column-project taller'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover1.width}
              height={imgCover1.height}
              src={imgCover1}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover3.width}
              height={imgCover3.height}
              src={imgCover3}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover2.width}
              height={imgCover2.height}
              src={imgCover2}
              delayTime={500}
              />
          </div>
        </div>
        <div className='column-project tall'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover5.width}
              height={imgCover5.height}
              src={imgCover5}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover8.width}
              height={imgCover8.height}
              src={imgCover8}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover6.width}
              height={imgCover6.height}
              src={imgCover6}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover4.width}
              height={imgCover4.height}
              src={imgCover4}
              delayTime={500}
              />
          </div>
        </div>
        <div className='column-project taller'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover9.width}
              height={imgCover9.height}
              src={imgCover9}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover7.width}
              height={imgCover7.height}
              src={imgCover7}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover10.width}
              height={imgCover10.height}
              src={imgCover10}
              delayTime={500}
              />
          </div>
        </div>
        <p className='title desktop'>Discover...</p>
        <div className='slider-photos'>
          <div className='swiper-wrapper-slider'>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
              speed={1000}
            >
              <SwiperSlide>
                <img src={imgCover17} alt={'slide'}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={imgCover18} alt={'slide'}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={imgCover19} alt={'slide'}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={imgCover13} alt={'slide'}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={imgCover14} alt={'slide'}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={imgCover15} alt={'slide'}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={imgCover16} alt={'slide'}/>
              </SwiperSlide>
            </Swiper>
          </div>
          
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
      <div className='projects mobile regain'>
        <div className='column-project wide'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCoverWide.width}
              height={imgCoverWide.height}
              src={imgCoverWide}
              delayTime={500}
              />
          </div>
        </div>
        <p className='sub-title m-0 mobile'>Designer: Fatima Jannah</p>
        <p className='sub-title m-0 mobile'>Photographer: Zulham Siregar</p>
        <p className='sub-title m-0 mobile'>Make Up Artist: Aditya Vague Skin</p>
        <p className='sub-title m-12 mobile'>Muse: Tatyana Mirova & Vadym Komisar</p>
        <div className='column-project tall'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover1.width}
              height={imgCover1.height}
              src={imgCover1}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover3.width}
              height={imgCover3.height}
              src={imgCover3}
              delayTime={500}
              />
          </div>
        </div>
        <div className='column-project tall'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover2.width}
              height={imgCover2.height}
              src={imgCover2}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover5.width}
              height={imgCover5.height}
              src={imgCover5}
              delayTime={500}
              />
          </div>
        </div>
        <div className='column-project tall'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover8.width}
              height={imgCover8.height}
              src={imgCover8}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover6.width}
              height={imgCover6.height}
              src={imgCover6}
              delayTime={500}
              />
          </div>
        </div>
        <div className='column-project tall'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover4.width}
              height={imgCover4.height}
              src={imgCover4}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover9.width}
              height={imgCover9.height}
              src={imgCover9}
              delayTime={500}
              />
          </div>
        </div>
        <div className='column-project tall'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover7.width}
              height={imgCover7.height}
              src={imgCover7}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Regain F/W Campaign'}
              effect="blur"
              width={imgCover10.width}
              height={imgCover10.height}
              src={imgCover10}
              delayTime={500}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Regain;