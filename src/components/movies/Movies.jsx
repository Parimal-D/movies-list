import React, {useState , useEffect } from 'react';

import MovieCard from './MovieCard';
import Loader from '../loader/Loader';
import SearchBar from './SearchBar';
import { getMoviesAPI, getMoviesSearchAPI } from '../../apis/apis';

import { useSelector, useDispatch } from 'react-redux';
import {getMovieList , setMovieList , setLoader } from '../../reducers/eventReducer';

export default () => {
    const dispatch = useDispatch();
    const getAllMovieList = useSelector(getMovieList);
    // const getLoaderVal = useSelector(getLoader);
    useEffect(() => {
        console.log('wy');
        dispatch(setLoader(true));
        const moviesList = getMoviesAPI();
        moviesList.then(res => {
            if(res.data.results){
                let data = {
                    movies : res.data.results,
                    search : '',
                    isLoading : false,
                    page : 1,
                    count : res.data.results.length+1
                }
                dispatch(setMovieList(data));
            }
        });
    },[]);

    useEffect(() => {
        if(getAllMovieList['search'] != ''){
            console.log('runn');
            dispatch(setLoader(true));
            const moviesList = getMoviesSearchAPI(getAllMovieList['search']);
            moviesList.then(res => {
                if(res.data.results){
                    let data = {
                        movies : res.data.results,
                        search : getAllMovieList['search'],
                        isLoading : false,
                        page : 1,
                        count : res.data.results.length+1
                    }
                    dispatch(setMovieList(data));
                }
            });
        }
    },[getAllMovieList['search']]);

    return(
        <>
       {(getAllMovieList.search != '') ? <SearchBar searchRes={getAllMovieList}/> : ''}
        <main id="main">
            {getAllMovieList.isLoading && (<Loader />)}
            <MovieCard movieInfo={getAllMovieList.movies}/>
        </main>
        </>
    );
}