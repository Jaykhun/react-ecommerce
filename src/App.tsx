import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '@/routes/Dashboard'
import { Admin, Users } from '@/pages/Admin'
import { UsersDetails } from '@/pages/Admin/Users'
import '@/styles/style.scss'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='admin' element={<Dashboard />}>
            <Route index element={<Admin />} />
            <Route path='users' element={<Users />} />
            <Route path='users/:id' element={<UsersDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App