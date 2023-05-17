import Footer from '@components/layout/footer/Footer';
import Header from '@components/layout/header/Header';
import { routes } from '@utils/routes';
import { Routes, Route } from 'react-router-dom';
import '@styles/global.scss';
import { classes } from '@utils/classes';
import useTheme from './hooks/useTheme';

function App() {
  // eslint-disable-next-line no-console
  console.log('source map enabled in development mode');
  const yourEnvVariable = process.env.REACT_APP_YOUR_ENV_VARIABLE;
  // eslint-disable-next-line no-console
  console.log(yourEnvVariable);

  const { mode } = useTheme();

  return (
    <>
      <Header />
      <main className={classes('main', mode)}>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
