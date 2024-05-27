import Header from "../../../../task_0/dashboard/src/Header/Header";
import { shallow } from 'enzyme';
import React from 'react';
describe('<Header />', () => {
	it('Tests that Header renders without crashing', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Tests that the component renders <img> and <h1> tags', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists('img')).toBe(true);
		expect(wrapper.exists('h1')).toBe(true);
	})
});