import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-50 relative z-20 pl-3">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Popular" movies={movies.popularMovies} />
          <MovieList title="Documentaries" movies={movies.nowPlayingMovies} />
          <MovieList title="Horror" movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  )
}

export default SecondaryContainer

//movieList-popular
// Multiple Movie card
//now playing
// Trending
// Horror
