import React from 'react';

import './DrawerTogglebutton.css';

const drawerToggleButoon = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />

    </button>
);

export default drawerToggleButoon;