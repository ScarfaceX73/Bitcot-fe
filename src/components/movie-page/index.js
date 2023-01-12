import React, { useEffect, useState } from 'react';
import fetchStream from '../../service';
import useAsync from '../../hooks/use-async';
import Header from '../header-footer/header';
import Footer from '../header-footer/footer';
import Card from '../card';

const Movie = () => {
    const { run, isLoading, data, error } = useAsync()
    const [movies, setMovies] = useState([])
    useEffect(() => {
        run(fetchStream());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (data?.length) {
            const filteredMovies = data?.filter(oneData => oneData.programType === 'movie' && oneData.releaseYear >= 2010);
            filteredMovies.sort((firstMovie, secondMovie) => {
                const firstMovieTitle = firstMovie?.title;
                const secondMovieTitle = secondMovie?.title
                return firstMovieTitle.localeCompare(secondMovieTitle)
            })
            let trimmedMovies = [...filteredMovies]
            if (filteredMovies.length > 21) {
                let movieCopy = [...filteredMovies]
                trimmedMovies = movieCopy.slice(0, 21)
            }

            setMovies(trimmedMovies);
        }
    }, [data])

    return (
        <div>
            <Header />
            {isLoading ? <div>loading......</div> : <></>}
            <div className='grid-7-col'>
                {movies ? movies?.map((item) => {
                    return (
                        <div key={item.title}><Card item={item} /></div>
                    )
                }) : <div style={{ height: "487px" }}>Empty</div>}
            </div>
            {error ? JSON.stringify(error?.message) : <></>}
            <Footer />
        </div>
    )
}

export default Movie