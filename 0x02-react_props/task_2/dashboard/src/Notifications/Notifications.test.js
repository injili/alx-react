import Notifications from "./Notifications";
import { getLatestNotification } from "../utils";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe('test for Notifications', () => {
    it('rendering of Notifications', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications).toBeDefined();
    });
    it('renders ulrenders correct list items', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find("ul").children()).toHaveLength(3);
        expect(notifications.find("ul").childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
        expect(notifications.find("ul").childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
        expect(notifications.find("ul").childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);

    });
    it('renders an unordered list', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('ul').children()).toHaveLength(3);
        notifications.find('ul').forEach((node) => {
            expect(node.equals(<NotificationItem />));
        });
    });
    it('renders texts', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('p').prop('children')).toBe('Here is the list of notifications');
    });
});
