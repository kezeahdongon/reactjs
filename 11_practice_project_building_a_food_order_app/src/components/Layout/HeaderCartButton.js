// imports
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    /* reduce((a function that you can call) => {initial value}, starting value) allows us to transform an array of data into a single value or single number*/

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0); 

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
};

export default HeaderCartButton;