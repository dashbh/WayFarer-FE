declare module "@wayfarer_mfe_home/Home" {
  const HomePage: React.ComponentType;
  export default HomePage;
}

declare module "@wayfarer_mfe_nav/*" {
  const App: React.ComponentType;
  export default App;
}

declare module "@wayfarer_mfe_search/Search" {
  const SearchPage: React.ComponentType;
  export default SearchPage;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
