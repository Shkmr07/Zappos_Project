import LifeSytle from "@/assets/LifeSytle.jpg";
import Boots from "@/assets/Boots.jpg";
import Heels from "@/assets/Heels.jpg";
import Loffers from "@/assets/Loffers.jpg";
import Sleeper from "@/assets/Sleeper.jpg";
import Sleepwear from "@/assets/Sleepwear.jpg";
import UGGHoliday from "@/assets/UGGHoliday.png";
import UGGHolidayShoe from "@/assets/UGGHolidayShoe.png";
import Arrival from "@/assets/newArrival.webp";
import Dude from "@/assets/Dude.jpg";
import hunter from "@/assets/hunter.jpg";
import keen from "@/assets/keen.jpg";
import sandles from "@/assets/sandles.png";
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";
import banner3 from "@/assets/banner3.png";
import "../style/homepage.css";

import { Link, useNavigate } from "react-router-dom";
import CreateCard from "./CreateCard";

export default function Homepage() {

  const navigate = useNavigate()

  const newArrival = [
    {
      title: "KEEN",
      image: keen,
      productName: "Houser III Slider",
      category: `Women's`,
      price: "99.98",
    },
    {
      title: "Hunter Kids",
      image: hunter,
      productName: "Cozy (Little kid/ Big kid)",
      category: `Kid's`,
      price: "120.00",
    },
    {
      title: "Hey Dude",
      image: Dude,
      productName: "Wendy Disco sequin",
      category: `Women's`,
      price: "69.99",
    },
  ];

  return (
    <div className="landingPage">
      <div className="trendingNow">
        <h1>Trending Now</h1>
        <div className="trandingNowSub-Div">
          <div>
            <img src={LifeSytle} alt="LifeStyle" />
            <Link to="/productPage/all">LifeStyle Sneakers</Link>
          </div>
          <div>
            <img src={Boots} alt="Boots" />
            <Link to="/productPage/all">Boots</Link>
          </div>
          <div>
            <img src={Heels} alt="Heels" />
            <Link to="/productPage/Women">Heels</Link>
          </div>
          <div>
            <img src={Loffers} alt="Loafers" />
            <Link to="/productPage/Men">Loafers</Link>
          </div>
          <div>
            <img src={Sleepwear} alt="Sleeepwear" />
            <Link to="/productPage/all">Sleepwear</Link>
          </div>
          <div>
            <img src={Sleeper} alt="Slippers" />
            <Link to="/productPage/all">Slippers</Link>
          </div>
        </div>
      </div>

      <div className="UGG">
        <div>
          <img src={UGGHoliday} alt="UGG" />
          <Link to="/productPage/all">Shop the Looks</Link>
        </div>
        <div>
          <img src={UGGHolidayShoe} alt="UGG" />
          <Link to='/productPage/all'>Shop all UGG</Link>
        </div>
      </div>

      <div className="feelsLikeHome">
        <h1>Feels Like Home</h1>
        <div>
          <div>
            <img src={UGGHoliday} alt="UGG" />
            <Link to='/productPage/all'>Shop UGG Boots</Link>
          </div>
          <div>
            <img src={UGGHolidayShoe} alt="UGG" />
            <Link to='/productPage/all'>Shop UGG Classics</Link>
          </div>
          <div>
            <img src={UGGHolidayShoe} alt="UGG" />
            <Link to='/productPage/all'>Shop UGG Kids</Link>
          </div>
        </div>
      </div>
      <div className="newArrival">
        <div>
          <div>
            <img src={Arrival} alt="Arrival" />
          </div>

          {newArrival.map((item) => (
            <CreateCard onClick={()=>navigate('/productPage/all')} item={item} key={item.title} />
          ))}
        </div>
      </div>
      <div className="sparkle">
        <img src={sandles} alt="sparkle" />
        <div>
          <h1>Sparkle in Every Step</h1>
          <p>Soiree-ready styles that say, "I ve arrived."</p>
          <Link to='/productPage/all'>Shop Sam Edelman</Link>
        </div>
      </div>

      <div className="banner" onClick={()=>navigate('/productPage/all')}>
        <h1>Ways to Shop & Save!</h1>

        <div>
          <div>
            <img src={banner1} alt="banner1" />
          </div>
          <div>
            <img src={banner2} alt="banner2" />
          </div>
          <div>
            <img src={banner3} alt="banner3" />
          </div>
        </div>
      </div>
    </div>
  );
}
