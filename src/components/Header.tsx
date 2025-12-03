import { useMemo } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  const path = useMemo(() => {
    return location.pathname.split('/')[1];
  }, [location.pathname]);

  return (
    <header>
      <div className="title">
        <Link to="/" className="name code-regular">
          Kevin Galvez
        </Link>
        {path ? <span className="dash"> — </span> : null}
        {path ? <span className="location">{`${path}`}</span> : null}
      </div>
      <nav>
        <NavLink
          to="/resume"
          className={({ isActive, isPending }) => {
            return isActive ? 'active' : isPending ? 'pending' : '';
          }}
        >
          resume
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive, isPending }) => {
            return isActive ? 'active' : isPending ? 'pending' : '';
          }}
        >
          projects
        </NavLink>
        <NavLink
          to="/writing"
          className={({ isActive, isPending }) => {
            return isActive ? 'active' : isPending ? 'pending' : '';
          }}
        >
          writing
        </NavLink>
      </nav>
    </header>
  );
};
