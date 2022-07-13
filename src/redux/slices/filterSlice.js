import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    activeCategory: 0,
    sort: { name: 'популярности', sortProperty: "rating" }
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        }
    }
})

export const { setActiveCategory, setSort } = filterSlice.actions;

export default filterSlice.reducer