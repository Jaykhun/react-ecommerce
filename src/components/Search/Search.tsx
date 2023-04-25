import './Search.scss'

const Search = () => {
    return (
        <div className='search'>
            <form className="search__form">
                <input type="text" className="search__input" placeholder="Я ищу…" />
                <button type="button" className="search__btn"></button>
            </form>

            <div className="search__parametr">
                <button className="search__parametr-btn">Подбор по параметрам</button>
            </div>
        </div>
    )
}

export default Search