import styles from '../styles/Home.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <a href="#" target="_blank" rel="noopener noreferrer">
      All rights reserved by{' '}
      <img src="/assets/grapes.svg" alt="GrapeSwap" className={styles.logo} />
      GrapeSwap &#169;2023
    </a>
  </div>
);

export default Footer;
