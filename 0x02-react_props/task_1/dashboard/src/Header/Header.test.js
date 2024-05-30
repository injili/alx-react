import { shallow } from "enzyme";
import Header from "./Header";

describe ('tests for Header', () => {
    it('renders without crashing', () => {
        const header = shallow(<Header />);
        expect(header).toBeDefined();
    });
    it('renders img an h1', () => {
        const header = shallow(<Header />);
        expect(header.exists("img")).toEqual(true);
        expect(header.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
    });
});