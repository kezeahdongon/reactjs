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

        const existingCartItemIndex =state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if (action.type === 'REMOVE') {
       const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        ); 

        const existingItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...existingItem, amount: exitingItem.amount - 1};
            updatedItems = [...state.items];
            updateItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
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