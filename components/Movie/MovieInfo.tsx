import React from 'react';
const MovieInfo: React.FunctionComponent = () => {
    return (
        <div className="col-md-4 col-xs-12 col-sm-12">
            <div className="sb-it">
                <h6>Director: </h6>
                <p><a href="#">Joss Whedon</a></p>
            </div>
            <div className="sb-it">
                <h6>Writer: </h6>
                <p><a href="#">Joss Whedon,</a> <a href="#">Stan Lee</a></p>
            </div>
            <div className="sb-it">
                <h6>Stars: </h6>
                <p><a href="#">Robert Downey Jr,</a> <a href="#">Chris Evans,</a> <a href="#">Mark Ruffalo,</a><a href="#"> Scarlett Johansson</a></p>
            </div>
            <div className="sb-it">
                <h6>Genres:</h6>
                <p><a href="#">Action, </a> <a href="#"> Sci-Fi,</a> <a href="#">Adventure</a></p>
            </div>
            <div className="sb-it">
                <h6>Release Date:</h6>
                <p>May 1, 2015 (U.S.A)</p>
            </div>
            <div className="sb-it">
                <h6>Run Time:</h6>
                <p>141 min</p>
            </div>
            <div className="sb-it">
                <h6>MMPA Rating:</h6>
                <p>PG-13</p>
            </div>
            <div className="sb-it">
                <h6>Plot Keywords:</h6>
                <p className="tags">
                    <span className="time"><a href="#">superhero</a></span>
                    <span className="time"><a href="#">marvel universe</a></span>
                    <span className="time"><a href="#">comic</a></span>
                    <span className="time"><a href="#">blockbuster</a></span>
                    <span className="time"><a href="#">final battle</a></span>
                </p>
            </div>
            <div className="ads">
                <img src="images/uploads/ads1.png" alt="" />
            </div>
        </div>
    )
}
export default MovieInfo