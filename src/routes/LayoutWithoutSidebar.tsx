import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/Menu";
import Contacts from "../components/Contacts";
import SearchActions from "../components/SearchActions";
import {Auth} from "../components/Auth";
import PhonePopup from "../components/PhonePopup";
import SearchPopup from "../components/SearchPopup";
import {ProfileEdit} from "../pages/Profile";

const LayoutWithoutSidebar = () => {
    return (
        <div className="wrapper">
            <Header/>
            <main className="main">
                <div className="container">
                    <Contacts/>
                    <SearchActions/>
                    <Outlet/>
                </div>
            </main>
            <Footer/>

            <Auth/>
            <ProfileEdit/>
            <PhonePopup/>
            <SearchPopup/>
            <MobileMenu/>
        </div>
    );
};

export default LayoutWithoutSidebar;