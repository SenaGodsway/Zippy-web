import '../css/dashboard.css'
import MainContent from './MainContent'
import Sidebar from '../Sidebar'
function Dashboard() {
  return (
    <div className='main-dashboard'>
      <Sidebar/>
      <MainContent/>
    </div>
  )
}

export default Dashboard
