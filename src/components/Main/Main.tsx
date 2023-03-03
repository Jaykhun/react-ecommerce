import {Outlet} from "react-router-dom";
import Contacts from "../Contacts";
import SearchActions from "../SearchActions";
import AsideBar from "../AsideBar";

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <Contacts/>
                <SearchActions/>
                <div className="main-content content">
                    <AsideBar/>
                    <Outlet/>
                </div>
            </div>
        </main>
    );
};

export default Main;