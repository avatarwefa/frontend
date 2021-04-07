import React, { Component } from "react";
import Layout from '../components/Layout';
import SearchResult from 'components/Search/SearchResult'

class SearchResultPage extends Component {
  render() {
    return (
      <Layout showFooter={true}>
        <div className="buster-light">
          <div className="hero common-hero">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="hero-ct">
                    <h1 style={{ textTransform: "none" }}> Kết quả tìm kiếm  </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-single movie_list">
            <div className="container">
              <div className="row ipad-width2">
                <div className="col-md-8 col-sm-12 col-xs-12">
                  <SearchResult/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default SearchResultPage;
