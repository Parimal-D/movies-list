import { createSlice } from "@reduxjs/toolkit";

import initialState  from '../data/initialState';

export const eventSlice = createSlice(
    {
        name : "movies",
        initialState : initialState,
        reducers : {
            setMovieList : (state,action) =>{
                const movieListRes = action.payload;
                state.movies = movieListRes.movies;
                state.isLoading = movieListRes.isLoading;
                state.count = movieListRes.count;
                state.search = movieListRes.search;
              
            },
            setLoader : (state, action) =>{
                const loader = action.payload
                state.isLoading = loader;
            },
            setSearch : (state,action) =>{
                const search = action.payload;
                state.search = search;
            }
        }
    }
)


export const { setMovieList } = eventSlice.actions;
export const getMovieList = state => state.movies;

export const { setLoader } = eventSlice.actions;
// export const getLoader = state => state.isLoading;

export const { setSearch } = eventSlice.actions;
// export const getSearch = state => state.movies.getSearch;

export default eventSlice.reducer;