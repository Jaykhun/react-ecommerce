import "../styles/style.scss"
import Header from "../components/Header";
import {Main} from "../components/Main";
import Footer from "../components/Footer";
import MobileMenu from "../components/Menu";
import {PhonePopup, SearchPopup, SignInPopup} from "../components/Popup";

const Layout = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Main/>
            <Footer/>

            <SignInPopup/>
            <PhonePopup/>
            <SearchPopup/>
            <MobileMenu/>
        </div>
    );
};

export default Layout;