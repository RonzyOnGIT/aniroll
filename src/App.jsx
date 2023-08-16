import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"


import { Rootlayout } from './layout/Rootlayout';
import { Home } from './pages/home/Home';
import { AccountPage } from './pages/account/AccountPage';
import { NewsPage } from './pages/news/NewsPage';
import { StorePage } from './pages/store/StorePage';
import { SingleAnimePage } from './pages/singleAnimePage/SingleAnimePage';
const CategoriesPage = React.lazy(() => import('./pages/categories/CategoriesPage'));

import { Loading } from './components/loading/Loading';




export const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Rootlayout /> }>
      <Route index element={ <Home /> } />
      <Route path='categories' element={<React.Suspense fallback={<Loading />}><CategoriesPage /></React.Suspense>  } />
      <Route path='account' element={ <AccountPage /> } />
      <Route path='news' element={ <NewsPage /> } />
      <Route path='store' element={ <StorePage /> } />
      <Route path='series/:id' element={ <SingleAnimePage /> } />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}