import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems/>); // <NavigationItems /> is JSX
    });

    it('should render two navigation item if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2); // Now NavigationItem is no JSX
    });

    it('should render three navigation items if authenticated', () => {
        // wrapper = shallow(<NavigationItems isAuthenticated/>);
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3); // Now NavigationItem is no JSX
    });

    it('should render three navigation items if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});