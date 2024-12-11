import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/SearchSidebar.css'
import { searchSidebarToggle } from '../store'
import { faCircleXmark} from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchSidebar() {

    const dispatch = useDispatch()
    const status = useSelector((state)=>state.searchSidebar)

  return (
    <div className={`search-sidebar ${status?'searchSidebar-show':'searchSidebar-hide'}`}>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder='Search for shoes, cloths, etc.'/>
        <FontAwesomeIcon icon={faCircleXmark} onClick={()=>dispatch(searchSidebarToggle())} />
      </div>

    </div>
  )
}
