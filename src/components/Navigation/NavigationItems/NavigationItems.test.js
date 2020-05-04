import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    it('should render two navigation item if not authenticated', () => {
        const wrapper = shallow(<NavigationItems />); // <NavigationItems /> is JSX
        expect(wrapper.find(NavigationItem)).toHaveLength(2); // Now NavigationItem is no JSX
    });
});