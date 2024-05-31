import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });

  it("should render Notifications component", () => {
    const component = shallow(<App />);
    expect(component.find(Notifications).length).toBe(1);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);
    expect(component.find(Header).length).toBe(1);
  });

  it("should render Login Component when not logged in", () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.find(Login).length).toBe(1);
  });

  it("should render Footer component", () => {
    const component = shallow(<App />);
    expect(component.find(Footer).length).toBe(1);
  });

  it("does not render courselist if logged out", () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.find(CourseList).length).toBe(0);
  });

  it("renders courselist if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.find(CourseList).length).toBe(1);
    expect(component.find(Login).length).toBe(0);
  });
});
