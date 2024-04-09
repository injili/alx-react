import holbertonlogo from "../public/logo.jpg"

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={holbertonlogo} alt="Holberton React" />
        <h1>Schoool dashboard</h1>
      </header>
      <hr></hr>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <hr></hr>
      <footer className="App-footer">
        <p>Copyright2020 - holberton Schoool</p>
      </footer>
    </div>
  );
}