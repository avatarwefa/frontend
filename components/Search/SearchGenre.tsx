import React, { Component, useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import Link from 'next/link';
import {
    InstantSearch,
    Hits,
    SearchBox,
    Configure
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import {useRouter} from "next/router";

const algoliaClient = algoliasearch(
    'ZKW9BQZTYO',
    '30893489e7dd37f194b7947ceeaa6523'
);

const searchClient = {
    search(requests) {
        if (requests.every(({ params }) => !params.query)) {
            return Promise.resolve({
                results: requests.map(() => ({
                    hits: [],
                    nbHits: 0,
                    nbPages: 0,
                    processingTimeMS: 0,
                })),
            });
        }

        return algoliaClient.search(requests);
    },
};

const Hit = ({ hit }) => (
    <a href={"/"}>
        <div className="genre-item">
            <div className="info">
                <h4> {hit.GenreName} </h4>
                <p> (Genre) </p>
            </div>
        </div>
    </a>
);

Hit.propTypes = {
    hit: PropTypes.object.isRequired,
};

interface Props{
    value: String
}

const GenreResult: React.FunctionComponent<Props> = ({value}:Props) => {
    return (
        <InstantSearch searchClient={searchClient} indexName="Genres">
            <Configure hitsPerPage={3} />
            <SearchBox
                className="immediately-search-box display-none"
                translations={{
                    placeholder: 'Tìm kiếm phim hoặc thể loại',
                }}
                defaultRefinement={value}
            />
            <Hits hitComponent={Hit} />
            {/* <Link style={{display: show? "block" : "none"}} href='searchresult'>
              <div className="bottom">
                <a href="searchresult"> See all results </a>
              </div>
            </Link> */}
        </InstantSearch>
    );
}

export default GenreResult;
