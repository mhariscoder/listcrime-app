// protected routes
import ProtectedRoutes from './../utils/protected-routes';


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <ProtectedRoutes><></></ProtectedRoutes>,
  children: [
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <></>
        }
      ]
    },
    
  ]
};

export default MainRoutes;
