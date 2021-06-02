import React from 'react';
import Card from '../UI/Card/Card';
import DishItem from './DishItem';
import classes from './Dishes.module.css';
const Dishes = (props)=>{

    return (
        <Card className={classes.card}>
            <ul className={classes['dishes-ul']}>
                <DishItem title='Sushi' subtitle='Fresh and finest veggies' price='22.99' />
                <DishItem title='Sushi' subtitle='Fresh and finest veggies' price='22.99' />
                <DishItem title='Sushi' subtitle='Fresh and finest veggies' price='22.99' />
                <DishItem title='Sushi' subtitle='Fresh and finest veggies' price='22.99' />
            </ul>
        </Card>
    )

}

export default Dishes;