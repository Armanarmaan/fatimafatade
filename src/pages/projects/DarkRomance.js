import '../../styles/projects.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function DarkRomance(){
  const imgCover1 = require('../../assets/projects/DarkRom/1.png');
  const imgCover2 = require('../../assets/projects/DarkRom/2.png');
  const imgCover3 = require('../../assets/projects/DarkRom/3.png');
  const imgCover4 = require('../../assets/projects/DarkRom/4.png');
  const imgCover5 = require('../../assets/projects/DarkRom/5.png');
  const imgCover6 = require('../../assets/projects/DarkRom/6.png');
  const imgCover7 = require('../../assets/projects/DarkRom/7.png');
  const imgCover8 = require('../../assets/projects/DarkRom/8.png');
  const imgCover9 = require('../../assets/projects/DarkRom/9.png');
  const imgCover10 = require('../../assets/projects/DarkRom/10.png');

  return (
    <div className='fatade-container'>
      <p className='title'>Dark Romance</p>
      <p className='sub-title'>
        A vintage inspired style in flattering feminine fit, Fatima helped the creative and logistic process of ‘Dark Romance’ photoshoot in London for Joy label. 
      </p>
      <p className='sub-title m-0 desktop'>Photographer: George Ntoumas</p>
      <p className='sub-title m-0 desktop'>Studio Coordinator: Fatima Jannah</p>
      <p className='sub-title m-0 desktop'>Muse: Georgia</p>
      <div className='projects desktop sekarjagad'>
        <div className='column-project taller'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Dark Romance'}
              effect="blackAndWhite"
              width={imgCover9.width}
              height={imgCover9.height}
              src={imgCover9}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Dark Romance'}
              effect="blackAndWhite"
              width={imgCover10.width}
              height={imgCover10.height}
              src={imgCover10}
              delayTime={500}
              />
          </div>
        </div>
        <div className='column-project tall'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Dark Romance'}
              effect="blackAndWhite"
              width={imgCover1.width}
              height={imgCover1.height}
              src={imgCover1}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Dark Romance'}
              effect="blackAndWhite"
              width={imgCover2.width}
              height={imgCover2.height}
              src={imgCover2}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Dark Romance'}
              effect="blackAndWhite"
              width={imgCover3.width}
              height={imgCover3.height}
              src={imgCover3}
              delayTime={500}
              />
          </div>
        </div>
        <div className='column-project taller'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Dark Romance'}
              effect="blackAndWhite"
              width={imgCover4.width}
              height={imgCover4.height}
              src={imgCover4}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Dark Romance'}
              effect="blackAndWhite"
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
              alt={'Dark Romance'}
              effect="blackAndWhite"
              width={imgCover6.width}
              height={imgCover6.height}
              src={imgCover6}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Dark Romance'}
              effect="blackAndWhite"
              width={imgCover7.width}
              height={imgCover7.height}
              src={imgCover7}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Dark Romance'}
              effect="blackAndWhite"
              width={imgCover8.width}
              height={imgCover8.height}
              src={imgCover8}
              delayTime={500}
              />
          </div>
        </div>
      </div>
      <div className='projects mobile inouterspace'>
        <div className='column-project wide'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Dark Romance'}
              effect="blackAndWhite"
              width={imgCover9.width}
              height={imgCover9.height}
              src={imgCover9}
              delayTime={500}
              />
          </div>
        </div>
        <p className='sub-title m-0 mobile'>Photographer: George Ntoumas</p>
        <p className='sub-title m-0 mobile'>Studio Coordinator: Fatima Jannah</p>
        <p className='sub-title m-12 mobile'>Muse: Georgia</p>
        <div className='column-project sub'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Dark Romance'}
              effect="blackAndWhite"
              width={imgCover10.width}
              height={imgCover10.height}
              src={imgCover10}
              delayTime={500}
              />
          </div>
        </div>
        <div className='row-project'>
          <div className='column-project tall'>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Dark Romance'}
                effect="blackAndWhite"
                width={imgCover1.width}
                height={imgCover1.height}
                src={imgCover1}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Dark Romance'}
                effect="blackAndWhite"
                width={imgCover3.width}
                height={imgCover3.height}
                src={imgCover3}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Dark Romance'}
                effect="blackAndWhite"
                width={imgCover4.width}
                height={imgCover4.height}
                src={imgCover4}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Dark Romance'}
                effect="blackAndWhite"
                width={imgCover7.width}
                height={imgCover7.height}
                src={imgCover7}
                delayTime={500}
                />
            </div>
          </div>
          <div className='column-project tall'>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Dark Romance'}
                effect="blackAndWhite"
                width={imgCover2.width}
                height={imgCover2.height}
                src={imgCover2}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Dark Romance'}
                effect="blackAndWhite"
                width={imgCover5.width}
                height={imgCover5.height}
                src={imgCover5}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Dark Romance'}
                effect="blackAndWhite"
                width={imgCover8.width}
                height={imgCover8.height}
                src={imgCover8}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Dark Romance'}
                effect="blackAndWhite"
                width={imgCover6.width}
                height={imgCover6.height}
                src={imgCover6}
                delayTime={500}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DarkRomance;