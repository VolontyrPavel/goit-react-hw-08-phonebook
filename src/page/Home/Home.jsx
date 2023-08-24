import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.hero}>
      <p className={css.title}>І справжнім друзям, не забудь, подзвони</p>
      <p className={css.title}>Бо, добре чи зле, з тобою завжди вони!</p>
    </div>
  );
};

export default Home;
