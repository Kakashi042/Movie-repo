import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
    const movieText="Harry";
    const showText="Friends";

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(showText))
    },[])

    return (
        <div className='banner-img'>
            <MovieListing />
        </div>
    );
};

export default Home;