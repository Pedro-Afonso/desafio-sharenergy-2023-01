import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

import { Header } from './shared/components'
import { queryClient } from './shared/services/api'
import { AppRoutes } from './routes/AppRoutes'

import './global.css'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        {/* <Footer /> */}
      </BrowserRouter>
    </QueryClientProvider>
  )
}
