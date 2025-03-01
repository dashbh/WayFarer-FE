import { BrowserRouter } from 'react-router-dom';
import NavBar from './navbar';

const NavBarWithRouter = (props: any) => (
  <BrowserRouter>
    <NavBar {...props} />
  </BrowserRouter>
);

export default NavBarWithRouter;
