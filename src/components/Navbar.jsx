import ZapposLogo from '@/assets/ZapposLogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faMagnifyingGlass,faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchSidebarToggle, sidebar, toggleCart } from '../store'
import { Avatar, Circle, Float } from "@chakra-ui/react"
import AddToCart from './AddToCart'
import '../style/navbar.css'













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
  const products = useSelector((state)=>state.products)
  const isAuth = useSelector((state)=>state.isAuth.status)
  const name = useSelector((state)=>state.isAuth.info) || ''
  const sperateName = name.trim().split(' ')
  const cart = useSelector((state)=>state.cart)

  

  return (
    <div className='headerContainer'>
      <div className='header'>
        <AddToCart cart={cart} onClose={()=>dispatch(toggleCart())} />
        <img src={ZapposLogo} alt="Zappos Logo" onClick={()=>navigate('/')} />
        <div className='searchSection'>
          <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
          <input type="text" placeholder='Search for shoes, cloths, etc.' />
          <button type='submit'>Search</button>
        </div>
        <div className='user-cart'>
          {isAuth?<UserProfile name={sperateName[0][0] + sperateName.at(-1)[0]} />:<FontAwesomeIcon icon={faCircleUser} onClick={()=>navigate('/login')} />}
        <FontAwesomeIcon onClick={()=>dispatch(searchSidebarToggle())} icon={faMagnifyingGlass} />
        <FontAwesomeIcon onClick={()=>dispatch(toggleCart())} icon={faBagShopping} />
        <FontAwesomeIcon onClick={()=>dispatch(sidebar())} icon={faBars} />
        </div>
      </div>

      <div className='navbarContainer'>
        <nav>
          <NavLink to='/productPage/all'>New</NavLink>
          <NavLink to='/productPage/Women'>Women</NavLink>
          <NavLink to='/productPage/Men'>Men</NavLink>
          <NavLink to='/productPage/Kids'>Kids</NavLink>
          <NavLink to='/productPage/all'>Collections</NavLink>
          <NavLink to='/productPage/all'>Brands</NavLink>
          <NavLink to='/productPage/all'>Sales</NavLink>
          <NavLink to='/productPage/all'>Activity</NavLink>
          <NavLink to='/productPage/all'>Gifts</NavLink>
        </nav>
        <div className='helpSupport'>
          <NavLink to='/contact'>Help & Support</NavLink>
        </div>
      </div>
    </div>
  )
}
