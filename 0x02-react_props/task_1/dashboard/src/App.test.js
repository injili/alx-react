import App from './App';
import { shallow } from 'enzyme';

describe ('tests for App', () => {
    it('renders without crashing', () => {
        const app = shallow(<App />);
        expect(app).toBeDefined();
    });
});