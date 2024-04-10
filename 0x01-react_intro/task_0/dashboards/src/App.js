import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={logo} alt="This Is Holberton Dawg"/>
        <h1>School dashboard</h1>
      </div>
      <hr />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
      <hr />
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;
