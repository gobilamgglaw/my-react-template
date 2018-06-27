import React from 'react';

import DrawerToggleButoon from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButoon click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">The Logo</a></div>
            <div className="nav" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;