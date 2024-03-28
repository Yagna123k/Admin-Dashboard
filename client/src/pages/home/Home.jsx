import "./home.scss";
import Revenue from "../../components/revenue/Revenue";
import Extra from "../../components/extra/Extra";
import TotalDelivered from "../../components/totalDelivery/TotalDelivered";
import TotalCanceled from "../../components/totalCancel/TotalCanceled";
//icon
import { RxBorderWidth } from "react-icons/rx";
import { FaArrowTrendDown } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";


const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <Revenue />
            </div>
            <div className="box box1">
                <Extra icon1={
                    <RxBorderWidth size={30} />}
                    title={"Total Orders"}
                    icon2={<FaArrowTrendDown size={15} />}
                    compare={"-1.4% compared with last day"}
                    value={"90"}
                    smaller={"orders"}
                    icon3={<IoArrowForwardCircleOutline />}
                />
            </div>
            <div className="box box1">
                <TotalDelivered />
            </div>
            <div className="box box1">
                <TotalCanceled />
            </div>
            <div className="box box5">
                box5
            </div>
            <div className="box box6">
                box6
            </div>
            <div className="box box7">
                box7
            </div>
        </div>
    );
};
export default Home;