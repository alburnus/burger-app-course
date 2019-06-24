import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    // Object. is Java Script not React
    // Object.keys - return Array of keys
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // spread operator ...
            // Array() - it's Java Script
           return [...Array(props.ingredients[igKey])]
               .map((_, i) => {
                  return <BurgerIngredient key={igKey + i} type={igKey}/>;
               })
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;