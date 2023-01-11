import {Outlet} from "react-router-dom";
import {MainContacts, MainActions, MainAside} from "./index";

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <MainContacts/>
                <MainActions/>
                <div className="main-content content">
                    <MainAside/>
                    <Outlet/>
                </div>
            </div>
        </main>
    );
};

export default Main;