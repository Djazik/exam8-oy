import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./breadcrubs.scss";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="container">
      <ul className="breadcrubs ">
        <li>
          <Link className="breadcrubs__link" to={"/"}>
            Главная
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const title = value;

          return (
            <li key={to} className="breadcrubs__title">
              <span>/</span>
              {last ? <span>{title}</span> : <Link to={to}>{title}</Link>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BreadCrumbs;
