import { Link } from "react-router-dom"

const Location = () => {
    return (
        <div className="site-path">
            <Link className="site-history" to="/">Главная</Link>
            <span className="current-site" >Корзина</span>
        </div>
    );
};

export default Location;