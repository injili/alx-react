import { shallow } from "enzyme";
import Login from "./Login";

describe('tests for login', () => {
    it('renders without crashing', () => {
        const login = shallow(<Login />);
        expect(login).toBeDefined();
    });
    it('renders two input tags', () => {
        const login = shallow(<Login />);
        expect(login.find('input')).toHaveLength(2);
        expect(login.find('label')).toHaveLength(2);
    });
});