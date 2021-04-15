import {  Suspense } from "react";
import { routes } from "./routes";
import { NavLink, Switch, Route } from "react-router-dom";
// import style from "./Components/routes/Section.module.css"

const MainNavigation = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          {routes.map(({ path, exact, component: Component }) => (
            <Route path={path} exact={exact} component={Component} />
          ))}
        </Switch>
      </Suspense>

      {routes.map(({ path, exact, label }) => (
        <NavLink
          // className={style.active}
          key={path}
          exact={exact}
          to={path}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
};
export default MainNavigation;
