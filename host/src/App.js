import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import Loading from './components/Loading';

const DashboardPage = React.lazy(() => import('DashboardApp/DashboardPage'));
const ListPage = React.lazy(() => import('ListApp/ListPage'));
const RegisterPage = React.lazy(() => import('RegisterApp/RegisterPage'));
const ModalRegister = React.lazy(() => import('RegisterApp/ModalRegister'));

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<Loading />}>
          <Layout />
        </Suspense>
      ),
      errorElement: <div>Error</div>,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <DashboardPage />
            </Suspense>
          ),
        },
        {
          path: 'list',
          element: (
            <Suspense fallback={<Loading />}>
              <ListPage />
              <Outlet />
            </Suspense>
          ),
          children: [
            {
              path: 'register',
              element: (
                <Suspense fsallback={<Loading />}>
                  <ModalRegister />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: 'register',
          element: (
            <Suspense fallback={<Loading />}>
              <RegisterPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
