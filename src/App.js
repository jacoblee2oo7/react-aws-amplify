import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="parallax">
        <div class="layer-1">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit 1 <code>src/App.js</code> and save to reload. Updating test.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <div class="layer-2">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit 2<code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
        </div>
        <div class="layer-3">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit 3<code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
