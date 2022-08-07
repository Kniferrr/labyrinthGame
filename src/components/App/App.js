import './App.css';
import GameField from '../GameField/GameField';
import TargetDesignator from '../TargetDesignator/TargetDesignator';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <div className='Game'>
      <Header/>
      <GameField/>
      </div>
      <TargetDesignator/>
    </div>
  );
}

export default App;
