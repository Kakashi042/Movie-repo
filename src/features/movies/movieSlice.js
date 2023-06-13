import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import {MovieApiKey} from '../../common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async ()=>{
    const movieText = 'Harry';
    const response = await movieApi
            .get(`?apiKey=${MovieApiKey}&s=${movieText}&type=movie`)
            return response.data
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async ()=>{
    const seriesText = 'Friends';
    const response = await movieApi
            .get(`?apiKey=${MovieApiKey}&s=${seriesText}&type=series`)
            return response.data
})

const initialState ={
    movies:{},
    shows:{}
}

const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovies:(state,{payload}) => {
            state.movies=payload
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]:(state, { payload })=>{
            console.log("fulfilled")
            return {...state, movies:payload}
        },
        [fetchAsyncShows.fulfilled]:(state, { payload })=>{
            console.log("fulfilled")
            return {...state, shows:payload}
        },
    }
})

export const {addMovies}=movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;

export default movieSlice.reducer;