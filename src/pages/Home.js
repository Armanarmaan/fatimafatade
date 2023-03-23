import '../styles/Home.scss';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Home(){
  const imgCover1 = require('../assets/projects/Regain/1.jpg');
  const imgCover2 = require('../assets/projects/SekarJagad/1.jpg');
  const imgCover3 = require('../assets/projects/InOuterSp/8.jpeg');
  const imgCover4 = require('../assets/projects/DarkRom/9.png');
  const imgCover5 = require('../assets/projects/RDxCM/3.JPG');
  const imgCover6 = require('../assets/projects/EsmodFS/4.JPG');
  const imgCover7 = require('../assets/projects/LondonC/2.png');

  return (
    <div className='fatade-container'>
      <div className='home desktop'>
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
          <Link to={'/sekar-jagad'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Sekar Jagad'}
                effect="blur"
                width={imgCover2.width}
                height={imgCover2.height}
                src={imgCover2}
                delayTime={500}
                />
              <div className='overlay'></div>
              <div className='item-label'>
                <p>Sekar Jagad</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='column-home wide'>
          <Link to={'/in-outer-space'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover3.width}
                height={imgCover3.height}
                src={imgCover3}
                delayTime={500}
                />
              <div className='overlay'></div>
              <div className='item-label'>
                <p>In Outer Space</p>
              </div>
            </div>
          </Link>
          <Link to={'/dark-romance'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Dark Romance'}
                effect="blur"
                width={imgCover4.width}
                height={imgCover4.height}
                src={imgCover4}
                delayTime={500}
                />
              <div className='overlay'></div>
              <div className='item-label'>
                <p>Dark Romance</p>
              </div>
            </div>
          </Link>
          <Link to={'/roger-danuarta-x-cut-meyriska'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Roger Danuarta x Cut Meyriska'}
                effect="blur"
                width={imgCover5.width}
                height={imgCover5.height}
                src={imgCover5}
                delayTime={500}
                />
              <div className='overlay'></div>
              <div className='item-label'>
                <p>Roger Danuarta x Cut Meyriska</p>
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
                width={imgCover6.width}
                height={imgCover6.height}
                src={imgCover6}
                delayTime={500}
                />
              <div className='overlay'></div>
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
                width={imgCover7.width}
                height={imgCover7.height}
                src={imgCover7}
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
      <div className='home mobile'>
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
                width={imgCover2.width}
                height={imgCover2.height}
                src={imgCover2}
                delayTime={500}
                />
              <div className='item-label'>
                <p>Sekar Jagad</p>
              </div>
            </div>
          </Link>
          <Link to={'/esmod'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'ESMOD Fashion Show'}
                effect="blur"
                width={imgCover6.width}
                height={imgCover6.height}
                src={imgCover6}
                delayTime={500}
                />
              <div className='item-label'>
                <p>ESMOD Fashion Show</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='column-home wide'>
          <Link to={'/in-outer-space'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover3.width}
                height={imgCover3.height}
                src={imgCover3}
                delayTime={500}
                />
              <div className='item-label'>
                <p>In Outer Space</p>
              </div>
            </div>
          </Link>
          <Link to={'/dark-romance'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Dark Romance'}
                effect="blur"
                width={imgCover4.width}
                height={imgCover4.height}
                src={imgCover4}
                delayTime={500}
                />
              <div className='item-label'>
                <p>Dark Romance</p>
              </div>
            </div>
          </Link>
          <Link to={'/roger-danuarta-x-cut-meyriska'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Roger Danuarta x Cut Meyriska'}
                effect="blur"
                width={imgCover5.width}
                height={imgCover5.height}
                src={imgCover5}
                delayTime={500}
                />
              <div className='item-label'>
                <p>Roger Danuarta x Cut Meyriska</p>
              </div>
            </div>
          </Link>
          <Link to={'/london-college-of-fashion-ma-project'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'London College of Fashion MA Project'}
                effect="blur"
                width={imgCover7.width}
                height={imgCover7.height}
                src={imgCover7}
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

export default Home;