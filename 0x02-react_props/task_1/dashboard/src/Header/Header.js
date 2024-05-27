import logo from '../logo.jpg';
import './Header.css'

export default function Header() {
    return (
        <div>
            <div className="App-header">
            <img src={logo} alt="This Is Holberton Dawg"/>
            <h1>School dashboard</h1>
            </div>
        </div>
    )
}