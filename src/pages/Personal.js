import '../styles/Home.scss';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Personal(){
  const imgCover1 = require('../assets/projects/Regain/1.jpeg');
  const imgCover2 = require('../assets/projects/EsmodFS/4.JPG');
  const imgCover3 = require('../assets/projects/SekarJagad/1.png');
  const imgCover4 = require('../assets/projects/LondonC/2.png');

  return (
    <div className='fatade-container'>
      <p className='title'>Personal Projects</p>
      <div className='home desktop personal'>
        <div className='column-home tall'>
          <Link to={'/regain'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Regain F/W Campaign'}
                effect="blur"
                width={imgCover1.width}
                height={imgCover1.height}
                src={imgCover1}
                delayTime={500}
                />
              <div className='overlay'></div>
              <div className='item-label'>
                <p>Regain F/W Campaign</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='column-home tall'>
          <Link to={'/esmod'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'ESMOD Fashion Show'}
                effect="blur"
                width={imgCover2.width}
                height={imgCover2.height}
                src={imgCover2}
                delayTime={500}
                />
              <div className='overlay'></div>
              <div className='item-label'>
                <p>ESMOD Fashion Show</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='column-home tall'>
          <Link to={'/sekar-jagad'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Sekar Jagad'}
                effect="blur"
                width={imgCover3.width}
                height={imgCover3.height}
                src={imgCover3}
                delayTime={500}
                />
              <div className='overlay'></div>
              <div className='item-label'>
                <p>Sekar Jagad</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='column-home tall'>
          <Link to={'/london-college-of-fashion-ma-project'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'London College of Fashion MA Project'}
                effect="blur"
                width={imgCover4.width}
                height={imgCover4.height}
                src={imgCover4}
                delayTime={500}
                />
              <div className='overlay'></div>
              <div className='item-label'>
                <p>London College of Fashion MA Project</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className='home mobile personal'>
        <div className='column-home tall'>
          <Link to={'/regain'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Regain F/W Campaign'}
                effect="blur"
                width={imgCover1.width}
                height={imgCover1.height}
                src={imgCover1}
                delayTime={500}
                />
              <div className='item-label'>
                <p>Regain F/W Campaign</p>
              </div>
            </div>
          </Link>
          <Link to={'/sekar-jagad'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Sekar Jagad'}
                effect="blur"
                width={imgCover3.width}
                height={imgCover3.height}
                src={imgCover3}
                delayTime={500}
                />
              <div className='item-label'>
                <p>Sekar Jagad</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='column-home tall'>
          <Link to={'/esmod'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'ESMOD Fashion Show'}
                effect="blur"
                width={imgCover2.width}
                height={imgCover2.height}
                src={imgCover2}
                delayTime={500}
                />
              <div className='item-label'>
                <p>ESMOD Fashion Show</p>
              </div>
            </div>
          </Link>
          <Link to={'/london-college-of-fashion-ma-project'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'London College of Fashion MA Project'}
                effect="blur"
                width={imgCover4.width}
                height={imgCover4.height}
                src={imgCover4}
                delayTime={500}
                />
              <div className='item-label'>
                <p>London College of Fashion MA Project</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Personal;