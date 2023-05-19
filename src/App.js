import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Orders from './Pages/Orders/Orders';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            loader: () => fetch('Product.json'),
            element: <Home></Home>
          },
          {
            path: '/about',
            element: <About></About>
          },
          {
            path: '/orders',
            element: <Orders></Orders>
          },
          {
            path: '/contact',
            element: <Contact></Contact>
          }

        ]
      }
    ]

  )

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
