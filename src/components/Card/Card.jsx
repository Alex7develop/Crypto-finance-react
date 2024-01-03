/* eslint-disable react/prop-types */
import { WithRuBalance } from '../../helpers/hoc/withRuBalance';
import './styles.css';

const Card = ({ balance, setBalance, ruBalance }) => {
  console.log({ruBalance});
  return (
    <div className="card">
      <div className="card-block">
        <p>Crypto-finance</p>
        <button
          onClick={() => setBalance((prev) => prev + 1000)}
        >
          Add money
        </button>
      </div> 
      <div className="card-block">
        <p>ALEKSANDR KIRILCHUK</p>
        <p>{balance} $</p>
      </div>
    </div>
  );
};

export default WithRuBalance(Card);
