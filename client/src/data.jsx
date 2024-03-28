import "../src/components/menu/menu.scss";
//icon
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoIosReorder } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineRateReview } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { GiAnticlockwiseRotation } from "react-icons/gi";

export const menu = [
    {
        id: 1,
        title: "Dashboard",
        url: "/",
        icon: <MdOutlineDashboard className="icon-item"/>,
    },
    {
        id: 1,
        title: "Analytics",
        url: "/",
        icon: <MdOutlineAnalytics className="icon-item"/>,
    },
    {
        id: 1,
        title: "Order",
        url: "/",
        icon: <IoIosReorder className="icon-item"/>,
    },
    {
        id: 1,
        title: "Customer",
        url: "/",
        icon: <IoIosPeople className="icon-item"/>,
    },{
        id: 1,
        title: "Offers",
        url: "/",
        icon: <BiSolidOffer className="icon-item"/>,
    },
    {
        id: 1,
        title: "Reviews",
        url: "/",
        icon: <MdOutlineRateReview className="icon-item"/>,
    },{
        id: 1,
        title: "Settings",
        url: "/",
        icon: <IoSettingsOutline className="icon-item"/>,
    },
    {
        id: 1,
        title: "Security",
        url: "/",
        icon: <MdOutlineSecurity className="icon-item"/>,
    },{
        id: 1,
        title: "Help center",
        url: "/",
        icon: <IoIosHelpCircleOutline className="icon-item"/>,
    },
    {
        id: 1,
        title: "Logout",
        url: "/",
        icon: <GiAnticlockwiseRotation className="icon-item"/>,
    },
];