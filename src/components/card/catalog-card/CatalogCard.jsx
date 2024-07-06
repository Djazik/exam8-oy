import { NavLink } from "react-router-dom";
import "./CatalogCard.scss";
import { GoArrowRight } from "react-icons/go";
const CatalogCard = ({ title, image }) => {
  return (
    <div className="catalog-box">
      <div className="catalog-item">
        <p className="catalog-title">{title}</p>
        <NavLink className="catalog-link">
          От 540₽
          <GoArrowRight />
        </NavLink>
      </div>
      <img src={image} alt={title} className="catalog-img" />
    </div>
  );
};

export default CatalogCard;
