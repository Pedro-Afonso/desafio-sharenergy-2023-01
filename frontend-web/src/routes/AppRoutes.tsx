import { Route, Routes } from 'react-router-dom'

import { HttpCat, RandomDog, RandomUser } from '../pages'
import { UserDetails, UserListing } from '../pages/User'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/random-user" element={<RandomUser />} />
      <Route path="/http-cat" element={<HttpCat />} />
      <Route path="/random-dog" element={<RandomDog />} />
      <Route path="/user/" element={<UserListing />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  )
}
