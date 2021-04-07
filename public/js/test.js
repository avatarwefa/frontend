
import React, { useState } from 'react'
import Link from 'next/link'


function showProduct(urlCover, Title, IMDB) {
    return ([
        '<div class="col-md-4 text-center col-sm-6 col-xs-6">',
        '    <div class="thumbnail product-box" style="min-height:300px">',
        '        <img src="' + urlCover + '" alt="" />',
        '        <div class="caption">',
        '            <h3><a href="">' + Title + '</a></h3>',
        '            <p>Price : <strong>$ ' + IMDB + '</strong>  </p>',
        '        </div>',
        '    </div>',
        '</div>'
    ].join("\n")
    )
}

// Initialize client
var recombee = require('recombee-api-client');
var rqs = recombee.requests;
var client = new recombee.ApiClient('movies-dev', 'QKR26O5fSEtJnB7dxPrlpkE2rH2f093uh0ir5PlbrBphGEWYy8cl3rTIRxvqhzB1');

// Request recommended items
client.send(new rqs.RecommendItemsToUser('2', 8,
    {
        'scenario': 'Trending',
        'returnProperties': true,
        'cascadeCreate': true
    }
),
    (err, resp) => {
        if (err) {
            console.log("Could not load recomms: ", err);
            return;
        }
        console.log(resp.recomms)
        // Show recommendations
        var recomms_html = resp.recomms.map(r => r.values).
            map(vals => showProduct(vals['urlCover'], vals['Title'],
                vals['IMDB']));
        document.getElementById("relatedProducts").innerHTML = recomms_html.join("\n");
    }
);
export default showProduct

