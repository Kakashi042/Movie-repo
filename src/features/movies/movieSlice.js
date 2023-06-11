import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import {MovieApiKey} from '../../common/apis/MovieApiKey'

const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async ()=>{
    const response = await movieApi
            .get(`?apiKey=${MovieApiKey}&s=${movieText}&type=movie`)
            .catch((err)=>{
                console.log(err)
            })
            dispatch(addMovies(response.data))
})
const initialState ={
    movies:{},
}

const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovies:(state,{payload}) => {
            state.movies=payload
        },
    }
})

export const {addMovies}=movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies;
export default movieSlice.reducer;