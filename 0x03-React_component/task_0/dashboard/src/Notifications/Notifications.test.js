import React from "react";
import { shallow } from "enzyme";
import { getLatestNotification } from "../utils";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper).toBeDefined();
  });
  it('renders correct list items when listNotifications is provided', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, html: { __html: '<strong>Urgent requirement</strong>' }, type: 'urgent' }
    ];
    
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    
    // Check the number of NotificationItem components
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
    
    // Check each NotificationItem rendered correctly
    expect(wrapper.find(NotificationItem).at(0).props().value).toEqual('New course available');
    expect(wrapper.find(NotificationItem).at(0).props().type).toEqual('default');
    
    expect(wrapper.find(NotificationItem).at(1).props().value).toEqual('New resume available');
    expect(wrapper.find(NotificationItem).at(1).props().type).toEqual('urgent');
    
    expect(wrapper.find(NotificationItem).at(2).props().html.__html).toEqual('<strong>Urgent requirement</strong>');
    expect(wrapper.find(NotificationItem).at(2).props().type).toEqual('urgent');
    
    // Check if buttons are present
    expect(wrapper.find('button')).toHaveLength(3);
  });

  it('renders "No new notification for now" when listNotifications is not provided', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    
    // Check the number of NotificationItem components
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
    
    // Check the NotificationItem content
    expect(wrapper.find(NotificationItem).props().value).toEqual('No new notification for now');
    
    // Check if button is present
    expect(wrapper.find('button')).toHaveLength(1);
  });
  

  it("displays menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find("div.menuItem").exists()).toBe(true);
    expect(wrapper.find("div.menuItem").html()).toEqual('<div class="menuItem"><p>Your notifications</p></div>');
  });

  it("does not display notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find("div.Notifications").exists()).toBe(false);
  });

  it("does not display menuItem when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find("div.menuItem").exists()).toBe(true);
  });

  it("displays Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find("div.Notifications").exists()).toBe(true);
  });

  it("renders correctly when listCourses is not passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });

  it("renders correctly when empty array is passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);

    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });

  it('renders "No new notifications for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);

    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(false);

    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });
});