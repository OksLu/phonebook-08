import css from './HomePage.module.css';
import hero from '../images/hands.jpg';

const HomePage = () => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Welcome to Simple Phonebook!</h1>
      <img src={hero} alt="phonebook" width="700" height="460" />
    </section>
  );
};

export default HomePage;
