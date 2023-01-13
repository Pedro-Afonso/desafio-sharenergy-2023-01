import { Route, Routes } from 'react-router-dom'

import { RandomUser } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/random-user" element={<RandomUser />} />
    </Routes>
  )
}
