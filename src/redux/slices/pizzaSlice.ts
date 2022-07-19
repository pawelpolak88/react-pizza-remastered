import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios"
import { RootState } from "../store";

type FetchPizzasType = {
    category: string,
    sortBy: string,
    order: string,
    search: string,
}

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params: FetchPizzasType) => {
        const { category, sortBy, order, search } = params
        const { data } = await axios
            .get<PizzaProps[]>(`https://62c6d70b74e1381c0a6a40ec.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}&search=${search}`)

        return data as PizzaProps[]
    }
)

type PizzaProps = {
    id: string;
    title: string;
    price: number;
    count: number;
    imageUrl: string;
    types: number[];
    sizes: number[];
    category: string;
    rating: number;
}

export enum Status {
    LOADING = 'loading',
    FULFILLED = 'fulfilled',
    ERROR = 'error',
}

interface IPizzaSlice {
    items: PizzaProps[];
    status: Status
}

const initialState: IPizzaSlice = {
    items: [],
    status: Status.LOADING
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<PizzaProps[]>) {
            state.items = action.payload
            state.items = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = Status.LOADING
            state.items = []
        });

        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = Status.FULFILLED
        });

        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
        })
    }
})

export const selectPizza = (state: RootState) => state.pizza

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer