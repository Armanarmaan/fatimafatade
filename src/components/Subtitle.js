import '../styles/Subtitle.scss'

function Subtitle(){
  const imgSubtitle = require('../assets/subtitle.svg').default;

  return (
    <div className='subtitle'>
      <img src={imgSubtitle} alt='arc' />
    </div>
  )
}

export default Subtitle;