import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow } from '../../features/movies/movieSlice';

const MovieDetail = () => {
    const imdbID  = useParams();
    console.log(imdbID);

    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow)
    console.log(data);
    useEffect(()=>{
        dispatch(fetchAsyncMovieOrShowDetail('tt0417741'));
    },[dispatch, imdbID])

    return (
        <div>
            MovieDetail
        </div>
    );
};

export default MovieDetail;