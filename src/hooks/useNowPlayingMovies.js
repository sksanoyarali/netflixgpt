import { API_URL, apiOptions } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

const useNowPlayingMovies = () => {
  const dispatch = useDispatch()

  const getNowPlayingMovies = async () => {
    const data = await fetch(API_URL, apiOptions)

    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
  }
  useEffect(() => {
    getNowPlayingMovies()
  }, [])
}
export default useNowPlayingMovies
