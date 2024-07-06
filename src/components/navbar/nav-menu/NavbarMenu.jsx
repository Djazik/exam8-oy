import { TbMenuDeep } from "react-icons/tb";
import "./NavbarMenu.scss";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { NAVLINK } from "../../../static";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const NavbarMenu = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="navbar_menu">
      <span onClick={() => setShow(!show)}>
        {show ? <IoMdClose /> : <TbMenuDeep />}
      </span>
      {show && (
        <div className="nav-menu_content">
          <div className="nav-menu_links">
            {NAVLINK.map((el, index) => (
              <Link
                className="nav-menu_link"
                key={index}
                to={el.path}
                onClick={() => setShow(false)}
              >
                {el.name}
              </Link>
            ))}
          
          </div>
          <div className="nav-menu_btn">
          <button className="nav-catalog">
              <HiOutlineMenuAlt1 />
              <p>Каталог</p>
            </button>
          </div>
          <div className="nav-menu_phone">
            <p>8 (800) 890-46-56</p>
            <p>Заказать звонок</p>
          </div> 
        </div>
      )}
    </div>
  );
};

export default NavbarMenu;
