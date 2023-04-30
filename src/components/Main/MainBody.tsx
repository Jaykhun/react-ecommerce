import AsideBar from '@/components/AsideBar'
import CallBack from '@/components/CallBack'
import { ContactsModal } from '@/components/Contacts'
import clsx from 'clsx'
import { Outlet, useLocation } from 'react-router-dom'
import { MainActions } from './index'

const MainBody = () => {
    const { pathname } = useLocation()
    return (
        <>
            <MainActions />
            <div className={clsx('main-content', { 'hide': pathname === '/cart'})}>
                {
                    pathname !== '/cart'
                    && <div className='main-content__asidebar'>
                        <AsideBar />
                    </div>
                }

                <div className="main-content__outlet">
                    <Outlet />
                </div>
            </div>

            <ContactsModal />
            <CallBack />
        </>
    )
}

export default MainBody