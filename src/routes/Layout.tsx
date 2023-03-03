import Header from "../components/Header";
import {Main} from "../components/Main";
import Footer from "../components/Footer";
import MobileMenu from "../components/Menu";
import CallBack from "../components/CallBack";
import {Auth} from "../components/Auth";
import PhonePopup from "../components/PhonePopup";
import SearchPopup from "../components/SearchPopup";
import "../styles/style.scss"

const Layout = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Main/>
            <Footer/>

            <Auth/>
            <CallBack/>
            <PhonePopup/>
            <SearchPopup/>
            <MobileMenu/>
        </div>
    );
};

export default Layout;