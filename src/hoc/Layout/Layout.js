import React, {Component} from 'react';
import Auxiliary from '../Auxiliary/Auxiliary'
import {connect} from 'react-redux';

import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
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
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);