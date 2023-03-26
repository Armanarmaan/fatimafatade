import '../../styles/projects.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function LondonC(){
  const imgCover1 = require('../../assets/projects/LondonC/1.gif');
  // const imgCover2 = require('../../assets/projects/LondonC/2.png');
  const imgCover3 = require('../../assets/projects/LondonC/3.png');
  const imgCover4 = require('../../assets/projects/LondonC/4.png');
  const imgCover5 = require('../../assets/projects/LondonC/5.png');

  return (
    <div className='fatade-container'>
      <p className='title desktop'>London College of Fashion MA Project</p>
      <p className='title mobile'>LCF MA Project</p>
      <p className='sub-title'>
        The Indonesian traditional garment using Sekar Jagad collection in CLO3D for Fatima’s 
        master project which showcased in LCF MA art exhibition x London Fashion Week.
      </p>
      <p className='sub-title m-0 desktop'>Designer: Fatima Jannah</p>
      <p className='sub-title m-0 desktop'>by CLO 3D</p>
      <div className='projects desktop londonc'>
        <div className='column-project wide'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'London College of Fashion MA Project'}
              effect="blur"
              width={imgCover1.width}
              height={imgCover1.height}
              src={imgCover1}
              delayTime={500}
              />
          </div>
        </div>
        <div className='column-project taller'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'London College of Fashion MA Project'}
              effect="blur"
              width={imgCover3.width}
              height={imgCover3.height}
              src={imgCover3}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'London College of Fashion MA Project'}
              effect="blur"
              width={imgCover4.width}
              height={imgCover4.height}
              src={imgCover4}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'London College of Fashion MA Project'}
              effect="blur"
              width={imgCover5.width}
              height={imgCover5.height}
              src={imgCover5}
              delayTime={500}
              />
          </div>
        </div>
      </div>
      <div className='projects mobile regain'>
        <div className='column-project wide'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'London College of Fashion MA Project'}
              effect="blur"
              width={imgCover1.width}
              height={imgCover1.height}
              src={imgCover1}
              delayTime={500}
              />
          </div>
        </div>
        <p className='sub-title m-0 mobile'>Designer: Fatima Jannah</p>
        <p className='sub-title m-12 mobile'>by CLO 3D</p>
        <div className='column-project sub'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'London College of Fashion MA Project'}
              effect="blur"
              width={imgCover3.width}
              height={imgCover3.height}
              src={imgCover3}
              delayTime={500}
              />
          </div>
        </div>
        <div className='column-project sub'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'London College of Fashion MA Project'}
              effect="blur"
              width={imgCover4.width}
              height={imgCover4.height}
              src={imgCover4}
              delayTime={500}
              />
          </div>
        </div>
        <div className='column-project sub'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'London College of Fashion MA Project'}
              effect="blur"
              width={imgCover5.width}
              height={imgCover5.height}
              src={imgCover5}
              delayTime={500}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LondonC;