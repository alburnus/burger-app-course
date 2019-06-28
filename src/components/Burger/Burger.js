import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    // Object. is Java Script not React
    // Object.keys - return Array of keys
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // spread operator ...
            // Array() - it's Java Script
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey}/>;
                })
        })
        // reduce in JS function which allow us to transform Array into something different
        // to parameters: previous value and current value
        // [] it's initial value
        // this flatting array
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;