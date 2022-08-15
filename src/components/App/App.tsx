import { BrowserRouter } from 'react-router-dom'

import { RoutesConfig } from 'routes/RoutesConfig'

import './App.scss'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  )
}
