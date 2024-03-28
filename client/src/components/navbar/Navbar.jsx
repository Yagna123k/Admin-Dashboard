import "./navbar.scss";
import { FaGrinStars } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
// import { CiSearch } from "react-icons/ci";
import Search from "../../tools/search/Search";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <FaGrinStars size={30} />
                <span>Amolie</span>
                <div className="search-box">
                    <Search />
                </div>
            </div>
            <div className="icons">
                <div className="notification">
                    <IoIosNotificationsOutline size={25} />
                    <span>1</span>
                </div>
                <div className="user">
                    <img
                        src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt=""
                    />
                    <span>User</span>
                </div>
                <CiSettings size={25} />
            </div>
        </div>
    );
};
export default Navbar;