import React, { Suspense } from 'react'

// eslint-disable-next-line @typescript-eslint/promise-function-async
const Home = React.lazy(() => import('pages/Home/Home'))
// eslint-disable-next-line @typescript-eslint/promise-function-async
const Page = React.lazy(() => import('pages/Page/Page'))

export const routeConfigs = [
  {
    path: '/',
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  {
    path: 'page',
    element: (
      <Suspense>
        <Page />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <div>Not found</div>,
  },
]
