import { FaSearch } from 'react-icons/fa'
import '../css/trackPackage.css'
import SearchInput from './SearchInput'

function TrackPackage() {
  return (
    <div className='trackPackage'>
        <h3>Track your package</h3>
        <span className='search'>
            <FaSearch/>
            <SearchInput/>
        </span>
        <span className='btns'>
            <button>Search package</button>
            <button>Can't find</button>
        </span>
    </div>
  )
}

export default TrackPackage