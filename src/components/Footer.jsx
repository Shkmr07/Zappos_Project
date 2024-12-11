import "../style/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="formContainer">
        <div className="formDetails">
          <h2>Join Our List, Get 10% Off</h2>
          <p>
            Sign up for Zappos emails—new subscribers get 10% off a future
            order!* Plus, get early access to sales, coupons, and more. (One
            code per email address.)
          </p>
          <div className="form">
            <input type="text" placeholder="Email Address" />
            <button>Join the Party</button>
          </div>
        </div>
      </div>

      <div className="info-details">
        <div className="info-detailsContainer">
          <div className="social-media">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="info-pages">
            <div className="about-zappos">
              <h3>About Zappos</h3>
              <ul>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Zappos ONE</Link>
                </li>
                <li>
                  <Link to="#">Zappos for Good</Link>
                </li>
                <li>
                  <Link to="#">Zappos at Work</Link>
                </li>
                <li>
                  <Link to="#">Get the Zappos Mobile App</Link>
                </li>
                <li>
                  <Link to="#">Amazon Prime Benefits</Link>
                </li>
                <li>
                  <Link to="#">Zappos VIP Benefits</Link>
                </li>
                <li>
                  <Link to="#">Coupons & Sales</Link>
                </li>
                <li>
                  <Link to="#">Accessibility Statement</Link>
                </li>
              </ul>
            </div>
            <div className="customer-service">
              <h3>Customer Service</h3>
              <ul>
                <li>
                  <Link to="#">FAQs</Link>
                </li>
                <li>
                  <Link to="#">Contact Info</Link>
                </li>
                <li>
                  <Link to="#">Ayuda en espanol</Link>
                </li>
                <li>
                  <Link to="#">Shipping And Returns Policy</Link>
                </li>
                <li>
                  <Link to="#">About Proposition 65</Link>
                </li>
              </ul>
            </div>
            <div className="resources">
              <h3>Resources</h3>
              <ul>
                <li>
                  <Link to="#">Measurement Guide</Link>
                </li>
                <li>
                  <Link to="#">Size Conversion Chart</Link>
                </li>
                <li>
                  <Link to="#">Measure Your Bra Size</Link>
                </li>
                <li>
                  <Link to="#">Associates Program</Link>
                </li>
                <li>
                  <Link to="#">Jobs</Link>
                </li>
                <li>
                  <Link to="#">Press Kit & Brand Inquiries</Link>
                </li>
                <li>
                  <Link to="#">Site Map</Link>
                </li>
                <li>
                  <Link to="#">Take Survey</Link>
                </li>
              </ul>
            </div>
            <div className="explore-zappos">
              <h3>Explore Zappos</h3>
              <ul>
                <li>
                  <Link to="#">Brands</Link>
                </li>
                <li>
                  <Link to="#">Clothing</Link>
                </li>
                <li>
                  <Link to="#">The Style Room</Link>
                </li>
                <li>
                  <Link to="#">Eyewear</Link>
                </li>
                <li>
                  <Link to="#">New Arrivals</Link>
                </li>
                <li>
                  <Link to="#">Running</Link>
                </li>
                <li>
                  <Link to="#">Jackets</Link>
                </li>
                <li>
                  <Link to="#">Shoes</Link>
                </li>
                <li>
                  <Link to="#">Watches</Link>
                </li>
                <li>
                  <Link to="#">Zappos Adaptive</Link>
                </li>
                <li>
                  <Link to="#">All Departments</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2009-2024 - Zappos.com LLC or its affiliates</p>
          <ul>
            <li>
              <Link to='#'>Terms of Use</Link>
              <span> / </span>
            </li>
            <li>
              <Link to='#'>Privacy Policy</Link>
              <span> / </span>
            </li>
            <li>
              <Link to='#'>Fur Policy</Link>
              <span> / </span>
            </li>
            <li>
              <Link to='#'>Interest-Based Ads</Link>
              <span> / </span>
            </li>
            <li>
              <Link to='#'>24/7 Customer Service (800)927-7671</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
