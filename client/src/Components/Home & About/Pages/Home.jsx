import Slider from '../HomeComponent/SliderTab.jsx';
import Aniver from '../HomeComponent/Aniver.jsx';
import Rank from '../HomeComponent/HomeRank.jsx';
import AboutTab from '../HomeComponent/AboutCollage.jsx';
import Updatetab from '../HomeComponent/UpdateTab.jsx';
import AlumniLogoStrip from '../HomeComponent/AluminiSlide.jsx';

function Home() {
  return (
    <>
      <Slider/>
      <AboutTab/>
      <Aniver/>
      <Rank/>
      
      <AlumniLogoStrip/>
      <Updatetab/>
      

    </>
  );
}

export default Home;