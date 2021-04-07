import React from "react";
import algoliasearch from "algoliasearch";
import {useRouter} from "next/router";
import {
    InstantSearch,
    Configure,
    SearchBox,
    Hits,
    Stats,
    SortBy,
    Pagination,
    connectStateResults
} from "react-instantsearch-dom";

const searchClient = algoliasearch(
    "ZKW9BQZTYO",
    "30893489e7dd37f194b7947ceeaa6523"
);

interface Props{

}

const SearchResult: React.FunctionComponent<Props> = () => {
    const router = useRouter();
    const {
        query:{index},
    }=router
    return (
        <InstantSearch searchClient={searchClient} indexName="Movies">
            {/* <SortBy
                defaultRefinement="movie"
                items={[
                    { value: "movie", label: "IMDB" },
                    { value: "IMDB_asc", label: "Tăng dần" },
                    { value: "IMDB_desc", label: "Giảm dần" }
            ]}
            />
            <SortBy
                defaultRefinement="movie"
                items={[
                    { value: "movie", label: "" },
                    { value: "IMDB_asc", label: "Tăng dần" },
                    { value: "IMDB_desc", label: "Giảm dần" }
            ]}
            /> */}
            <Configure hitsPerPage={5} />
            <div className="body-content">
                <SearchBox
                    className="hidden"
                    translations={{ placeholder: "Search for Movies" }}
                    defaultRefinement={index}
                />
                <div className="topbar-filter">
                    <p><Stats /></p>
                </div>
                <Results>
                    <Hits hitComponent={Hit} />
                    
                </Results>
                <div>
                    {" "}
                    <Pagination />
                </div>
            </div>
        </InstantSearch>
    );
}

const Hit = ({ hit }) => (
    <a href={"/"}>
        <div className="movie-item-style-2">
            <img src={hit.urlCover} alt="" />
            <div className="mv-item-infor">
                <h6><a href="moviesingle_light.html">{hit.Title} ({hit.Year})  </a></h6>
                <p className="rate"><i className="ion-android-star"></i><span>{hit.IMDB}</span> /10</p>
                <p className="describe">{hit.Description}</p>
                <p className="run-time"> Thời lượng phim: {hit.Length} . <span>{hit.Quality} </span> . <span>Ra mắt: {hit.created_at}</span></p>
                <p>Đạo diễn: <a href="#">{hit.Directors}</a></p>
                <p>Diễn viên: <a href="#">{hit.Actors} </a> </p>
            </div>
        </div>
    </a>
);
const Results = connectStateResults(
    ({ searchResults, children }) =>
        searchResults && searchResults.nbHits !== 0 ? (
            children
        ) : (
            <div>Không tìm thấy kết quả nào.</div>
        )
);

export default SearchResult;