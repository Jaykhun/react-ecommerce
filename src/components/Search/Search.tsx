import './Search.scss'

const Search = () => {
    return (
        <div className='search'>
            <form className="search__form">
                <input type="text" className="search__input" placeholder="Я ищу…" />
                <button type="button" className="search__btn"></button>
            </form>
        </div>
    )
}

export default Search