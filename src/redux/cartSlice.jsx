import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart: []
    },
    reducers: {
        addtoCart: (state, action) =>{
            state.cart.push(action.payload)
        }
    }
     
})
export default cartSlice.reducers;
export const {addtoCart} = cartSlice.actions;