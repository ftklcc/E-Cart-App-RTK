import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import "./Navbar.css";

// Icons / İkonlar
import { BiMoon, BiShoppingBag, BiSun } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  // Menu visibility state / Menü görünürlük durumu
  const [showLinks, setShowLinks] = useState(false);

  // Refs for dynamic height calculation / Dinamik yükseklik hesaplama referansları
  const linksRef = useRef(null);
  const containerRef = useRef(null);

  const navigate = useNavigate();
  // custom theme hooks
  const { isDark, toggleTheme } = useTheme();

  // Cart data from Redux / Redux'tan sepet verisi
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((total, item) => item.quantity + total, 0);

  /*
   Effect to handle the "Push" animation by calculating height
  */
  useEffect(() => {
    if (linksRef.current && containerRef.current) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      // If menu is open, set height to calculated pixels, else 0
      containerRef.current.style.height = showLinks ? `${linksHeight}px` : "0px";
    }
  }, [showLinks]);


  const handleLinkClick = () => {
    setShowLinks(false);
  };

  return (
    <header className="header">
      <nav className="mx nav">

        {/* LOGO SECTION */}
        <div
          className="nav__logo"
          onClick={() => { navigate("/"); handleLinkClick(); }}
        >
          <h2>E-CART</h2>
        </div>


        {/* LİNK BÖLÜMÜ */}
        <div className="links__container" ref={containerRef}>
          <ul className="links" ref={linksRef}>
            <li>
              <NavLink to="/" className="nav__link" onClick={handleLinkClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="nav__link" onClick={handleLinkClick}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav__link" onClick={handleLinkClick}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* ACTIONS SECTION (Theme, Cart, Hamburger) */}
        <div className="nav__actions">
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {isDark ? <BiSun /> : <BiMoon />}
          </button>

          <div
            className="nav__cart"
            onClick={() => { navigate("/cart"); handleLinkClick(); }}
          >
            <BiShoppingBag size={20} />
            <span className="cart-badge">{totalQuantity}</span>
          </div>

          <div
            className={`hamburger ${showLinks ? "active" : ""}`}
            onClick={() => setShowLinks(!showLinks)}
          >
            <GiHamburgerMenu className="icon-menu" />
            <IoClose className="icon-close" />
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;