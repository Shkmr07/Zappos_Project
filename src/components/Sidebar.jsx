import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import '../style/Sidebar.css'
import { sidebar, toggleSection } from '../store'
import { Link, useNavigate } from 'react-router-dom'



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

function Sidebar() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const status = useSelector((state)=>state.sidebar)
    const openSection = useSelector((state)=>state.openSection)
    const isAuth = useSelector((state)=>state.isAuth.status)
    const name = useSelector((state)=>state.isAuth.info) || ''
    const sperateName = name.trim().split(' ')

    
  return (
    <div className={`sidebarContainer ${status?'showSidebar':'hideSidebar'}`}>
        <div className='sidebarUser-cart'>
        
        {isAuth?<UserProfile name={sperateName[0][0] + sperateName.at(-1)[0]} />:<FontAwesomeIcon icon={faCircleUser} onClick={()=>navigate('/login')} />}
        <FontAwesomeIcon icon={faCircleXmark} onClick={()=>dispatch(sidebar())} />
        </div>

        <div className='sidebarMenu'>
          
          <div className='New'>
            <div onClick={()=>dispatch(toggleSection('New'))} style={openSection === 'New'?{borderBottom:'none'}:{}}>
            <h2>New</h2>
            <FontAwesomeIcon icon={openSection === 'New'?faChevronUp:faChevronDown} />
            </div>
            {openSection === 'New' && (

            <ul>
              <Link>New by Category</Link>
              <Link>The Style Room</Link>
            </ul>
            )}
          </div>

          <div className='Women'>
            <div onClick={()=>dispatch(toggleSection('Women'))} style={openSection === 'Women'?{borderBottom:'none'}:{}}>
            <h2>Women</h2>
            <FontAwesomeIcon icon={openSection === 'Women'?faChevronUp:faChevronDown} />
            </div>

            {openSection === 'Women' && (

            <ul>
              <Link>Shoes</Link>
              <Link>Clothing</Link>
            </ul>
            )}
          </div>

          <div className='Men'>
            <div onClick={()=>dispatch(toggleSection('Men'))} style={openSection === 'Men'?{borderBottom:'none'}:{}}>
            <h2>Men</h2>
            <FontAwesomeIcon icon={openSection === 'Men'?faChevronUp:faChevronDown} />
            </div>
            {openSection === 'Men' && (

            <ul>
            <Link>Shoes</Link>
            <Link>Clothing</Link>
            </ul>
            )}
          </div>

          <div className='Kids'>
            <div onClick={()=>dispatch(toggleSection('Kids'))} style={openSection === 'Kids'?{borderBottom:'none'}:{}}>
            <h2>Kids</h2>
            <FontAwesomeIcon icon={openSection === 'Kids'?faChevronUp:faChevronDown} />
            </div>
            {openSection === 'Kids' && (
            <ul>
            <Link>Shoes</Link>
            <Link>Clothing</Link>
            </ul>

            )}
          </div>

          <div className='collections'>
            <div onClick={()=>dispatch(toggleSection('collections'))} style={openSection === 'collections'?{borderBottom:'none'}:{}}>
            <h2>Collections</h2>
            <FontAwesomeIcon icon={openSection === 'collections'?faChevronUp:faChevronDown} />
            </div>
            {openSection === 'collections' && (

            <ul>
              <Link>Trending Brands</Link>
              <Link>The Style Room</Link>
            </ul>
            )}
          </div>

          <div className='brands'>
            <div onClick={()=>dispatch(toggleSection('brands'))} style={openSection === 'brands'?{borderBottom:'none'}:{}}>
            <h2>Brands</h2>
            <FontAwesomeIcon icon={openSection === 'brands'?faChevronUp:faChevronDown} />
            </div>
            {openSection === 'brands' && (

            <ul>
              <Link>Featured Brands</Link>
              <Link>Dolce vita</Link>
            </ul>
            )}
          </div>

          <div className='sales'>
            <div onClick={()=>dispatch(toggleSection('sales'))} style={openSection === 'sales'?{borderBottom:'none'}:{}}>
            <h2>Sales</h2>
            <FontAwesomeIcon icon={openSection === 'sales'?faChevronUp:faChevronDown} />
            </div>
            {openSection === 'sales' && (

            <ul>
              <Link>Womens's Sale</Link>
              <Link>Men's Sale</Link>
            </ul>
            )}
          </div>

          <div className='activity'>
            <div onClick={()=>dispatch(toggleSection('activity'))} style={openSection === 'activity'?{borderBottom:'none'}:{}}>
            <h2>Activity</h2>
            <FontAwesomeIcon icon={openSection === 'activity'?faChevronUp:faChevronDown} />
            </div>
            {openSection === 'activity' && (

            <ul>
              <Link>Women</Link>
              <Link>Men</Link>
            </ul>
            )}
          </div>

          <div className='help'>
            <div onClick={()=>dispatch(toggleSection('help'))} style={openSection === 'help'?{borderBottom:'none'}:{}}>
            <h2>Help & Support</h2>
            <FontAwesomeIcon icon={openSection === 'help'?faChevronUp:faChevronDown} />
            </div>
            {openSection === 'help' && (

            <ul>
              <Link>Get Help</Link>
              <Link>FAQs</Link>
            </ul>
            )}
          </div>


        </div>

    </div>
  )
}

export default Sidebar