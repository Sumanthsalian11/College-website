import HostelInfo from './Hostels';
import ParkingInfo from './Parking';
import BackToTop from '../BackToTop';
import Canteen from './Annapoorna';
import CoOpStore from './Co-op';
import ClsCompAv from './ClsCompAv';
import Laboratories from './Laboratories';
import Library from './Library';
import StaffRoom from './StaffRoom';

function Facilities() {
  return (
    <>
      <Canteen/>
      <CoOpStore/>
      <ClsCompAv/>
      <Laboratories/>
      {/* <HostelInfo /> */}
      <Library/>
      {/* <StaffRoom/> */}
      <ParkingInfo />
      <BackToTop />
    </>
  );
}

export default Facilities;
