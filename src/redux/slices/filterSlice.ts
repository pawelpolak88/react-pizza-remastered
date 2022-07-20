import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

export enum SortPropertyEnum {
    RATING_DESC = "rating",
    PRICE_DESC = "price",
    TITLE_DESC = "title",
    RATING_ASC = "rating",
    PRICE_ASC = "price",
    TITLE_ASC = "-title",

}

export type SortType = {
    name: string,
    sortProperty: SortPropertyEnum
}

interface IFilterSlice {
    activeCategory: number,
    sort: SortType
    searchValue: string
}

const initialState: IFilterSlice = {
    activeCategory: 0,
    sort: { name: 'популярности', sortProperty: SortPropertyEnum.RATING_DESC },
    searchValue: ''
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setActiveCategory: (state, action: PayloadAction<number>) => {
            state.activeCategory = action.payload
        },
        setSort: (state, action: PayloadAction<SortType>) => {
            state.sort = action.payload
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        }
    }
})

export const selectSort = (state: RootState) => state.filter.sort
export const selectCategory = (state: RootState) => state.filter.activeCategory
export const selectSearch = (state: RootState) => state.filter.searchValue

export const { setActiveCategory, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer