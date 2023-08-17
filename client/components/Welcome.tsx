import styles from '../styles/Home.module.css';

const Welcome = () => {
    return (
        <div>
            <h1 className={styles.title}>
          Welcome to <a href="/">GrapeSwap</a>
        </h1>
        <p className={styles.description}>
            Swap <code>crypto directly from Mpesa to your crypto wallet</code>
        </p>
        </div>
    );
}

export default Welcome;