import React, { Suspense } from "react";

const Home = React.lazy(() => import('@wayfarer-mfe-home/Home'));
const Search = React.lazy(() => import('@wayfarer-mfe-search/Search'));
const Nav = React.lazy(() => import('@wayfarer_mfe_nav/App'));

const App = () => (
  <div>
    <h1>WayFarer Shell</h1>
    <Suspense fallback={<div>Loading Home...</div>}>
      <Home />
    </Suspense>
    <Suspense fallback={<div>Loading Search...</div>}>
      <Search />
    </Suspense>
    <Suspense fallback={<div>Loading Nav...</div>}>
      <Nav />
    </Suspense>
  </div>
);

export default App;