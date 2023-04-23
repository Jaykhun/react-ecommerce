import UserMenu from '@/components/UserMenu'
import './TopBar.scss'

const TopBar = () => {
    return (
        <div className='topbar'>
            <div className="topbar__title">Админ панель</div>
            <div className="topbar__menu"><UserMenu/></div>
        </div>
    )
}

export default TopBar