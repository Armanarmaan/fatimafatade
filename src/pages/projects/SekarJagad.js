import '../../styles/projects.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function SekarJagad(){
  const imgCover1 = require('../../assets/projects/SekarJagad/1.jpg');
  const imgCover2 = require('../../assets/projects/SekarJagad/2.jpg');
  const imgCover3 = require('../../assets/projects/SekarJagad/3.jpg');
  const imgCover4 = require('../../assets/projects/SekarJagad/4.jpg');
  const imgCover5 = require('../../assets/projects/SekarJagad/5.jpg');

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
              width={imgCover1.width}
              height={imgCover1.height}
              src={imgCover1}
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
          <div className='page-item'>
            <LazyLoadImage
              alt={'Sekar Jagad'}
              effect="blur"
              width={imgCover5.width}
              height={imgCover5.height}
              src={imgCover5}
              delayTime={500}
              />
          </div>
        </div>
      </div>
      <div className='projects mobile inouterspace'>
        <div className='column-project wide'>
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
        <p className='sub-title m-0 mobile'>Designer: Fatima Jannah</p>
        <p className='sub-title m-0 mobile'>Photographer: Harez Rafi</p>
        <p className='sub-title m-12 mobile'>Muse: Anith Athirah</p>
        <div className='row-project'>
          <div className='column-project tall'>
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

export default SekarJagad;