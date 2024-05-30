import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";

describe('tests for NotificationItem', () => {
    it('renders without crashing', () => {
        const note = shallow(<NotificationItem />);
        expect(note).toBeDefined();
    });
    it('renders correct type', () => {
        const note = shallow(<NotificationItem />);
        note.setProps({ type: 'default', value: 'test' });
        expect(note.html()).toEqual('<li data-notification-type="default">test</li>');
    });
    it('renders correct html', () => {
        const note = shallow(<NotificationItem />);
        note.setProps({ html: '<u>test</u>' });
        expect(note.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
    });
});
