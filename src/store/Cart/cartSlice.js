import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsList: [],
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replaceData(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.itemsList = action.payload.itemsList;
        },
        addToCart(state, action) {
            console.log('addToCart', action.payload);
            state.changed = true;
            const newItem = action.payload;
            // to check if item is already available
            const existingItem = state.itemsList.find(
                (item) => item.id === newItem.id
            );
    
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
                state.totalQuantity++;
            } else {
                state.itemsList.push({
                id: newItem.id,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
                name: newItem.name,
                });
                state.totalQuantity++;
            }
        },

        removeFromCart(state, action) {
            const id = action.payload;
      
            const existingItem = state.itemsList.find((item) => item.id === id);
            if (existingItem.quantity === 1) {
              state.itemsList = state.itemsList.filter((item) => item.id !== id);
              state.totalQuantity--;
            } else {
              existingItem.quantity--;
              existingItem.totalPrice -= existingItem.price;
              state.totalQuantity--;
            }
        },
    },
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;