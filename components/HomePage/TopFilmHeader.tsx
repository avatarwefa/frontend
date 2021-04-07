import React, { useState } from 'react'
import Link from 'next/link'
import Trending from '../HomePage/Trending'
// const movies = [
//   {
//     movieImg: 'images/uploads/slider1.jpg',
//     movieUrl: '#',
//     hashtag: [
//       {
//         hashtagName: 'Sci-fi',
//         hashtagColor: 'blue',
//         hashtagUrl: '#'
//       }
//     ],
//     movieName: 'Interstellar',
//     rating: '7.4'
//   }, {
//     movieImg: 'images/uploads/slider2.jpg',
//     movieUrl: '#',
//     hashtag: [
//       {
//         hashtagName: 'action',
//         hashtagColor: 'yell',
//         hashtagUrl: '#'
//       }
//     ],
//     movieName: 'The revenant',
//     rating: '7.4'
//   }, {
//     movieImg: 'images/uploads/slider3.jpg',
//     movieUrl: '#',
//     hashtag: [
//       {
//         hashtagName: 'comedy',
//         hashtagColor: 'green',
//         hashtagUrl: '#'
//       }
//     ],
//     movieName: 'Die hard',
//     rating: '7.4'
//   }, {
//     movieImg: 'images/uploads/slider4.jpg',
//     movieUrl: '#',
//     hashtag: [
//       {
//         hashtagName: 'Sci-fi',
//         hashtagColor: 'blue',
//         hashtagUrl: '#'
//       },
//       {
//         hashtagName: 'advanture',
//         hashtagColor: 'orange',
//         hashtagUrl: '#'
//       }
//     ],
//     movieName: 'The walk',
//     rating: '7.4'
//   },
//   {
//     movieImg: 'images/uploads/slider2.jpg',
//     movieUrl: '#',
//     hashtag: [
//       {
//         hashtagName: 'Sci-fi',
//         hashtagColor: 'blue',
//         hashtagUrl: '#'
//       }
//     ],
//     movieName: 'The revenant',
//     rating: '7.4'
//   }, {
//     movieImg: 'images/uploads/slider3.jpg',
//     movieUrl: '#',
//     hashtag: [
//       {
//         hashtagName: 'action',
//         hashtagColor: 'yell',
//         hashtagUrl: '#'
//       }
//     ],
//     movieName: 'Die hard',
//     rating: '7.4'
//   }, {
//     movieImg: 'images/uploads/slider4.jpg',
//     movieUrl: '#',
//     hashtag: [
//       {
//         hashtagName: 'comedy',
//         hashtagColor: 'green',
//         hashtagUrl: '#'
//       }
//     ],
//     movieName: 'The walk',
//     rating: '7,4'
//   }
// ]
function TopFilmHeader() {
  return (
    <div>
      <div className="slider movie-items">
        <div className="container">
          <div className="row" style={{ marginLeft: "30px" }}>
            <div className="social-link">
              <p>Theo dõi chúng tôi tại: </p>
              <a href="#"><i className="ion-social-facebook"></i></a>
              <a href="#"><i className="ion-social-youtube"></i></a>
            </div>
            <p className="trending"> PHIM ĐỀ XUẤT CHO BẠN </p>
            {/* {movies.map((movie, index) => (
              <div className="movie-item" key={index}>
                <div className="mv-img">
                  <Link href={movie.movieUrl}>
                    <a><img src={movie.movieImg} alt="" width="285" height="437" /></a>
                  </Link>
                </div>
                <div className="title-in">
                  <div className="cate">
                    {movie.hashtag.map((hashtag, hashtagindex) => (
                      <span className={hashtag.hashtagColor}>
                        <Link href={hashtag.hashtagUrl}>
                          <a href="#" key={hashtagindex}>{hashtag.hashtagName}</a>
                        </Link>
                      </span>
                    ))}
                  </div>
                  <h6>
                    <Link href={movie.movieUrl}>
                      <a>{movie.movieName}</a>
                    </Link>
                  </h6>
                  <p><i className="ion-android-star"></i><span>{movie.rating}</span> /10</p>
                </div>
              </div>
            ))} */}
            <Trending />
          </div>
        </div>
      </div>
    </div>
  )
}
export default TopFilmHeader