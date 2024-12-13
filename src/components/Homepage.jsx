import LifeSytle from "@/assets/LifeSytle.jpg";
import Boots from "@/assets/Boots.jpg";
import Heels from "@/assets/Heels.jpg";
import Loffers from "@/assets/Loffers.jpg";
import Sleeper from "@/assets/Sleeper.jpg";
import Sleepwear from "@/assets/Sleepwear.jpg";
import UGGHoliday from "@/assets/UGGHoliday.png";
import UGGHolidayShoe from "@/assets/UGGHolidayShoe.png";
import "../style/homepage.css";

import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="landingPage">
      <div className="trendingNow">
        <h1>Trending Now</h1>
        <div className="trandingNowSub-Div">
          <div>
            <img src={LifeSytle} alt="LifeStyle" />
            <Link to="#">LifeStyle Sneakers</Link>
          </div>
          <div>
            <img src={Boots} alt="Boots" />
            <Link to="#">Boots</Link>
          </div>
          <div>
            <img src={Heels} alt="Heels" />
            <Link to="#">Heels</Link>
          </div>
          <div>
            <img src={Loffers} alt="Loafers" />
            <Link to="#">Loafers</Link>
          </div>
          <div>
            <img src={Sleepwear} alt="Sleeepwear" />
            <Link to="#">Sleepwear</Link>
          </div>
          <div>
            <img src={Sleeper} alt="Slippers" />
            <Link to="#">Slippers</Link>
          </div>
        </div>
      </div>

      <div className="UGG">
        <div>
          <img src={UGGHoliday} alt="UGG" />
          <Link>Shop the Looks</Link>
        </div>
        <div>
          <img src={UGGHolidayShoe} alt="UGG" />
          <Link>Shop all UGG</Link>
        </div>
      </div>

      <div className="feelsLikeHome">
        <h1>Feels Like Home</h1>
        <div>
          <div>
            <img src={UGGHoliday} alt="UGG" />
            <Link>Shop UGG Boots</Link>
          </div>
          <div>
            <img src={UGGHolidayShoe} alt="UGG" />
            <Link>Shop UGG Classics</Link>
          </div>
          <div>
            <img src={UGGHolidayShoe} alt="UGG" />
            <Link>Shop UGG Kids</Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}
