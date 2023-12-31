import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import {MovieApiKey} from '../../common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term)=>{
    
    const response = await movieApi
            .get(`?apiKey=${MovieApiKey}&s=${term}&type=movie`)
            return response.data
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term)=>{
    
    const response = await movieApi
            .get(`?apiKey=${MovieApiKey}&s=${term}&type=series`)
            return response.data
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id)=>{
    
    const response = await movieApi
            .get(`?apiKey=${MovieApiKey}&i=${id}&Plot=full`)
            return response.data
})

const initialState ={
    movies:{},
    shows:{},
    selectedMovieOrShow:{}
}

const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        
        removeSelectedMovieOrShow: (state)=>{
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]:(state, { payload })=>{
            // console.log("fulfilled")
            return {...state, movies:payload}
        },
        [fetchAsyncShows.fulfilled]:(state, { payload })=>{
            // console.log("fulfilled")
            return {...state, shows:payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state, { payload })=>{
            console.log("fulfilled")
            return {...state, selectedMovieOrShow:payload}
        },
    }
})

export const {removeSelectedMovieOrShow}=movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;




export default movieSlice.reducer;