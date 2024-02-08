import Promo from "./Promo"
import TrackPackage from './TrackPackage'
import History from './History';
import '../css/content.css'


function Content() {
  return ( 

    <div className='content'>
      
      <div className='div' >
        <TrackPackage/>
        <Promo/>
      </div>
      <History/>
    </div>
  
  )
}

export default Content;