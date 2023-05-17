import Button from '@components/common/Button';
import { classes } from '@utils/classes';
import css from './about.module.scss';

function About() {
  const { about } = css;

  return (
    <section className="section">
      <div className={classes(about)}>
        <h1>About Section</h1>
        <Button>Click</Button>
      </div>
    </section>
  );
}

export default About;
