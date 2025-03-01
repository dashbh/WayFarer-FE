export type RouteConfig = {
  path: string;
  label: string;
  component: () => Promise<{ default: React.ComponentType<any> }>;
};

export const routes: RouteConfig[] = [
  { path: '/', label: 'Home', component: () => import('@wayfarer_mfe_home/Home') },
  { path: '/explore', label: 'Search', component: () => import('@wayfarer_mfe_search/Search') },
  { path: '/contact', label: 'Search', component: () => import('@wayfarer_mfe_search/Search') },
];
