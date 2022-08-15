import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routeConfigs } from 'routes/routesConfigs'

export const RoutesConfig: React.FC = () => {
  const routes = useRoutes(routeConfigs)
  return routes
}
