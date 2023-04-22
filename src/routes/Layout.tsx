import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main className='main'>
                <div className="container">
                    {<Outlet />}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout