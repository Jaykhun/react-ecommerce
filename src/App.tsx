import { Admin, Users } from '@/pages/Admin'
import Dashboard from '@/routes/Dashboard'
import '@/styles/style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='admin' element={<Dashboard />}>
            <Route index element={<Admin />} />
            <Route path='users' element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App