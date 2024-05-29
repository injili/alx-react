import './App.css';
import { Fragment } from 'react';
import Notifications from './Notifications';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';

function App() {
  return (
    <Fragment>
      <Notifications />
      <div className='App'>
        <Header />
        <hr />
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <Login />
        </div>
        <Footer />
      </div>
    </Fragment>
    
  );
}

export default App;
