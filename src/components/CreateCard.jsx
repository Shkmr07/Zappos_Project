import "../style/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar as empty } from "@fortawesome/free-regular-svg-icons";
import { faStar as filled } from "@fortawesome/free-solid-svg-icons";
export default function CreateCard({ item }) {
  const { image, title, productName, category, price, rating } = item;
  return (
    <div className="card">
      <div className="heart-icon">
      <FontAwesomeIcon icon={faHeart} />

      </div>
      <img src={image} alt={title} />
      <p className="title">{title}</p>
      <p className="productName">{productName}</p>
      <p className="category">{category}</p>
      <p className="price">{price}</p>
      <p className="rating">
        {Array.from({ length: 5 }, (_, index) =>
          index < 4 ? (
            <FontAwesomeIcon key={index} icon={filled} />
          ) : (
            <FontAwesomeIcon key={index} icon={empty} />
          )
        )}
      </p>
    </div>
  );
}
