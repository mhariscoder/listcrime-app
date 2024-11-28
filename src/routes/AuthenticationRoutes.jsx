import React, { Suspense, lazy } from 'react';

const AuthLogin = lazy(() => import('../views/pages/authentication/AuthLogin'));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/login',
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthLogin />
    </Suspense>
  )
};

export default AuthenticationRoutes;