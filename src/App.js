import './App.css';
import imageSearch from './utils/fetcher.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {imageSearch('yellow flowers', 'photo')}
      </header>
    </div>
  );
}

export default App;
