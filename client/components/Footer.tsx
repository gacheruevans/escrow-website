import styles from '../styles/Home.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
             <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          All rights reserved by{' '}
          <img src="/assets/grapes.svg" alt="GrapeSwap" className={styles.logo} />
          GrapeSwap @2023
        </a>
        </div>
    );
}

export default Footer;