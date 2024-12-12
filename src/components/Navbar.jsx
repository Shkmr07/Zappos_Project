import ZapposLogo from '@/assets/ZapposLogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faMagnifyingGlass,faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchSidebarToggle, sidebar } from '../store'
import '../style/navbar.css'
import { useState } from 'react'

export default function Navbar() {

  const dispatch = useDispatch()
  const navItem = ['New','Women','Men','Kids','Collections','Brands','Sale','Activity','Gifts']
  const [isActive,setIsActive]  = useState(false)

  function toggle(){
    setIsActive((prev)=>!prev)
  }


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
          {navItem.map(item=>(
            <>
            <NavLink to='/' onClick={toggle} >{item}</NavLink>
            {isActive && <div>hello</div>}
            </>
          ))}
        </nav>
        <div className='helpSupport'>
          <NavLink>Help & Support</NavLink>
        </div>
      </div>
    </div>
  )
}
