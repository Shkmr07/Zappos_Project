import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faCircleUser } from '@fortawesome/free-regular-svg-icons'
import '../style/Sidebar.css'
import { sidebar } from '../store'

function Sidebar() {

    const dispatch = useDispatch()
    const status = useSelector((state)=>state.sidebar)

    
  return (
    <div className={`sidebarContainer ${status?'showSidebar':'hideSidebar'}`}>
        <div className='sidebarUser-cart'>
        <FontAwesomeIcon icon={faCircleUser} />
        <FontAwesomeIcon icon={faCircleXmark} onClick={()=>dispatch(sidebar())} />
        </div>

    </div>
  )
}

export default Sidebar