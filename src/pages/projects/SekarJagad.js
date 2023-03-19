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

function SekarJagad(){
  const imgCover1 = require('../../assets/projects/SekarJagad/1.png');
  const imgCover2 = require('../../assets/projects/SekarJagad/2.png');
  const imgCover3 = require('../../assets/projects/SekarJagad/3.png');
  const imgCover4 = require('../../assets/projects/SekarJagad/4.png');
  const imgCover7 = require('../../assets/projects/SekarJagad/7.png');
  const imgCover10 = require('../../assets/projects/SekarJagad/10.jpg');
  const imgCover11 = require('../../assets/projects/SekarJagad/11.jpg');
  const imgCover12 = require('../../assets/projects/SekarJagad/12.jpg');
  const imgCover13 = require('../../assets/projects/SekarJagad/13.jpg');
  const imgCover14 = require('../../assets/projects/SekarJagad/14.jpg');
  const imgCover15 = require('../../assets/projects/SekarJagad/15.jpg');
  const imgCover16 = require('../../assets/projects/SekarJagad/16.jpg');
  const [thumbsSwiper] = useState(null);

  return (
    <div className='fatade-container'>
      <p className='title'>Sekar Jagad</p>
      <p className='sub-title'>
        Sekar means flower, Jagad means the world. Sekar Jagad symbolises the beauty of grace and the diversity in Indonesia. 
        Sekar Jagad collection mainly used Indonesian traditional textiles, which are Batik and Kebaya.
      </p>
      <p className='sub-title m-0 desktop'>Designer: Fatima Jannah</p>
      <p className='sub-title m-0 desktop'>Photographer: Harez Rafi</p>
      <p className='sub-title m-0 desktop'>Muse: Anith Athirah</p>
      <div className='projects desktop sekarjagad'>
        <div className='column-project taller'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Sekar Jagad'}
              effect="blur"
              width={imgCover3.width}
              height={imgCover3.height}
              src={imgCover3}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Sekar Jagad'}
              effect="blur"
              width={imgCover4.width}
              height={imgCover4.height}
              src={imgCover4}
              delayTime={500}
              />
          </div>
        </div>
        <div className='column-project tall'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Sekar Jagad'}
              effect="blur"
              width={imgCover7.width}
              height={imgCover7.height}
              src={imgCover7}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Sekar Jagad'}
              effect="blur"
              width={imgCover2.width}
              height={imgCover2.height}
              src={imgCover2}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Sekar Jagad'}
              effect="blur"
              width={imgCover1.width}
              height={imgCover1.height}
              src={imgCover1}
              delayTime={500}
              />
          </div>
        </div>
        <p className='title desktop'>Discover...</p>
        <div className='slider-photos'>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src={imgCover10} alt={'slide'}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgCover11} alt={'slide'}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgCover12} alt={'slide'}/>
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
      </div>
      <div className='projects mobile inouterspace'>
        <div className='column-project wide'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Sekar Jagad'}
              effect="blur"
              width={imgCover3.width}
              height={imgCover3.height}
              src={imgCover3}
              delayTime={500}
              />
          </div>
        </div>
        <p className='sub-title m-0 mobile'>Designer: Fatima Jannah</p>
        <p className='sub-title m-0 mobile'>Photographer: Harez Rafi</p>
        <p className='sub-title m-12 mobile'>Muse: Anith Athirah</p>
        <div className='row-project'>
          <div className='column-project tall'>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Sekar Jagad'}
                effect="blur"
                width={imgCover4.width}
                height={imgCover4.height}
                src={imgCover4}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Sekar Jagad'}
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
                alt={'Sekar Jagad'}
                effect="blur"
                width={imgCover7.width}
                height={imgCover7.height}
                src={imgCover7}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Sekar Jagad'}
                effect="blur"
                width={imgCover1.width}
                height={imgCover1.height}
                src={imgCover1}
                delayTime={500}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SekarJagad;