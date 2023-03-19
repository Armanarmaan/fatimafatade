import '../styles/Home.scss';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Collab(){
  const imgCover1 = require('../assets/projects/InOuterSp/8.jpeg');
  const imgCover2 = require('../assets/projects/DarkRom/9.png');
  const imgCover3 = require('../assets/projects/RDxCM/3.JPG');

  return (
    <div className='fatade-container'>
      <p className='title'>Collaboration Projects</p>
      <div className='home desktop collab'>
        <div className='column-home wide'>
          <Link to={'/in-outer-space'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover1.width}
                height={imgCover1.height}
                src={imgCover1}
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
                width={imgCover2.width}
                height={imgCover2.height}
                src={imgCover2}
                delayTime={500}
                />
              <div className='overlay'></div>
              <div className='item-label'>
                <p>Dark Romance</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='column-home tall'>
          <Link to={'/roger-danuarta-x-cut-meyriska'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Roger Danuarta x Cut Meyriska'}
                effect="blur"
                width={imgCover3.width}
                height={imgCover3.height}
                src={imgCover3}
                delayTime={500}
                />
              <div className='overlay'></div>
              <div className='item-label'>
                <p>Roger Danuarta x Cut Meyriska</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className='home mobile collab'>
        <div className='column-home wide'>
          <Link to={'/in-outer-space'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'In Outer Space'}
                effect="blur"
                width={imgCover1.width}
                height={imgCover1.height}
                src={imgCover1}
                delayTime={500}
                />
              <div className='item-label'>
                <p>In Outer Space</p>
              </div>
            </div>
          </Link>
          <Link to={'/roger-danuarta-x-cut-meyriska'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Roger Danuarta x Cut Meyriska'}
                effect="blur"
                width={imgCover3.width}
                height={imgCover3.height}
                src={imgCover3}
                delayTime={500}
                />
              <div className='item-label'>
                <p>Roger Danuarta x Cut Meyriska</p>
              </div>
            </div>
          </Link>
          <Link to={'/dark-romance'}>
            <div className='page-item'>
              <LazyLoadImage
                alt={'Dark Romance'}
                effect="blur"
                width={imgCover2.width}
                height={imgCover2.height}
                src={imgCover2}
                delayTime={500}
                />
              <div className='item-label'>
                <p>Dark Romance</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Collab;