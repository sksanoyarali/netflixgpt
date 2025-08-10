import React from 'react'

import { IMAGE_CDN } from '../utils/constants'
const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMAGE_CDN + poster_path} alt="Movie Card" />
    </div>
  )
}

export default MovieCard
