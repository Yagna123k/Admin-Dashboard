import { Link } from "react-router-dom";
import "./menu.scss";
//data
import { menu } from "../../data";

const Menu = () => {
    return (
        <div className="menu">
            {menu.map((item) => (
                <div className="item" key={item.id}>
                    <Link to={item.url} className="listItem" key={item.id}>
                        <div className="icon-item">
                            {item.icon}
                        </div>
                        <span className="listTitle">{item.title}</span>
                    </Link>
                </div>
            ))}
        </div>
    );
};
export default Menu;