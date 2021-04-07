
import React, { useState } from 'react'
import Link from 'next/link'

function Trending() {
    const [dataRecombee, setDataRecombee] = useState([])
    var recombee = require('recombee-api-client');
    var rqs = recombee.requests;
    var client = new recombee.ApiClient('movies-dev', 'QKR26O5fSEtJnB7dxPrlpkE2rH2f093uh0ir5PlbrBphGEWYy8cl3rTIRxvqhzB1');


    var callback = function (err, res) {
        if (err) {
            console.log(err);
            // use fallback ...
            return;
        }
        setDataRecombee(res.recomms)
        console.log(dataRecombee)
    }
    client.send(new rqs.RecommendItemsToUser('2', 8,
        {
            'scenario': 'Trending',
            'returnProperties': true,
            'cascadeCreate': true
        }
    ),
        callback
    );
    return (
        <a href="/moviedetail">
            {dataRecombee.map((movie, index) => (
                <div className="index-movie-item" key={index}>
                    <div className="mv-img">
                        <Link href="/moviedetail">
                            <a><img src={movie.values.urlCover} alt="" width="285" height="437" /></a>
                        </Link>
                    </div>
                    <div className="title-in">
                        <div className="cate">
                            {movie.values.GenreName.map((genre, genreindex) => (
                                <span>
                                    <Link href="#">
                                        <a href="#" key={genreindex}>{genre}</a>
                                    </Link>
                                </span>
                            ))}
                        </div>
                        <h6>
                            <Link href="/moviedetail">
                                <a style={{ width: '70%', float: 'left', mixBlendMode: 'normal' }}>{movie.values.Title}</a>
                            </Link>
                        </h6>
                        <p><i className="ion-android-star"></i><span>{movie.values.IMDB}</span> /10</p>
                    </div>
                </div>
            ))}
        </a>
    );
}

export default Trending

