import { Layout, Welcome, Services, Transactions } from '../components';
import { TransactionProvider } from '@/context/TransactionContext';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <TransactionProvider>
      <div className={styles.container}>
        <Layout>
          <div className={styles.main}>
            <Welcome />
            <Services />
            <Transactions />
          </div>
        </Layout>
      </div>
    </TransactionProvider>
  );
}
