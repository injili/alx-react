import Notifications from "./Notifications";
import { shallow } from "enzyme";

describe('test for Notifications', () => {
    it('rendering of Notifications', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications).toBeDefined();
    });
    it('renders ul', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('ul')).toBeDefined();
    });
    it('renders li', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('li')).toBeDefined();
    });
    it('renders texts', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('p').text()).toBe('Here is the list of notifications');
    });
});