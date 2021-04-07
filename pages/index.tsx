import Layout from '../components/Layout'
import TopFilmHeader from '../components/HomePage/TopFilmHeader'
import MovieTrendType from '../components/HomePage/MovieTrendType'

// import CommonHeroBlock from '../components/Blocks/CommonHeroBlock'
// import MovieListBlock from '../components/Blocks/MovieListBlock'

const IndexPage = () => (
  <Layout showFooter={true}>
    <div className="buster-light">
      <TopFilmHeader />
      <MovieTrendType />
      {/* <MovieListBlock /> */}
    </div>
  </Layout>
)

export default IndexPage
