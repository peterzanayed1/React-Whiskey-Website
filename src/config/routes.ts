
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";

interface RouteType {
    path : string,
    component : () => JSX.Element,
    name : string
}

const routes: RouteType[] = [
    {
    path:"",
    component : Home,
    name : 'home screen'
    },
    {
      path:"/Dashboard",
      component : Dashboard,
      name : 'Dashboard',
      
      },
      {
        path:"/About",
        component : About,
        name : 'About'
        },
  ]

  export default routes