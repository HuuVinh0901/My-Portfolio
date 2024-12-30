import { memo } from "react";
import "./style.scss";
import profile from '../../assets/img/MyProfile.jpg';
import Navbar from "../../components/stickyNavbar"
const Header = () => {
    return (
        <>
            <div id="home" className="header_top">
                <Navbar/>
            </div>
            <div className="header_profile">
                <div className="img">
                    <img src={profile} alt="Profile" className="img_profile transform transition-transform duration-300 hover:scale-110 " />
                </div>
            </div>


        </>
    );

};
export default memo(Header);