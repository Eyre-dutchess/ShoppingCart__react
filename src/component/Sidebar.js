import { useGlobalContext } from "../context";
import closeBtn from "../images/icon-close.svg";
import NavList from "./NavList";
const Sidebar = () => {
    const {sidebarOpen, closeSidebar} = useGlobalContext();
    return ( 
        <div className={`sidebar-container ${sidebarOpen ? "active" :""}`}>
           <button 
           onClick={closeSidebar}
           className="close-nav-btn">
                <img src={closeBtn} alt="closeBtn" />
           </button>
           <NavList />
        </div>
     );
}
 
export default Sidebar;