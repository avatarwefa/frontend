import Link from 'next/link';
import ModMenuBar from '../components/Dashboard/ModMenuBar';

const React = require('react');

class AdminDashboard extends React.Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="css/plugins.css" />
                <link rel="stylesheet" href="css/style.css" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossOrigin="anonymous"
                />
                <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                    crossOrigin="anonymous"></script>
                <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
                <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                <div>
                    <ModMenuBar />
                    <div className="admod-body">
                        <div className="admod-body-header">
                            <h3> Các phim </h3>
                            <img src="images/uploads/cast1.jpg" alt="" />
                            <p> Moderator #1 </p>
                        </div>
                        <div style={{ paddingRight: "100px", paddingLeft: "100px" }}>
                            <div className="topbar-filter">
                                <p>Found <span>1,608 movies</span> in total</p>
                            </div>
                            <div className="custom-search-input">
                                <div className="input-group col-md-12">
                                    <input type="text" className="  search-query form-control" placeholder="Tìm kiếm phim trong đây" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-danger" type="button">
                                            <span className=" glyphicon glyphicon-search"></span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div style={{ marginBottom: '70px' }} className="movie-item-style-2">
                                <img src="images/uploads/mv1.jpg" alt="" />
                                <div className="mv-item-infor">
                                    <h6><a style={{ color: 'black', textDecoration: 'none' }} href="moviesingle_light.html">oblivion <span>(2012)</span></a></h6>
                                    <p className="rate"><i className="ion-android-star"></i><span style={{ color: '#abb7c4' }}>8.1</span> /10</p>
                                    <p className="describe">Earth's mightiest heroes must come together and learn to fight as a
                                    team if they are to stop the mischievous Loki and his alien army from enslaving
									humanity...</p>
                                    <p className="run-time"> Run Time: 2h21’ . <span>MMPA: PG-13 </span> . <span>Release: 1 May
										2015</span></p>
                                    <p>Director: <a href="#">Joss Whedon</a></p>
                                    <p>Stars: <a href="#">Robert Downey Jr.,</a> <a href="#">Chris Evans,</a> <a href="#">
                                        Chris Hemsworth</a></p>
                                    <button> Edit </button> <button> Delete </button>
                                </div>
                            </div>
                            <div style={{ marginBottom: '70px' }} className="movie-item-style-2">
                                <img src="images/uploads/mv2.jpg" alt="" />
                                <div className="mv-item-infor">
                                    <h6><a style={{ color: 'black', textDecoration: 'none' }} href="moviesingle_light.html">into the wild <span>(2014)</span></a></h6>
                                    <p className="rate"><i className="ion-android-star"></i><span style={{ color: '#abb7c4' }}>7.8</span> /10</p>
                                    <p className="describe">As Steve Rogers struggles to embrace his role in the modern world,
                                    he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a
									new threat...</p>
                                    <p className="run-time"> Run Time: 2h21’ . <span>MMPA: PG-13 </span> . <span>Release: 1 May
										2015</span></p>
                                    <p>Director: <a href="#">Anthony Russo,</a><a href="#">Joe Russo</a></p>
                                    <p>Stars: <a href="#">Chris Evans,</a> <a href="#">Samuel L. Jackson,</a> <a href="#">
                                        Scarlett Johansson</a></p>
                                    <button> Edit </button> <button> Delete </button>
                                </div>
                            </div>
                            <div style={{ marginBottom: '70px' }} className="movie-item-style-2">
                                <img src="images/uploads/mv3.jpg" alt="" />
                                <div className="mv-item-infor">
                                    <h6><a style={{ color: 'black', textDecoration: 'none' }} href="moviesingle_light.html">blade runner <span>(2015)</span></a></h6>
                                    <p className="rate"><i className="ion-android-star"></i><span style={{ color: '#abb7c4' }}>7.3</span> /10</p>
                                    <p className="describe">Armed with a super-suit with the astonishing ability to shrink in
                                    scale but increase in strength, cat burglar Scott Lang must embrace his inner hero
									and help...</p>
                                    <p className="run-time"> Run Time: 2h21’ . <span>MMPA: PG-13 </span> . <span>Release: 1 May
										2015</span></p>
                                    <p>Director: <a href="#">Peyton Reed</a></p>
                                    <p>Stars: <a href="#">Paul Rudd,</a> <a href="#"> Michael Douglas</a></p>
                                    <button> Edit </button> <button> Delete </button>
                                </div>
                            </div>
                            <div style={{ marginBottom: '70px' }} className="movie-item-style-2">
                                <img src="images/uploads/mv4.jpg" alt="" />
                                <div className="mv-item-infor">
                                    <h6><a style={{ color: 'black', textDecoration: 'none' }} href="moviesingle_light.html">Mulholland pride<span> (2013) </span></a></h6>
                                    <p className="rate"><i className="ion-android-star"></i><span style={{ color: '#abb7c4' }}>7.2</span> /10</p>
                                    <p className="describe">When Tony Stark's world is torn apart by a formidable terrorist
									called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
                                    <p className="run-time"> Run Time: 2h21’ . <span>MMPA: PG-13 </span> . <span>Release: 1 May
										2015</span></p>
                                    <p>Director: <a href="#">Shane Black</a></p>
                                    <p>Stars: <a href="#">Robert Downey Jr., </a> <a href="#"> Guy Pearce,</a><a
                                        href="#">Don Cheadle</a></p>
                                    <button> Edit </button> <button> Delete </button>
                                </div>
                            </div>
                            <div style={{ marginBottom: '70px' }} className="movie-item-style-2">
                                <img src="images/uploads/mv5.jpg" alt="" />
                                <div className="mv-item-infor">
                                    <h6><a style={{ color: 'black', textDecoration: 'none' }} href="moviesingle_light.html">skyfall: evil of boss<span> (2013) </span></a></h6>
                                    <p className="rate"><i className="ion-android-star"></i><span style={{ color: '#abb7c4' }}>7.0</span> /10</p>
                                    <p className="describe">When Tony Stark's world is torn apart by a formidable terrorist
									called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
                                    <p className="run-time"> Run Time: 2h21’ . <span>MMPA: PG-13 </span> . <span>Release: 1 May
										2015</span></p>
                                    <p>Director: <a href="#">Alan Taylor</a></p>
                                    <p>Stars: <a href="#">Chris Hemsworth, </a> <a href="#"> Natalie Portman,</a><a
                                        href="#">Tom Hiddleston</a></p>
                                    <button> Edit </button>
                                    <button> Delete </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default AdminDashboard;