import Navbar from './Components/Navbar/Navbar';
import CaroTop from './Components/Carousel/CaroTop';
import Caro from './Components/Carousel/Caro';
import Pop from './Components/Popular/Pop';
import Guide from './Components/Guide/Guide';
import About from './Components/About/About';
import footerimg from './logo1.png'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGlobe } from 'react-icons/bs';

import './App.css';

function App() {
  return (
    <>

      <div className="background-main">
        <Navbar />
        <CaroTop />
        <Caro />
        <Pop />
        <Guide />
        <About />
      </div>

      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-left-top">
            <img src={footerimg} alt="logo" />
            <h2>TechRec</h2>
          </div>
          <p>On endless journey to find beauty I craft beautifull products that create a lasting impression.</p>
        </div>
        <div className="footer-right">
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='https://meetpanchal1048.github.io/techrec2blgs.github.io/#config'>Configure</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='https://meetpanchal1048.github.io/techrec2blgs.github.io/'>Blogs</a></li>
            <li><a href='#tips'>Tip</a></li>

          </ul>
        </div>
      </div>

      <div className="footer-social">
        <span className="footer-line"></span>
        <div className="footer-btm">
          <p>&copy; 2023 TechRec. All right reserved.</p>
          <div className="icons">
            <BsGithub className='icon'/>
            <BsLinkedin className='icon'/>
            <BsGlobe className='icon'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
