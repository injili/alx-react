import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils';

export default function Footer() {
    return (
    <div>
        <div className="App-footer">
            <hr />
            <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </div>
    </div>
    )
}

