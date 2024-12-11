import ZapposLogo from '@/assets/ZapposLogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faMagnifyingGlass,faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchSidebarToggle, sidebar } from '../store'
import '../style/navbar.css'

export default function Navbar() {

  const dispatch = useDispatch()

  return (
    <div className='headerContainer'>
      <div className='header'>
        <img src={ZapposLogo} alt="Zappos Logo" />
        <div className='searchSection'>
          <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
          <input type="text" placeholder='Search for shoes, cloths, etc.' />
          <button type='submit'>Search</button>
        </div>
        <div className='user-cart'>
        <FontAwesomeIcon icon={faCircleUser} />
        <FontAwesomeIcon onClick={()=>dispatch(searchSidebarToggle())} icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faBagShopping} />
        <FontAwesomeIcon onClick={()=>dispatch(sidebar())} icon={faBars} />
        </div>
      </div>

      <div className='navbarContainer'>
        <nav>
          <NavLink>New</NavLink>
          <NavLink>Women</NavLink>
          <NavLink>Men</NavLink>
          <NavLink>Kids</NavLink>
          <NavLink>Collections</NavLink>
          <NavLink>Brands</NavLink>
          <NavLink>Sale</NavLink>
          <NavLink>Activity</NavLink>
          <NavLink>Gifts</NavLink>
        </nav>
        <div className='helpSupport'>
          <NavLink>Help & Support</NavLink>
        </div>
      </div>
    </div>
  )
}
