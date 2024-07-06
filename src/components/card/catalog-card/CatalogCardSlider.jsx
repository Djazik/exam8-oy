import { NavLink } from "react-router-dom";
import "./CatalogCardSlider.scss";
import { GoArrowRight } from "react-icons/go";
const CatalogCardSlider = ({ title, image }) => {
  return (
    <div className="card-slider">
      <p className="card-slider_title">{title}</p>
      <div className="card-slider_img">
        <img src={image} alt={image} className="" />
      </div>
      <NavLink className="card-slider_link">
          От 540₽
          <GoArrowRight />
        </NavLink>
    </div>
  );
};

export default CatalogCardSlider;
