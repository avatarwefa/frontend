import React from 'react'
import TheaterMovieBlock from './Block/TheaterMovieBlock'
import TVMovieBlock from './Block/TVMovieBlock'
interface Item {
}
interface Props {
}
const MovieTrendType: React.FunctionComponent<Props> = () => {
  return (
    <div className="movie-items">
      <div className="container">
        <div className="row ipad-width">
          <div className="col-md-8">
            <TheaterMovieBlock />
            {/* <TVMovieBlock /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default MovieTrendType