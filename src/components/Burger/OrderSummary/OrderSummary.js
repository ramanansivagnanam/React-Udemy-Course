import React from 'react';
// import classes from './OrderSummary.css';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary =(props) =>{
       
     const ingredientSummary = Object.keys(props.ingredients)
     .map(inkey =>{
         return <li key={inkey}><span style={{textTransform:'capitalize'}}>{inkey}</span>: {props.ingredients[inkey]}</li>
     });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
               {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong>$</p>
            <p>Continue to CheckOut?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>

        </Aux>
    );
}

export default orderSummary;