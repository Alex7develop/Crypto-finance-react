/* eslint-disable react/prop-types */
import './styles.css';

const Card = ({ balance, setBalance }) => {
  return (
    <div className="card">
      <div className="card-block">
        <p>CRYPTO-FINANCE</p>
        <button
          onClick={() => setBalance((prev) => prev + 1000)}
        >
          Add money
        </button>
      </div> 
      <div className="card-block">
        <p>ALEKSANDR</p>
        <p>{balance} $</p>
      </div>
    </div>
  );
};

export default Card;
