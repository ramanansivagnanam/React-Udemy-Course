import React from 'react';
import classes from './MenuToggle.css';

const menuToggle = (props) => {
    return (
        <div onClick={props.clicked}
            className={classes.MenuToggle}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default menuToggle;