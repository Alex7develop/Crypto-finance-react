/* eslint-disable react/prop-types */
import Card from '../../components/Card/Card';
import CoinsList from '../../components/CoinsList/CoinsList';
import FilterBlock from '../../components/FilterBlock/FilterBlock';
import styles from './styles.module.css';

const Main = ({ balance, setBalance, coins, setCoins, filteredCoins }) => {
  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBlock setCoins={setCoins} coins={coins} />
      {coins.length > 0 ? (
        <CoinsList coins={filteredCoins} />
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default Main;
