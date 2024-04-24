import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

function Wallet() {
  return (
    <div>
      <div
        style={ {
          backgroundColor: '#e1e5eb',
          margin: 'auto',
          width: '1350px',
          borderRadius: '15px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.4)',
        } }
      >
        <Header />
        <WalletForm />
      </div>
      <Table />
    </div>
  );
}

export default Wallet;
