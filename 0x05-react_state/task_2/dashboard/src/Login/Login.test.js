import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';

describe('<login />', () => {
    it('Login should render', () => {
        const LoginWrapper = shallow(<Login />);
        expect(LoginWrapper.exists());
    });

    it('Login should render 2 input and label tags', () => {
        const LoginWrapper = shallow(<Login />);
        expect(LoginWrapper.find('input', 'label')).to.have.lengthOf(2);
    });

    it('should have a default state with isLoggedIn as false, email as empty string, password as empty string, and enableSubmit as false', () => {
        const wrapper = shallow(<Login />);
        const state = wrapper.state();
        expect(state.isLoggedIn).toBe(false);
        expect(state.email).toBe('');
        expect(state.password).toBe('');
        expect(state.enableSubmit).toBe(false);
      });
    
      it('should have the submit button disabled by default', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
      });
    
      it('should enable the submit button when both email and password are non-empty', () => {
        const wrapper = shallow(<Login />);
        wrapper.find('#email').simulate('change', { target: { value: 'test@example.com' } });
        wrapper.find('#password').simulate('change', { target: { value: 'password' } });
        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
      });
    
      it('should call handleLoginSubmit when the form is submitted', () => {
        const wrapper = shallow(<Login />);
        const instance = wrapper.instance();
        jest.spyOn(instance, 'handleLoginSubmit');
        wrapper.instance().forceUpdate();
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(instance.handleLoginSubmit).toHaveBeenCalled();
      });
    
      it('should set isLoggedIn to true on form submission', () => {
        const wrapper = shallow(<Login />);
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(wrapper.state('isLoggedIn')).toBe(true);
      });
});
