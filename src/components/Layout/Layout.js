import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary'

import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        // In that form do not do!
        // this.setState({showSideDrawer: !this.state.showSideDrawer});
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });

    }

    render() {
        return (
            <Auxiliary>
                {/*this.sideDrawerToggleHandler - it's reference to function*/}
                {/*this.sideDrawerToggleHandler() - it's execute function*/}
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} c
                            closed={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

export default Layout;