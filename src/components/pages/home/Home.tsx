/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import Button from '@components/common/Button';
import { classes } from '@utils/classes';
import { ReactComponent as Check } from '@icons/check.svg';
import edit from '@icons/edit.svg';
import css from './home.module.scss';

function Home() {
  return (
    <section className={classes('section')}>
      <div className={classes(css.home__home_container)}>
        <Check color="white" width={24} height={24} />
        <img src={edit} alt="edit" width={24} height={24} />
        <h1 className={classes('h1', 'h_font_extralight')}>Home Section</h1>
        <Button>Click</Button>
      </div>
    </section>
  );
}

export default Home;
