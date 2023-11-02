import logo from "../images/logo.svg";
import openBtn from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import profileImg from "../images/image-avatar.png";
import NavList from "./NavList";
import { useGlobalContext } from "../context";

const Navbar = () => {
    const {openSidebar, setCartOpen, cartOpen, total} = useGlobalContext();
    return ( 
        <header>
            <div className="header-left">
                <button 
                onClick={openSidebar}
                className="open-nav-btn">
                    <img src={openBtn} alt="openBtn" />
                </button>
                <img src={logo} alt="logo"/>
                <div className="header-nav">
                    <NavList />
                </div>
            </div>
            <div className="header-right">
                <button className="cart-btn"
                onClick={()=> setCartOpen(!cartOpen)}
                >
                    <img src={cart} alt="cart-img" />
                    <span>{total}</span>
                </button>
                <a href="/" className="profile-link">
                    <img src={profileImg} alt="profile-img" />
                </a>
            </div>
        </header>
     );
}
 
export default Navbar;