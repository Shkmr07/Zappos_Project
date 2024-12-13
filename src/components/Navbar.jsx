import ZapposLogo from '@/assets/ZapposLogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faMagnifyingGlass,faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchSidebarToggle, sidebar } from '../store'
import '../style/navbar.css'
import { useState } from 'react'

import { Avatar, Circle, Float } from "@chakra-ui/react"

const UserProfile = ({ name }) => {
  return (
    <Avatar.Root 
      colorPalette="green" 
      variant="subtle" 
      style={{ width: '35px', height: '35px' }}
    >
      <Avatar.Fallback 
        style={{ fontSize: '12px' }} // Adjust font size here
      >
        {name}
      </Avatar.Fallback>
      <Float placement="bottom-end" offsetX="1" offsetY="1">
        <Circle
          bg="green.500"
          size="8px" // Reduced size for Circle
          outline="0.1em solid" // Thinner outline
          outlineColor="bg"
        />
      </Float>
    </Avatar.Root>
  );
};






export default function Navbar() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const navItem = ['New','Women','Men','Kids','Collections','Brands','Sale','Activity','Gifts']
  const [isActive,setIsActive]  = useState(false)
  const isAuth = useSelector((state)=>state.isAuth.status)
  const name = useSelector((state)=>state.isAuth.info) || ''
  const sperateName = name.trim().split(' ')

  function toggle(){
    setIsActive((prev)=>!prev)
  }
  

  return (
    <div className='headerContainer'>
      <div className='header'>
        <img src={ZapposLogo} alt="Zappos Logo" onClick={()=>navigate('/')} />
        <div className='searchSection'>
          <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
          <input type="text" placeholder='Search for shoes, cloths, etc.' />
          <button type='submit'>Search</button>
        </div>
        <div className='user-cart'>
          {isAuth?<UserProfile name={sperateName[0][0] + sperateName.at(-1)[0]} />:<FontAwesomeIcon icon={faCircleUser} onClick={()=>navigate('/login')} />}
        <FontAwesomeIcon onClick={()=>dispatch(searchSidebarToggle())} icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faBagShopping} />
        <FontAwesomeIcon onClick={()=>dispatch(sidebar())} icon={faBars} />
        </div>
      </div>

      <div className='navbarContainer'>
        <nav>
          {navItem.map(item=>(
            <div key={item}>
            <NavLink to='/' onClick={toggle} >{item}</NavLink>
            {isActive && <div>hello</div>}
            </div>
          ))}
        </nav>
        <div className='helpSupport'>
          <NavLink>Help & Support</NavLink>
        </div>
      </div>
    </div>
  )
}
