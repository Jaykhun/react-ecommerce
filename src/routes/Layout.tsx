import "../styles/style.scss"
import Header from "../components/Header";
import {Main} from "../components/Main";
import Footer from "../components/Footer";
import MobileMenu from "../components/Menu";
import {PhonePopup, SearchPopup, Auth} from "../components/Popup";

const Layout = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Main/>
            <Footer/>

            <Auth/>
            <PhonePopup/>
            <SearchPopup/>
            <MobileMenu/>
        </div>
    );
};

export default Layout;