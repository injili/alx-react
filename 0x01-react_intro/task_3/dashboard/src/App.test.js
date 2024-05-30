import App from './App';
import { shallow } from 'enzyme';

describe ('tests for App', () => {
    it('renders without crashing', () => {
        const app = shallow(<App />);
        expect(app).toBeDefined();
    });
    it('renders App-header', () => {
        const app = shallow(<App />);
        expect(app.find('.App-header')).toBeDefined();
    });
    it('renders App-body', () => {
        const app = shallow(<App />);
        expect(app.find('.App-body')).toBeDefined();
    });
    it('render App-footer', () => {
        const app = shallow(<App />);
        expect(app.find('.App-footer')).toBeDefined();
    });
});