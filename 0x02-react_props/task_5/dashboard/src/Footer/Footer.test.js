import { shallow } from "enzyme";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils";

describe('tests for footer', () => {
    it('renders without crashing', () => {
        const footer = shallow(<Footer />);
        expect(footer).toBeDefined();
    });
    it('rendering the text copyright', () => {
        const footer = shallow(<Footer />);
        expect(footer.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
    });
});