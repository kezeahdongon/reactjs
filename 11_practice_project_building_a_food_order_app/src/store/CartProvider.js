// the purpose of this component is to manage the cart-context data and provide that context to all components that want access to it.

// import from react
import { useReducer } from 'react';

// import JavaScript files
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totatlAmount: 0
};

// REMEMBER: in a reducer, you receive two parameters (state, action)
const cartReducer = (state, action) => {
    if (action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item); 
        // concat() adds a new item to an array but does not edit the existing array but it return a new array.

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;