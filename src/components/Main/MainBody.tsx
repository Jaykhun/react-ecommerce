import AsideBar from '@/components/AsideBar'
import CallBack from '@/components/CallBack'
import { ContactsModal } from '@/components/Contacts'
import { Outlet } from 'react-router-dom'
import { MainActions } from './index'

const MainBody = () => {
    return (
        <>
            <MainActions />
            <div className="main-content">
                <div className="main-content__asidebar">
                    <AsideBar />
                </div>

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