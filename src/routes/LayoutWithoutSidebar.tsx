import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/Menu";
import {MainActions, MainContacts} from "../components/Main";
import {PhonePopup, SearchPopup, Auth} from "../components/Popup";

const LayoutWithoutSidebar = () => {
    return (
        <div className="wrapper">
            <Header/>
            <main className="main">
                <div className="container">
                    <MainContacts/>
                    <MainActions/>
                    <Outlet/>
                </div>
            </main>
            <Footer/>

            <PhonePopup/>
            <SearchPopup/>
            <MobileMenu/>
            <Auth/>
        </div>
    );
};

export default LayoutWithoutSidebar;