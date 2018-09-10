import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BugerIngredients/BurgerIngredients'; 
const burger = (props) => {
   
    let transformedIngrdeients = Object.keys(props.ingredients)
    .map( inkey =>{
            return [...Array(props.ingredients[inkey])].map((_,i)=>{
                return <BurgerIngredients key={inkey+i} type={inkey}/>
            });
    })
    .reduce((arr,el)=>{
       return arr.concat(el);
    },[]);

     if(transformedIngrdeients.length === 0){
         transformedIngrdeients = <p>Please start adding some ingredients!!</p>;
     }
    console.log(transformedIngrdeients);

   return(
      <div className={classes.Burger}>
         <BurgerIngredients type='bread-top'/>
        {transformedIngrdeients}
         <BurgerIngredients type='bread-bottom'/>
      </div>
   );
};

export default burger;