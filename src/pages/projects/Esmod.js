import '../../styles/projects.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Esmod(){
  // const imgCover1 = require('../../assets/projects/EsmodFS/1.jpeg');
  const imgCover2 = require('../../assets/projects/EsmodFS/2.jpeg');
  const imgCover3 = require('../../assets/projects/EsmodFS/3.JPG');
  const imgCover4 = require('../../assets/projects/EsmodFS/4.JPG');
  const imgCover5 = require('../../assets/projects/EsmodFS/5.png');
  const imgCover6 = require('../../assets/projects/EsmodFS/6.png');
  const imgCover7 = require('../../assets/projects/EsmodFS/7.png');
  const imgCover8 = require('../../assets/projects/EsmodFS/8.png');

  return (
    <div className='fatade-container'>
      <p className='title'>ESMOD Fashion Show</p>
      <p className='sub-title'>
        ESMOD Jakarta Class of 2019 fashion show, Fatima presenting Regain F/W collection for the first time to the audience in Kuningan City.
      </p>
      <p className='sub-title m-0 desktop'>Designer: Fatima Jannah</p>
      <p className='sub-title m-0 desktop'>Photographer: Hashfi Radifan</p>
      <p className='sub-title m-0 desktop'>Muse: Cilvie Orume, Eldine Syifa, Oger</p>
      <div className='projects desktop esmod'>
        <div className='column-project tall'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Esmod Fashion Show'}
              effect="blackAndWhite"
              width={imgCover4.width}
              height={imgCover4.height}
              src={imgCover4}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Esmod Fashion Show'}
              effect="blackAndWhite"
              width={imgCover3.width}
              height={imgCover3.height}
              src={imgCover3}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Esmod Fashion Show'}
              effect="blackAndWhite"
              width={imgCover2.width}
              height={imgCover2.height}
              src={imgCover2}
              delayTime={500}
              />
          </div>
        </div>
        <div className='column-project taller'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Esmod Fashion Show'}
              effect="blackAndWhite"
              width={imgCover5.width}
              height={imgCover5.height}
              src={imgCover5}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Esmod Fashion Show'}
              effect="blackAndWhite"
              width={imgCover6.width}
              height={imgCover6.height}
              src={imgCover6}
              delayTime={500}
              />
          </div>
        </div>
        <div className='column-project taller'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Esmod Fashion Show'}
              effect="blackAndWhite"
              width={imgCover7.width}
              height={imgCover7.height}
              src={imgCover7}
              delayTime={500}
              />
          </div>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Esmod Fashion Show'}
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
              alt={'Esmod Fashion Show'}
              effect="blackAndWhite"
              width={imgCover4.width}
              height={imgCover4.height}
              src={imgCover4}
              delayTime={500}
              />
          </div>
        </div>
        <p className='sub-title m-0 mobile'>Designer: Fatima Jannah</p>
        <p className='sub-title m-0 mobile'>Photographer: Hashfi Radifan</p>
        <p className='sub-title m-12 mobile'>Muse: Cilvie Orume, Eldine Syifa, Oger</p>
        <div className='row-project'>
          <div className='column-project tall'>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Esmod Fashion Show'}
                effect="blackAndWhite"
                width={imgCover3.width}
                height={imgCover3.height}
                src={imgCover3}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Esmod Fashion Show'}
                effect="blackAndWhite"
                width={imgCover5.width}
                height={imgCover5.height}
                src={imgCover5}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Esmod Fashion Show'}
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
                alt={'Esmod Fashion Show'}
                effect="blackAndWhite"
                width={imgCover2.width}
                height={imgCover2.height}
                src={imgCover2}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Esmod Fashion Show'}
                effect="blackAndWhite"
                width={imgCover6.width}
                height={imgCover6.height}
                src={imgCover6}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Esmod Fashion Show'}
                effect="blackAndWhite"
                width={imgCover8.width}
                height={imgCover8.height}
                src={imgCover8}
                delayTime={500}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Esmod;