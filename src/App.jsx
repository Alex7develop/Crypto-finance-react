import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import { getCoins } from './api/api';

function App() {
  const [balance, setBalance] = useState(70000);
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data.coins);
      setFilteredCoins(data.coins);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Main
        setCoins={setFilteredCoins}
        coins={coins}
        balance={balance}
        setBalance={setBalance}
        filteredCoins={filteredCoins}
      />
    </>
  );
}

export default App;
