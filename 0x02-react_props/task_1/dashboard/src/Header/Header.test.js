import { shallow } from "enzyme";
import Header from "./Header";

describe ('tests for Header', () => {
    it('renders without crashing', () => {
        const header = shallow(<Header />);
        expect(header).toBeDefined();
    });
});