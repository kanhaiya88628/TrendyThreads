import { createSlice } from '@reduxjs/toolkit';

let initialState = [];

try {
    const cartFromStorage = localStorage.getItem('cart');
    if (cartFromStorage !== null) {
        initialState = JSON.parse(cartFromStorage) ?? [];
    }
} catch (error) {
    console.error('Failed to parse cart from localStorage:', error);
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        },
        incrementQuantity(state, action) {
            return state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
                return item;
            });
        },
        decrementQuantity(state, action) {
            return state.map(item => {
                if (item.id === action.payload && item.quantity !== 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                }
                return item;
            });
        },
    },
});

export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
