import LiveTracking from './LiveTracking';
import '../css/packageHistory.css';
import { FaTimes } from 'react-icons/fa'

function PackageHistory() {
  return (
    <div className='packageHistory'>
      <span className='heading'>
        <h3>Package History</h3>
        <i><FaTimes/></i>
      </span>
      <LiveTracking/>
      
    </div>
  )
}

export default PackageHistory
