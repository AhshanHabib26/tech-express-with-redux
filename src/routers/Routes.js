import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import PopularProduct from '../pages/PopularProduct';
import Whishlist from '../pages/Whishlist';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'popular-product',
        element: <PopularProduct />,
      },
      {
        path: 'whishlist',
        element: <Whishlist />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

export default routes;
