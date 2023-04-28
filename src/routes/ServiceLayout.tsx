import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const ServiceLayout = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className="container">
        <main className='main'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default ServiceLayout