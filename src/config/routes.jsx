import Admins from './../modules/Admins'
import Clients from './../modules/Clients'
import Couriers from './../modules/Couriers'
import Products from './../modules/Product'
import Orders from './../modules/Orders'
import Profile from '../modules/Profile'

export const routes = () => {
  return [
    {
      id: 1,
      path: '/',
      element: <Admins />
    },
    {
      id: 2,
      path: '/products',
      element: <Products />
    }, {
      id: 3,
      path: '/clients',
      element: <Clients />
    }, {
      id: 4,
      path: '/couriers',
      element: <Couriers />
    }, {
      id: 5,
      path: '/orders',
      element: <Orders />
    }, {
      id: 6,
      path: '/profile',
      element: <Profile />
    },
  ]
}