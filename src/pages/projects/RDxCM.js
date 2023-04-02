import '../../styles/projects.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function RDxCM(){
  const imgCover1 = require('../../assets/projects/RDxCM/1.jpg');
  const imgCover2 = require('../../assets/projects/RDxCM/2.jpg');
  const imgCover3 = require('../../assets/projects/RDxCM/3.JPG');
  const imgCover4 = require('../../assets/projects/RDxCM/4.JPG');
  const imgCover5 = require('../../assets/projects/RDxCM/5.JPG');
  const imgCover6 = require('../../assets/projects/RDxCM/6.jpg');

  return (
    <div className='fatade-container'>
      <p className='title'>Roger Danuarta x Cut Meyriska</p>
      <p className='sub-title'>
        Pre-wedding photoshoot by Rio Motret starring Indonesian actor and actress, Roger Danuarta with his beloved wife, Cut Meyriska.
      </p>
      <p className='sub-title m-0 desktop'>Designer: Fatima Jannah</p>
      <p className='sub-title m-0 desktop'>Photographer: Rio Motret</p>
      <p className='sub-title m-0 desktop'>Fashion Stylist: Erich Al Amin</p>
      <p className='sub-title m-0 desktop'>Muse: Roger Danuarta, Cut Meyriska</p>
      <div className='projects desktop rdxcm'>
        <div className='row-project'>
          <div className='column-project tall'>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Roger Danuarta x Cut Meyriska'}
                effect="blackAndWhite"
                width={imgCover5.width}
                height={imgCover5.height}
                src={imgCover5}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Roger Danuarta x Cut Meyriska'}
                effect="blackAndWhite"
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
                alt={'Roger Danuarta x Cut Meyriska'}
                effect="blackAndWhite"
                width={imgCover4.width}
                height={imgCover4.height}
                src={imgCover4}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Roger Danuarta x Cut Meyriska'}
                effect="blackAndWhite"
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
                alt={'Roger Danuarta x Cut Meyriska'}
                effect="blackAndWhite"
                width={imgCover2.width}
                height={imgCover2.height}
                src={imgCover2}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Roger Danuarta x Cut Meyriska'}
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
      <div className='projects mobile inouterspace'>
        <div className='column-project wide'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Roger Danuarta x Cut Meyriska'}
              effect="blackAndWhite"
              width={imgCover5.width}
              height={imgCover5.height}
              src={imgCover5}
              delayTime={500}
              />
          </div>
        </div>
        <p className='sub-title m-0 mobile'>Designer: Fatima Jannah</p>
        <p className='sub-title m-0 mobile'>Photographer: Rio Motret</p>
        <p className='sub-title m-0 mobile'>Fashion Stylist: Erich Al Amin</p>
        <p className='sub-title m-12 mobile'>Muse: Roger Danuarta, Cut Meyriska</p>
        <div className='column-project sub'>
          <div className='page-item'>
            <LazyLoadImage
              alt={'Roger Danuarta x Cut Meyriska'}
              effect="blackAndWhite"
              width={imgCover2.width}
              height={imgCover2.height}
              src={imgCover2}
              delayTime={500}
              />
          </div>
        </div>
        <div className='row-project'>
          <div className='column-project tall'>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Roger Danuarta x Cut Meyriska'}
                effect="blackAndWhite"
                width={imgCover4.width}
                height={imgCover4.height}
                src={imgCover4}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Roger Danuarta x Cut Meyriska'}
                effect="blackAndWhite"
                width={imgCover1.width}
                height={imgCover1.height}
                src={imgCover1}
                delayTime={500}
                />
            </div>
          </div>
          <div className='column-project tall'>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Roger Danuarta x Cut Meyriska'}
                effect="blackAndWhite"
                width={imgCover3.width}
                height={imgCover3.height}
                src={imgCover3}
                delayTime={500}
                />
            </div>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Roger Danuarta x Cut Meyriska'}
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

export default RDxCM;