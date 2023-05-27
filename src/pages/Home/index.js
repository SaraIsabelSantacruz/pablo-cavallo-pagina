// import Video from '../../assets/portada.mp4';
import './styles.css';

import Nav from '../../components/Nav'

function Home() {
  return (
  <div className='portada-container'>
    <Nav/>
    <div className='name-container'>
    <h1 className='artist-name left mobile'>PABLO CAVALLO</h1>
      <h1 className='artist-name left desktop'>PABLO</h1>
      <h1 className='artist-name right desktop'>CAVALLO</h1>
    </div>
    <video
      className='video-container'
      autoPlay
      controls
      loop>
        <source
          src='https://pagina-pablo.s3.us-east-2.amazonaws.com/portada.mp4'
          type="video/mp4"/>
    </video>
  </div>
  );
}

export default Home;
