import './css/sidebar.css'
import Logo from '../components/Logo'
import MenuList from './MenuList'
import {
  createBrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements
} from 'react-router-dom';
import PackageTrackingPage from './PackageTrackingPage'
import Dashboard from './user_dashboard/Dashboard';
import MainContent from './user_dashboard/MainContent'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element ={<MainContent/>}/>
      <Route path='packageTrackingPage' element={<PackageTrackingPage/>}/>
      </Route>
  )
)

function Sidebar() {
  return (
    <aside className='sidebar'>
      <Logo/>
      <MenuList/>
    </aside>
  )
}

export default Sidebar
