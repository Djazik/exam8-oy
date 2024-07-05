import { createSlice } from '@reduxjs/toolkit'


export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        value: JSON.parse(localStorage.getItem("wishlist")) || []
    },
    reducers: {
      addToHeart(state, { payload }) {
            let index = state.value.findIndex((el) => el.id === payload.id)
            if (index < 0) {
                state.value = [...state.value, payload]
            } else {
                state.value = state.value.filter(el => el.id !== payload.id)
            }
            localStorage.setItem("wishlist", JSON.stringify(state.value))
        },
    },
})

export const { addToHeart } = wishlistSlice.actions

export default wishlistSlice.reducer