import React from 'react'
interface Item{
}
interface Props {
}
const CommonHeroBlock: React.FunctionComponent<Props> = () => {
  return (
    <div className="hero common-hero">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="hero-ct">
            <h1> movie listing - list</h1>
            <ul className="breadcumb">
              <li className="active"><a href="#">Home</a></li>
              <li> <span className="ion-ios-arrow-right"></span> movie listing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default CommonHeroBlock