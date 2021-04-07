import React, { Component, useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import Link from 'next/link';
import GenreResult from "./SearchGenre"
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

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
  <a href={"/moviedetail"}>
    <div className="item">
      <div className="avatar">
        <img src={hit.urlCover} alt="" />
      </div>
      <div className="info">
        <h4> {hit.Title} </h4>
        <p> {hit.Year} </p>
        <div>
          <label style={{ color: 'orange', fontSize: '15px' }}>★</label> {hit.IMDB}
          <span style={{ fontSize: '10px', marginLeft: '-2px' }}> /10 </span>
        </div>
      </div>
    </div>
  </a>
);

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

interface Props {

}

const MovieResult: React.FunctionComponent = () => {
  let [index, setIndex] = useState("");
  return (
    <InstantSearch searchClient={searchClient} indexName="Movies">
      <Configure hitsPerPage={4} />
      <SearchBox
        className="immediately-search-box"
        translations={{
          placeholder: 'Tìm kiếm phim hoặc thể loại',
        }}
        onSubmit={event => {
          event.preventDefault();
          window.location.href = '/searchresult?' + 'index=' + index + '';
        }}
        onChange={event => {
          setIndex(index = event.target.value);
        }}
      />
      <div className="search-result">
        <Hits hitComponent={Hit} />
        <GenreResult value={index} />
        {/* <Link style={{display: show? "block" : "none"}} href='searchresult'>
          <div className="bottom">
            <a href="searchresult"> See all results </a>
          </div>
        </Link> */}
      </div>
    </InstantSearch>
  );
}

export default MovieResult;
