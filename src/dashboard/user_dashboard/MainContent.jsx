import Content from './Content'
import TopNav from '../TopNav'
import '../css/dashboard.css'
import PackageHistory from './PackageHistory'

function MainContent() {
  return (
    <div className='mainContent'>
        <TopNav/>
        <div className='content-div'>
        <Content/>
        <PackageHistory/>
        </div>
    </div>
  )
}

export default MainContent