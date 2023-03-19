import '../../styles/projects.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function InOuterSpace(){
  const imgCover1 = require('../../assets/projects/InOuterSp/1.jpeg');
  const imgCover2 = require('../../assets/projects/InOuterSp/2.jpeg');
  const imgCover3 = require('../../assets/projects/InOuterSp/3.jpeg');
  const imgCover4 = require('../../assets/projects/InOuterSp/4.jpeg');
  const imgCover5 = require('../../assets/projects/InOuterSp/5.jpeg');
  const imgCover6 = require('../../assets/projects/InOuterSp/6.jpeg');
  const imgCover7 = require('../../assets/projects/InOuterSp/7.jpeg');
  const imgCover8 = require('../../assets/projects/InOuterSp/8.jpeg');
  const imgCover9 = require('../../assets/projects/InOuterSp/9.jpeg');
  const imgCover10 = require('../../assets/projects/InOuterSp/10.jpeg');

  return (
    <div className='fatade-container'>
      <p className='title'>In Outer Space</p>
      <p className='sub-title'>
        A collaboration work with Fenardy Halim, a fashion photographer based in Jakarta, Indonesia.
      </p>
      <p className='sub-title m-0 desktop'>Designer: Fatima Jannah</p>
      <p className='sub-title m-0 desktop'>Photographer: Fenardy Halim</p>
      <p className='sub-title m-0 desktop'>Make Up Artist: Dewi Levina</p>
      <p className='sub-title m-0 desktop'>Muse: Anya Maleeva</p>
      <div className='projects desktop inouterspace'>
        <div className='column-project wide'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'In Outer Space'}
              effect="blur"
              width={imgCover8.width}
              height={imgCover8.height}
              src={imgCover8}
              delayTime={500}
              />
          </div>
        </div>
        <div className='row-project'>
          <div className='column-project tall'>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover2.width}
                height={imgCover2.height}
                src={imgCover2}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover7.width}
                height={imgCover7.height}
                src={imgCover7}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover9.width}
                height={imgCover9.height}
                src={imgCover9}
                delayTime={500}
                />
            </div>
          </div>
          <div className='column-project taller'>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover1.width}
                height={imgCover1.height}
                src={imgCover1}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover3.width}
                height={imgCover3.height}
                src={imgCover3}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
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
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover10.width}
                height={imgCover10.height}
                src={imgCover10}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover6.width}
                height={imgCover6.height}
                src={imgCover6}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
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
      <div className='projects mobile inouterspace'>
        <div className='column-project wide'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'In Outer Space'}
              effect="blur"
              width={imgCover8.width}
              height={imgCover8.height}
              src={imgCover8}
              delayTime={500}
              />
          </div>
        </div>
        <p className='sub-title m-0 mobile'>Designer: Fatima Jannah</p>
        <p className='sub-title m-0 mobile'>Photographer: Fenardy Halim</p>
        <p className='sub-title m-0 mobile'>Make Up Artist: Dewi Levina</p>
        <p className='sub-title m-12 mobile'>Muse: Anya Maleeva</p>
        <div className='row-project'>
          <div className='column-project tall'>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover2.width}
                height={imgCover2.height}
                src={imgCover2}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover1.width}
                height={imgCover1.height}
                src={imgCover1}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover7.width}
                height={imgCover7.height}
                src={imgCover7}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover9.width}
                height={imgCover9.height}
                src={imgCover9}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
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
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover10.width}
                height={imgCover10.height}
                src={imgCover10}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover3.width}
                height={imgCover3.height}
                src={imgCover3}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover4.width}
                height={imgCover4.height}
                src={imgCover4}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
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
    </div>
  )
}

export default InOuterSpace;