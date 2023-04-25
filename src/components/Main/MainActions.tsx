import Catalog from '@/components/Catalog'
import Search from '@/components/Search'
import { Link } from 'react-router-dom'

const MainActions = () => {
    return (
        <section className="main-actions">
            <div className="main-actions__catalog">
                <Catalog />
            </div>

            <div className="main-actions__search">
                <Search />
            </div>

            <div className="main-actions__buy">
                <Link to="/cart" className="main-actions__cart">
                    <button className="cart__btn"></button>
                    <span className="cart__amount">2</span>
                </Link>
            </div>
        </section>
    )
}

export default MainActions