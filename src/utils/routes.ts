import About from '@components/pages/about/About';
import Home from '@components/pages/home/Home';

type Route = {
  path: string;
  Component: () => JSX.Element;
  name: string;
  isVisible?: boolean;
};

export const routes: Route[] = [
  {
    path: '/',
    Component: Home,
    name: 'Home',
    isVisible: true,
  },
  {
    path: '/about',
    Component: About,
    name: 'About',
    isVisible: true,
  },
];
