import App from './App';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';

describe ('tests for App', () => {
    it('renders without crashing', () => {
        const app = shallow(<App />);
        expect(app).toBeDefined();
    });
    it('contains Notifications component', () => {
        const app = shallow(<App />);
        expect(app.contains(<Notifications />)).toBe(true);
    });
    it('contains Header component', () => {
        const app = shallow(<App />);
        expect(app.contains(<Header />)).toBe(true);
    });
    it('contains Login component', () => {
        const app = shallow(<App />);
        expect(app.contains(<Login />)).toBe(true);
    });
    it('contains Footer component', () => {
        const app = shallow(<App />);
        expect(app.contains(<Footer />)).toBe(true);
    });
});