import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.hero}>
      <p className={css.title}>
        <pre>І справжнім друзям, не забудь, подзвони</pre>
        <pre>Бо, добре чи зле, з тобою завжди вони!</pre>
      </p>
    </div>
  );
};

export default Home;
