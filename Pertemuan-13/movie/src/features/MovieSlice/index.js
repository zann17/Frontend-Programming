// import creatslice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/utils/constants/data";


/**
 * Buat slice: generate action dan reducer.
 * menerima object: name, initialstate, reducers
 */
const movieSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addmovie(state, action) {
            // add movie to movies
            state.movies.push(action.payload)
        },
        deletemovie() {},
    },
});

// Generate action & reducers
const moviesReducer = movieSlice.reducer;
const { addmovie, deletemovie } = movieSlice.actions;

// Export action & reducers
export default moviesReducer;
export {addmovie, deletemovie};