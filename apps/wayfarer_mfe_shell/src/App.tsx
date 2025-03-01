import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

const NavBar: any = React.lazy(() => import('@wayfarer_mfe_nav/NavBar'));

const App = () => (
  <div>
    <Router>
      <NavBar routes={routes} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({ path, component }) => {
            const Component = React.lazy(component);
            return <Route key={path} path={path} element={<Component />} />;
          })}
        </Routes>
      </Suspense>
    </Router>
  </div>
);

export default App;
