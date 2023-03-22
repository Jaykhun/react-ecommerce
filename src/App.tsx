import Admin from '@/pages/Admin/Admin'
import Dashboard from '@/routes/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='admin' element={<Dashboard />}>
            <Route index element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App