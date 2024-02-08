import './css/topNav.css'
import {FaBell, FaUser } from 'react-icons/fa'

function TopNav() {
  return (
    <div className='topNav'>
      <div className='user-detail'> 
      <h4>Hi Kwame</h4>
      <p>Track and monitorng your packages</p>
      </div>
      <div className='icons'>
        <i><FaBell/></i>
        <i><FaUser/></i>
      </div>
    </div>
  )
}

export default TopNav
