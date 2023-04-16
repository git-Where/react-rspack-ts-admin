import React from 'react';
import Layout from '~/layout'
import {
    BrowserRouter,
    Routes,
    Route,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import loadable from '~/components/loadable'
// import Home from '@/Home';
// import Register from '@/register';
// import Error404 from '@/error';

const Register = loadable(() => import(/* webpackChunkName: 'default' */ '@/register'))
const Error404 = loadable(() => import(/* webpackChunkName: '404' */ '@/error'))
const Home = loadable(() => import(/* webpackChunkName: 'Home' */ '@/Home'))

const App = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <Register />,
        },
        {
          path: "404",
          element: <Error404 />,
        },
      ]);
    return (
        <Layout>
         <RouterProvider router={router} />
            {/* <Routes>
                <Route path="/" Component={Register} />
                <Route path="/404" Component={Error404} />
                <Route path="home" Component={Home} />
                <Route path="register" Component={Register} />
            </Routes> */}
        </Layout>
    )
    } 

export default App