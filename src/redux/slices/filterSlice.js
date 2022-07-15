import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    activeCategory: 0,
    sort: { name: 'популярности', sortProperty: "rating" },
    searchValue: ''
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
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        }
    }
})

export const selectSort = (state) => state.filter.sort
export const selectCategory = (state) => state.filter.activeCategory
export const selectSearch = (state) => state.filter.searchValue

export const { setActiveCategory, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer