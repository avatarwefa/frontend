
import React, { useState } from 'react'



function TopIMDB() {

    const [dataRecombee, setDataRecombee] = useState([])
    var recombee = require('recombee-api-client');
    var rqs = recombee.requests;

    var callback = function (err, res) {
        if (err) {
            console.log(err);
            // use fallback ...
            return;
        }
        setDataRecombee(res.recomms)
    }


    var client = new recombee.ApiClient('movies-dev', 'QKR26O5fSEtJnB7dxPrlpkE2rH2f093uh0ir5PlbrBphGEWYy8cl3rTIRxvqhzB1');

    client.send(new rqs.RecommendItemsToUser('2', 8,
        {
            'scenario': 'TopIMDB',
            'returnProperties': true,
            'cascadeCreate': true
        }
    ),
        callback
    );

    return (
        <a href="/moviedetail">
        {dataRecombee.map((item, index) => (
            <div className="index-movie-item" key={index}>
                <div className="mv-img">
                    <img src="images/uploads/mv-item1.jpg"/>
                </div>
                <div className="title-in">
                    <h6><a href="#"> {item.values.Title} </a></h6>
                    <p><i className="ion-android-star"></i><span>{item.values.IMDB}</span> /10</p>
                </div>
            </div>
        ))}
        </a>
    );
}

export default TopIMDB

