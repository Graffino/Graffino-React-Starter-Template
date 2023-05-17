import Logo from '@images/svgs/logo.svg';
import { routes } from '@utils/routes';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();

  const displayLinks = () =>
    routes.map(({ name, path, isVisible }) => {
      const isActivePath = path === pathname;
      if (isVisible) {
        return (
          <div className="navigation__item" key={path}>
            <Link
              className={`link ${isActivePath ? 'link--active' : ''}`}
              to={path}
            >
              {name}
            </Link>
          </div>
        );
      }
      return null;
    });

  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" className="h-responsive-image" />
      </div>
      <div className="navigation">{displayLinks()}</div>
    </header>
  );
}

export default Header;
