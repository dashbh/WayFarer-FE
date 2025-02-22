import React, { Suspense } from "react";

const Home = React.lazy(() => import('@wayfarer_mfe_home/Home'));
const Search = React.lazy(() => import('@wayfarer_mfe_search/Search'));
const NavBar = React.lazy(() => import('@wayfarer_mfe_nav/NavBar'));

const App = () => (
  <div>
    <Suspense fallback={<div>Loading Nav...</div>}>
      <NavBar />
    </Suspense>
    <Suspense fallback={<div>Loading Home...</div>}>
      <Home />
    </Suspense>
    <Suspense fallback={<div>Loading Search...</div>}>
      <Search />
    </Suspense>
  </div>
);

export default App;