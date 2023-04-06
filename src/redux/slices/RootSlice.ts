import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
        name: "root",
        initialState: {
            brand: "Brand",
            type: "type",
            price: "price",
            rating: "rating",
        },
        reducers:{
            choosebrand: (state, action) => { state.brand = action.payload },
            choosetype: (state, action) => { state.type = action.payload },
            chooseprice: (state, action) => { state.price = action.payload },
            chooserating: (state, action) => { state.rating = action.payload },
        }

})


export const reducer = rootSlice.reducer
export const { choosebrand, choosetype, chooseprice, chooserating} = rootSlice.actions