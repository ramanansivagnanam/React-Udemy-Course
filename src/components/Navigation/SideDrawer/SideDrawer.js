import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';
const sideDrawer = (props) => {
    
    let addClassesSideDrawer = [classes.SideDrawer,classes.Close]
    
    if(props.open)
    {
        addClassesSideDrawer = [classes.SideDrawer,classes.Open]
    }

    return (
        <Aux>
            <BackDrop show={props.open} bdropClicked={props.closed}/>
            <div className={addClassesSideDrawer.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    );
}

export default sideDrawer;