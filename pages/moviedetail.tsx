import React, { useState } from "react";
import Layout from '../components/Layout';
import MovieInfo from '../components/Movie/MovieInfo';
import CommentBox from 'components/Movie/CommentBox';
import Link from 'next/link'
const reviews = [
    {
        title: 'Best Marvel movie in my opinion',
        rate: 8,
        time: '17 December 2016',
        reviewedBy: 'hawaiipierson',
        body: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
    },
    {
        title: 'Back on the Bond Bandwagon',
        rate: 7,
        time: '23 December 2012',
        reviewedBy: 'ChiSox3514',
        body: "As a lifelong James Bond enthusiast who has been extremely disappointed with the franchise's latest efforts (with the exception of Casino Royale), I was extremely pleased with this film. It strayed away from the storyline of the previous two films and I couldn't have been happier after the mediocrity of Quantum of Solace. This film has all the constituents from the Bond films that have preceded it. Big explosions, ridiculous stunts that not a single person in the history of humanity can survive, and let's not forget to mention the beautiful women that would make both genders stop and stare. So what does Skyfall have that the other Bond films don't? For the first time, we get a glimpse into our mysterious hero's dark past. Where he came from and what made him the person he is today."
    },
    {
        title: 'How safe do you feel?',
        rate: 9,
        time: '17 December 2016',
        reviewedBy: 'hawaiipierson',
        body: "Bond 23 and 007 has to literally come back from the dead when a stolen hard-drive makes M (Dench) look bad at a time when a face from her past comes homing into blood thirsty view. There is one sure fire fact in cinema that nobody can dispute, that of there never ever being a James Bond film that all Bondphiles will agree on. From each corner of the spectrum will come arguments that said Bond film is not gritty enough, not fun enough, not enough sex, not enough action, not enough fantastical stunts and etc etc etc. Well that's fine of course, we all have our peccadilloes we prefer in our Bond movies, but we do live in different times now, the world has changed, and so has Bond. You may not get the ultimate Bond you want, but this is a 21st Century Bond and a new era of 007 is upon us, something which makes Skyfall even the more bolder and braver because it marks the 50th anniversary by blending the old with the new and mostly achieving brilliant results."
    },
]



function MovieDetail({ comments }) {
    let [showReview, setShowReview] = useState(true);
    let [showComment, setShowComment] = useState(false);
    let [liked, setLiked] = useState(false);
    let [disliked, setDisLiked] = useState(false);
    let [showReply, setShowReply] = useState(false);
    let [flagged, setFlagged] = useState(false);
    function toggleLike() {
        setLiked(!liked);
    }
    function toggleDisLike() {
        setDisLiked(!disliked);
    }
    function toggleReply() {
        setShowReply(!showReply);
    }
    function flag() {
        setFlagged(flagged = true);
    }

    function toggleReview() {
        setShowReview(showReview = true);
        setShowComment(showComment = false);
    }
    function toggleComment() {
        setShowReview(showReview = false);
        setShowComment(showComment = true);
    }
    return (
        <Layout showFooter={true}>
            <div className="buster-light">
                <div className="hero mv-single-hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-single movie-single movie_single">
                    <div className="container">
                        <div className="row ipad-width2">
                            <div className="col-md-4 col-sm-12 col-xs-12">
                                <div className="movie-img sticky-sb">
                                    <img src="images/uploads/movie-single.jpg" alt="" />
                                    <div className="movie-btn">
                                        <div className="btn-transform transform-vertical red">

                                            <div className="item item-1 redbtn"><Link href="/moviestream"> Xem phim </Link> </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-12 col-xs-12">
                                <div className="movie-single-ct main-content">
                                    <h1 className="bd-hd">Skyfall: Quantum of Spectre <span>2015</span></h1>
                                    <div className="social-btn">
                                        <a href="#" className="parent-btn"><i className="ion-heart"></i> Thêm vào xem sau</a>
                                        <div className="hover-bnt">
                                            <a href="#" className="parent-btn"><i className="ion-android-share-alt"></i>share</a>
                                            <div className="hvr-item">
                                                <a href="#" className="hvr-grow"><i className="ion-social-facebook"></i></a>
                                                <a href="#" className="hvr-grow"><i className="ion-social-twitter"></i></a>
                                                <a href="#" className="hvr-grow"><i className="ion-social-googleplus"></i></a>
                                                <a href="#" className="hvr-grow"><i className="ion-social-youtube"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-rate">
                                        <div className="rate">
                                            <i className="ion-android-star"></i>
                                            <p><span>8.1</span> /10<br></br>
                                                <span className="rv">56 Reviews</span>
                                            </p>
                                        </div>
                                        <div className="rate-star">
                                            <p>Đánh giá:  </p>
                                            <i className="ion-ios-star"></i>
                                            <i className="ion-ios-star"></i>
                                            <i className="ion-ios-star"></i>
                                            <i className="ion-ios-star"></i>
                                            <i className="ion-ios-star"></i>
                                            <i className="ion-ios-star"></i>
                                            <i className="ion-ios-star"></i>
                                            <i className="ion-ios-star"></i>
                                            <i className="ion-ios-star-outline"></i>
                                        </div>
                                    </div>
                                    <div className="movie-tabs">
                                        <div className="tabs">
                                            <ul className="tab-links tabs-mv">
                                                <li className="active"><a href="#overview">Tổng quan</a></li>
                                                <li><a href="#cast">  Diễn viên </a></li>
                                                <li><a href="#moviesrelated"> Phim liên quan</a></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div id="overview" className="tab active">
                                                    <div className="row">
                                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                                            <p>Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction.</p>
                                                            <div className="title-hd-sm">
                                                                <h4>Videos & Photos</h4>
                                                                <a href="#" className="time">All 5 Videos & 245 Photos <i className="ion-ios-arrow-right"></i></a>
                                                            </div>
                                                            <div className="mvsingle-item ov-item">
                                                                <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image11.jpg" ><img src="images/uploads/image1.jpg" alt="" /></a>
                                                                <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image21.jpg" ><img src="images/uploads/image2.jpg" alt="" /></a>
                                                                <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image31.jpg" ><img src="images/uploads/image3.jpg" alt="" /></a>
                                                                <div className="vd-it">
                                                                    <img className="vd-img" src="images/uploads/image4.jpg" alt="" />
                                                                    <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src="images/uploads/play-vd.png" alt="" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="title-hd-sm">
                                                                <h4>Diễn viên</h4>
                                                                <a href="#" className="time">Xem tất cả <i className="ion-ios-arrow-right"></i></a>
                                                            </div>
                                                            <div className="mvcast-item">
                                                                <div className="cast-it">
                                                                    <div className="cast-left">
                                                                        <img src="images/uploads/cast1.jpg" alt="" />
                                                                        <a href="#">Robert Downey Jr.</a>
                                                                    </div>
                                                                    <p>...  Robert Downey Jr.</p>
                                                                </div>
                                                                <div className="cast-it">
                                                                    <div className="cast-left">
                                                                        <img src="images/uploads/cast2.jpg" alt="" />
                                                                        <a href="#">Chris Hemsworth</a>
                                                                    </div>
                                                                    <p>...  Thor</p>
                                                                </div>
                                                                <div className="cast-it">
                                                                    <div className="cast-left">
                                                                        <img src="images/uploads/cast3.jpg" alt="" />
                                                                        <a href="#">Mark Ruffalo</a>
                                                                    </div>
                                                                    <p>...  Bruce Banner/ Hulk</p>
                                                                </div>
                                                                <div className="cast-it">
                                                                    <div className="cast-left">
                                                                        <img src="images/uploads/cast4.jpg" alt="" />
                                                                        <a href="#">Chris Evans</a>
                                                                    </div>
                                                                    <p>...  Steve Rogers/ Captain America</p>
                                                                </div>
                                                                <div className="cast-it">
                                                                    <div className="cast-left">
                                                                        <img src="images/uploads/cast5.jpg" alt="" />
                                                                        <a href="#">Scarlett Johansson</a>
                                                                    </div>
                                                                    <p>...  Natasha Romanoff/ Black Widow</p>
                                                                </div>
                                                                <div className="cast-it">
                                                                    <div className="cast-left">
                                                                        <img src="images/uploads/cast6.jpg" alt="" />
                                                                        <a href="#">Jeremy Renner</a>
                                                                    </div>
                                                                    <p>...  Clint Barton/ Hawkeye</p>
                                                                </div>
                                                                <div className="cast-it">
                                                                    <div className="cast-left">
                                                                        <img src="images/uploads/cast7.jpg" alt="" />
                                                                        <a href="#">James Spader</a>
                                                                    </div>
                                                                    <p>...  Ultron</p>
                                                                </div>
                                                                <div className="cast-it">
                                                                    <div className="cast-left">
                                                                        <img src="images/uploads/cast9.jpg" alt="" />
                                                                        <a href="#">Don Cheadle</a>
                                                                    </div>
                                                                    <p>...  James Rhodes/ War Machine</p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="title-hd-sm">
                                                                    <div className="cursor hvr-sweep-to-right">
                                                                        <h4 className="margin" onClick={toggleReview} style={{ color: showReview ? "#dd003f" : "black" }}>User reviews</h4>
                                                                    </div>
                                                                    <h4>I</h4>
                                                                    <div className="cursor hvr-sweep-to-right">
                                                                        <h4 className="margin" onClick={toggleComment} style={{ color: showComment ? "#dd003f" : "black" }}> User comments </h4>
                                                                    </div>
                                                                </div>
                                                                <div style={{ display: showReview ? "block" : "none" }}>
                                                                    <div className="mv-user-review-box">
                                                                        <p>Viết đánh giá của bạn ở đây:</p>
                                                                        <textarea name="" id=""></textarea>
                                                                        <div className="ratingcontainer">
                                                                            <div className="rating">
                                                                                <input name="stars" id="e10" type="radio" /><label htmlFor="e10">★</label>
                                                                                <input name="stars" id="e9" type="radio" /><label htmlFor="e9">★</label>
                                                                                <input name="stars" id="e8" type="radio" /><label htmlFor="e8">★</label>
                                                                                <input name="stars" id="e7" type="radio" /><label htmlFor="e7">★</label>
                                                                                <input name="stars" id="e6" type="radio" /><label htmlFor="e6">★</label>
                                                                                <input name="stars" id="e5" type="radio" /><label htmlFor="e5">★</label>
                                                                                <input name="stars" id="e4" type="radio" /><label htmlFor="e4">★</label>
                                                                                <input name="stars" id="e3" type="radio" /><label htmlFor="e3">★</label>
                                                                                <input name="stars" id="e2" type="radio" /><label htmlFor="e2">★</label>
                                                                                <input name="stars" id="e1" type="radio" /><label htmlFor="e1">★</label>
                                                                            </div>
                                                                        </div>
                                                                        <button> SUBMIT </button>
                                                                    </div>
                                                                    <p style={{ fontSize: "12px", color: "#a79f9f" }}>6 đánh giá</p>
                                                                    {reviews.map((review, index) => (
                                                                        <div className="mv-user-review-item" key={index}>
                                                                            <h3>{review.title}</h3>
                                                                            <div className="no-star">
                                                                                <i className="ion-android-star"></i>
                                                                                <i className="ion-android-star"></i>
                                                                                <i className="ion-android-star"></i>
                                                                                <i className="ion-android-star"></i>
                                                                                <i className="ion-android-star"></i>
                                                                                <i className="ion-android-star"></i>
                                                                                <i className="ion-android-star"></i>
                                                                                <i className="ion-android-star"></i>
                                                                                <i className="ion-android-star"></i>
                                                                                <i className="ion-android-star last"></i>
                                                                            </div>

                                                                            <p className="time">
                                                                                {review.time} bởi <a href="#"> {review.reviewedBy}</a>
                                                                            </p>
                                                                            <p>{review.body}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                <div style={{ display: showComment ? "block" : "none" }}>
                                                                    <CommentBox />
                                                                    <p style={{ fontSize: "12px", color: "#a79f9f" }}>5 bình luận </p>
                                                                    {comments.map((comment, index) => (
                                                                        <div>
                                                                            <div className="mv-user-comment-item" key={index}>
                                                                                <div className="avatarcontainer">
                                                                                    <img className="avatar" src="" alt="" />
                                                                                </div>
                                                                                <div className="body">
                                                                                    <div className="info">
                                                                                        <div className="name"> {comment.UserName} </div>
                                                                                        <div className="time"> {comment.created_at} </div>
                                                                                    </div>
                                                                                    <div className="comment"> {comment.Body} </div>
                                                                                    <div className="iconcontainer">
                                                                                        <div className="icon" onClick={toggleLike} style={{ color: liked ? "blue" : "black" }}> <i className="fa fa-thumbs-o-up"></i> {comment.Like} </div>
                                                                                        <div className="icon" onClick={toggleDisLike} style={{ color: disliked ? "red" : "black" }}> <i className="fa fa-thumbs-o-down"></i> {comment.Dislike} </div>
                                                                                        <div className="icon" onClick={toggleReply} ><i className="fa fa-reply"></i> {comment.replyCount} </div>
                                                                                        <div className="icon" onClick={flag} ><i className="fa fa-flag" style={{ color: flagged ? "red" : "black" }}></i> </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div style={{ display: showReply ? "block" : "none" }}>
                                                                                {comment.childComments.map((reply, index) => (
                                                                                    <div className="mv-user-reply-item" key={index}>
                                                                                        <div className="avatarcontainer">
                                                                                            <img className="avatar" src="" alt="" />
                                                                                        </div>
                                                                                        <div className="body">
                                                                                            <div className="info">
                                                                                                <div className="name"> {reply.UserName} </div>
                                                                                                <div className="time"> {reply.created_at} </div>
                                                                                            </div>
                                                                                            <div className="comment"> {reply.Body} </div>
                                                                                            <div className="iconcontainer">
                                                                                                <div className="icon" onClick={function (event) { toggleLike() }} style={{ color: liked ? "blue" : "black" }} > <i className="fa fa-thumbs-o-up"></i> {reply.Like} </div>
                                                                                                <div className="icon" onClick={function (event) { toggleDisLike() }} style={{ color: disliked ? "red" : "black" }}> <i className="fa fa-thumbs-o-down"></i> {reply.Dislike} </div>
                                                                                                <div className="icon" onClick={flag} ><i className="fa fa-flag" style={{ color: flagged ? "red" : "black" }}></i> </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                                <div className="mv-user-reply-box">
                                                                                    <textarea name="" id="" placeholder="Write your reply here..."></textarea>
                                                                                    <button> SUBMIT </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <MovieInfo />
                                                    </div>
                                                </div>
                                                <div id="reviews" className="tab review">
                                                    <div className="row">
                                                        <div className="rv-hd">
                                                            <div className="div">
                                                                <h3>Related Movies To</h3>
                                                                <h2>Skyfall: Quantum of Spectre</h2>
                                                            </div>
                                                            <a href="#" className="redbtn">Write Review</a>
                                                        </div>
                                                        <div className="topbar-filter">
                                                            <p>Found <span>56 reviews</span> in total</p>
                                                            <label>Filter by:</label>
                                                            <select>
                                                                <option value="popularity">Popularity Descending</option>
                                                                <option value="popularity">Popularity Ascending</option>
                                                                <option value="rating">Rating Descending</option>
                                                                <option value="rating">Rating Ascending</option>
                                                                <option value="date">Release date Descending</option>
                                                                <option value="date">Release date Ascending</option>
                                                            </select>
                                                        </div>
                                                        <div className="mv-user-review-item">
                                                            <div className="user-infor">
                                                                <img src="images/uploads/userava1.jpg" alt="" />
                                                                <div>
                                                                    <h3>Best Marvel movie in my opinion</h3>
                                                                    <div className="no-star">
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                    </div>
                                                                    <p className="time">
                                                                        17 December 2016 by <a href="#"> hawaiipierson</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <p>This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.</p>
                                                        </div>
                                                        <div className="mv-user-review-item">
                                                            <div className="user-infor">
                                                                <img src="images/uploads/userava2.jpg" alt="" />
                                                                <div>
                                                                    <h3>Just about as good as the first one!</h3>
                                                                    <div className="no-star">
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                    </div>
                                                                    <p className="time">
                                                                        17 December 2016 by <a href="#"> hawaiipierson</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <p>Avengers Age of Ultron is an excellent sequel and a worthy MCU title! There are a lot of good and one thing that feels off in my opinion. </p>

                                                            <p>THE GOOD:</p>

                                                            <p>First off the action in this movie is amazing, to buildings crumbling, to evil blue eyed robots tearing stuff up, this movie has the action perfectly handled. And with that action comes visuals. The visuals are really good, even though you can see clearly where they are through the movie, but that doesn't detract from the experience. While all the CGI glory is taking place, there are lovable characters that are in the mix. First off the original characters, Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye, are just as brilliant as they are always. And Joss Whedon fixed my main problem in the first Avengers by putting in more Hawkeye and him more fleshed out. Then there is the new Avengers, Quicksilver, Scarletwich, and Vision, they are pretty cool in my opinion. Vision in particular is pretty amazing in all his scenes.</p>

                                                            <p>THE BAD:</p>

                                                            <p>The beginning of the film it's fine until towards the second act and there is when it starts to feel a little rushed. Also I do feel like there are scenes missing but there was talk of an extended version on Blu-Ray so that's cool.</p>
                                                        </div>
                                                        <div className="mv-user-review-item">
                                                            <div className="user-infor">
                                                                <img src="images/uploads/userava3.jpg" alt="" />
                                                                <div>
                                                                    <h3>One of the most boring exepirences from watching a movie</h3>
                                                                    <div className="no-star">
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                    </div>
                                                                    <p className="time">
                                                                        26 March 2017 by<a href="#"> christopherfreeman</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <p>I can't right much... it's just so forgettable...Okay, from what I remember, I remember just sitting down on my seat and waiting for the movie to begin. 5 minutes into the movie, boring scene of Tony Stark just talking to his "dead" friends saying it's his fault. 10 minutes in: Boring scene of Ultron and Jarvis having robot space battles(I dunno:/). 15 minutes in: I leave the theatre.2nd attempt at watching it: I fall asleep. What woke me up is the next movie on Netflix when the movie was over.</p>

                                                            <p>Bottemline: It's boring...</p>

                                                            <p>10/10 because I'm a Marvel Fanboy</p>
                                                        </div>
                                                        <div className="mv-user-review-item ">
                                                            <div className="user-infor">
                                                                <img src="images/uploads/userava4.jpg" alt="" />
                                                                <div>
                                                                    <h3>That spirit of fun</h3>
                                                                    <div className="no-star">
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                    </div>
                                                                    <p className="time">
                                                                        26 March 2017 by <a href="#"> juliawest</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <p>If there were not an audience for Marvel comic heroes than clearly these films would not be made, to answer one other reviewer although I sympathize with him somewhat. The world is indeed an infinitely more complex place than the world of Marvel comics with clearly identifiable heroes and villains. But I get the feeling that from Robert Downey, Jr. on down the organizer and prime mover as Iron Man behind the Avengers these players do love doing these roles because it's a lot of fun. If they didn't show that spirit of fun to the audience than these films would never be made.</p>

                                                            <p>So in that spirit of fun Avengers: Age Of Ultron comes before us and everyone looks like they're having a good time saving the world. A computer program got loose and took form in this dimension named Ultron and James Spader who is completely unrecognizable is running amuck in the earth. No doubt Star Trek fans took notice that this guy's mission is to cleanse the earth much like that old earth probe NOMAD which got its programming mixed up in that classNameic Star Trek prime story. Wouldst Captain James T. Kirk of the Enterprise had a crew like Downey has at his command.</p>
                                                            <p>My favorite is always Chris Evans because of the whole cast he best gets into the spirit of being a superhero. Of all of them, he's already played two superheroes, Captain America and Johnny Storm the Human Torch. I'll be before he's done Evans will play a couple of more as long as the money's good and he enjoys it.</p>

                                                            <p>Pretend you're a kid again and enjoy, don't take it so seriously.</p>
                                                        </div>
                                                        <div className="mv-user-review-item last">
                                                            <div className="user-infor">
                                                                <img src="images/uploads/userava5.jpg" alt="" />
                                                                <div>
                                                                    <h3>Impressive Special Effects and Cast</h3>
                                                                    <div className="no-star">
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                        <i className="ion-android-star last"></i>
                                                                    </div>
                                                                    <p className="time">
                                                                        26 March 2017 by <a href="#"> johnnylee</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <p>The Avengers raid a Hydra base in Sokovia commanded by Strucker and they retrieve Loki's scepter. They also discover that Strucker had been conducting experiments with the orphan twins Pietro Maximoff (Aaron Taylor-Johnson), who has super speed, and Wanda Maximoff (Elizabeth Olsen), who can control minds and project energy. Tony Stark (Robert Downey Jr.) discovers an Artificial Intelligence in the scepter and convinces Bruce Banner (Mark Ruffalo) to secretly help him to transfer the A.I. to his Ultron defense system. However, the Ultron understands that is necessary to annihilate mankind to save the planet, attacks the Avengers and flees to Sokovia with the scepter. He builds an armature for self-protection and robots for his army and teams up with the twins. The Avengers go to Clinton Barton's house to recover, but out of the blue, Nick Fury (Samuel L. Jackson) arrives and convinces them to fight against Ultron. Will they succeed? </p>

                                                            <p>"Avengers: Age of Ultron" is an entertaining adventure with impressive special effects and cast. The storyline might be better, since most of the characters do not show any chemistry. However, it is worthwhile watching this film since the amazing special effects are not possible to be described in words. Why Pietro has to die is also not possible to be explained. My vote is eight.</p>
                                                        </div>
                                                        <div className="topbar-filter">
                                                            <label>Reviews per page:</label>
                                                            <select>
                                                                <option value="range">5 Reviews</option>
                                                                <option value="saab">10 Reviews</option>
                                                            </select>
                                                            <div className="pagination2">
                                                                <span>Page 1 of 6:</span>
                                                                <a className="active" href="#">1</a>
                                                                <a href="#">2</a>
                                                                <a href="#">3</a>
                                                                <a href="#">4</a>
                                                                <a href="#">5</a>
                                                                <a href="#">6</a>
                                                                <a href="#"><i className="ion-arrow-right-b"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="cast" className="tab">
                                                    <div className="row">
                                                        <h3>Cast & Crew of</h3>
                                                        <h2>Avengers: Age of Ultron</h2>
                                                        <div className="title-hd-sm">
                                                            <h4>Directors & Credit Writers</h4>
                                                        </div>
                                                        <div className="mvcast-item">
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <h4>JW</h4>
                                                                    <a href="#">Joss Whedon</a>
                                                                </div>
                                                                <p>...  Director</p>
                                                            </div>
                                                        </div>
                                                        <div className="title-hd-sm">
                                                            <h4>Directors & Credit Writers</h4>
                                                        </div>
                                                        <div className="mvcast-item">
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <h4>SL</h4>
                                                                    <a href="#">Stan Lee</a>
                                                                </div>
                                                                <p>...  (based on Marvel comics)</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <h4>JK</h4>
                                                                    <a href="#">Jack Kirby</a>
                                                                </div>
                                                                <p>...  (based on Marvel comics)</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <h4>JS</h4>
                                                                    <a href="#">Joe Simon</a>
                                                                </div>
                                                                <p>...  (character created by: Captain America)</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <h4>JS</h4>
                                                                    <a href="#">Joe Simon</a>
                                                                </div>
                                                                <p>...  (character created by: Thanos)</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <h4>RT</h4>
                                                                    <a href="#">Roy Thomas</a>
                                                                </div>
                                                                <p>...  (character created by: Ultron, Vision)</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <h4>JB</h4>
                                                                    <a href="#">John Buscema</a>
                                                                </div>
                                                                <p>...  (character created by: Ultron, Vision)</p>
                                                            </div>
                                                        </div>
                                                        <div className="title-hd-sm">
                                                            <h4>Cast</h4>
                                                        </div>
                                                        <div className="mvcast-item">
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <img src="images/uploads/cast1.jpg" alt="" />
                                                                    <a href="#">Robert Downey Jr.</a>
                                                                </div>
                                                                <p>...  Robert Downey Jr.</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <img src="images/uploads/cast2.jpg" alt="" />
                                                                    <a href="#">Chris Hemsworth</a>
                                                                </div>
                                                                <p>...  Thor</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <img src="images/uploads/cast3.jpg" alt="" />
                                                                    <a href="#">Mark Ruffalo</a>
                                                                </div>
                                                                <p>...  Bruce Banner/ Hulk</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <img src="images/uploads/cast4.jpg" alt="" />
                                                                    <a href="#">Chris Evans</a>
                                                                </div>
                                                                <p>...  Steve Rogers/ Captain America</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <img src="images/uploads/cast5.jpg" alt="" />
                                                                    <a href="#">Scarlett Johansson</a>
                                                                </div>
                                                                <p>...  Natasha Romanoff/ Black Widow</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <img src="images/uploads/cast6.jpg" alt="" />
                                                                    <a href="#">Jeremy Renner</a>
                                                                </div>
                                                                <p>...  Clint Barton/ Hawkeye</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <img src="images/uploads/cast7.jpg" alt="" />
                                                                    <a href="#">James Spader</a>
                                                                </div>
                                                                <p>...  Ultron</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <img src="images/uploads/cast9.jpg" alt="" />
                                                                    <a href="#">Don Cheadle</a>
                                                                </div>
                                                                <p>...  James Rhodes/ War Machine</p>
                                                            </div>
                                                        </div>
                                                        <div className="title-hd-sm">
                                                            <h4>Produced by</h4>
                                                        </div>
                                                        <div className="mvcast-item">
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <h4>VA</h4>
                                                                    <a href="#">Victoria Alonso</a>
                                                                </div>
                                                                <p>...  executive producer</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <h4>MB</h4>
                                                                    <a href="#">Mitchel Bell</a>
                                                                </div>
                                                                <p>...  co-producer (as Mitch Bell)</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <h4>JC</h4>
                                                                    <a href="#">Jamie Christopher</a>
                                                                </div>
                                                                <p>...  associate producer</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <h4>LD</h4>
                                                                    <a href="#">Louis D’Esposito</a>
                                                                </div>
                                                                <p>...  executive producer</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <h4>JF</h4>
                                                                    <a href="#">Jon Favreau</a>
                                                                </div>
                                                                <p>...  executive producer</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <h4>KF</h4>
                                                                    <a href="#">Kevin Feige</a>
                                                                </div>
                                                                <p>...  producer</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <h4>AF</h4>
                                                                    <a href="#">Alan Fine</a>
                                                                </div>
                                                                <p>...  executive producer</p>
                                                            </div>
                                                            <div className="cast-it">
                                                                <div className="cast-left">
                                                                    <h4>JF</h4>
                                                                    <a href="#">Jeffrey Ford</a>
                                                                </div>
                                                                <p>...  associate producer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="media" className="tab">
                                                    <div className="row">
                                                        <div className="rv-hd">
                                                            <div>
                                                                <h3>Videos & Photos of</h3>
                                                                <h2>Skyfall: Quantum of Spectre</h2>
                                                            </div>
                                                        </div>
                                                        <div className="title-hd-sm">
                                                            <h4>Videos <span>(8)</span></h4>
                                                        </div>
                                                        <div className="mvsingle-item media-item">
                                                            <div className="vd-item">
                                                                <div className="vd-it">
                                                                    <img className="vd-img" src="images/uploads/vd-item1.jpg" alt="" />
                                                                    <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src="images/uploads/play-vd.png" alt="" /></a>
                                                                </div>
                                                                <div className="vd-infor">
                                                                    <h6> <a href="#">Trailer:  Watch New Scenes</a></h6>
                                                                    <p className="time"> 1: 31</p>
                                                                </div>
                                                            </div>
                                                            <div className="vd-item">
                                                                <div className="vd-it">
                                                                    <img className="vd-img" src="images/uploads/vd-item2.jpg" alt="" />
                                                                    <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src="images/uploads/play-vd.png" alt="" /></a>
                                                                </div>
                                                                <div className="vd-infor">
                                                                    <h6> <a href="#">Featurette: “Avengers Re-Assembled</a></h6>
                                                                    <p className="time"> 1: 03</p>
                                                                </div>
                                                            </div>
                                                            <div className="vd-item">
                                                                <div className="vd-it">
                                                                    <img className="vd-img" src="images/uploads/vd-item3.jpg" alt="" />
                                                                    <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src="images/uploads/play-vd.png" alt="" /></a>
                                                                </div>
                                                                <div className="vd-infor">
                                                                    <h6> <a href="#">Interview: Robert Downey Jr</a></h6>
                                                                    <p className="time"> 3:27</p>
                                                                </div>
                                                            </div>
                                                            <div className="vd-item">
                                                                <div className="vd-it">
                                                                    <img className="vd-img" src="images/uploads/vd-item4.jpg" alt="" />
                                                                    <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src="images/uploads/play-vd.png" alt="" /></a>
                                                                </div>
                                                                <div className="vd-infor">
                                                                    <h6> <a href="#">Interview: Scarlett Johansson</a></h6>
                                                                    <p className="time"> 3:27</p>
                                                                </div>
                                                            </div>
                                                            <div className="vd-item">
                                                                <div className="vd-it">
                                                                    <img className="vd-img" src="images/uploads/vd-item1.jpg" alt="" />
                                                                    <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src="images/uploads/play-vd.png" alt="" /></a>
                                                                </div>
                                                                <div className="vd-infor">
                                                                    <h6> <a href="#">Featurette: Meet Quicksilver & The Scarlet Witch</a></h6>
                                                                    <p className="time"> 1: 31</p>
                                                                </div>
                                                            </div>
                                                            <div className="vd-item">
                                                                <div className="vd-it">
                                                                    <img className="vd-img" src="images/uploads/vd-item2.jpg" alt="" />
                                                                    <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src="images/uploads/play-vd.png" alt="" /></a>
                                                                </div>
                                                                <div className="vd-infor">
                                                                    <h6> <a href="#">Interview: Director Joss Whedon</a></h6>
                                                                    <p className="time"> 1: 03</p>
                                                                </div>
                                                            </div>
                                                            <div className="vd-item">
                                                                <div className="vd-it">
                                                                    <img className="vd-img" src="images/uploads/vd-item3.jpg" alt="" />
                                                                    <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src="images/uploads/play-vd.png" alt="" /></a>
                                                                </div>
                                                                <div className="vd-infor">
                                                                    <h6> <a href="#">Interview: Mark Ruffalo</a></h6>
                                                                    <p className="time"> 3:27</p>
                                                                </div>
                                                            </div>
                                                            <div className="vd-item">
                                                                <div className="vd-it">
                                                                    <img className="vd-img" src="images/uploads/vd-item4.jpg" alt="" />
                                                                    <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src="images/uploads/play-vd.png" alt="" /></a>
                                                                </div>
                                                                <div className="vd-infor">
                                                                    <h6> <a href="#">Official Trailer #2</a></h6>
                                                                    <p className="time"> 3:27</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="title-hd-sm">
                                                            <h4>Photos <span> (21)</span></h4>
                                                        </div>
                                                        <div className="mvsingle-item">
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image11.jpg" ><img src="images/uploads/image1.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image21.jpg" ><img src="images/uploads/image2.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image31.jpg" ><img src="images/uploads/image3.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image41.jpg" ><img src="images/uploads/image4.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image51.jpg" ><img src="images/uploads/image5.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image61.jpg" ><img src="images/uploads/image6.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image71.jpg" ><img src="images/uploads/image7.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image81.jpg" ><img src="images/uploads/image8.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image91.jpg" ><img src="images/uploads/image9.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image101.jpg" ><img src="images/uploads/image10.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image111.jpg" ><img src="images/uploads/image1-1.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image121.jpg" ><img src="images/uploads/image12.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image131.jpg" ><img src="images/uploads/image13.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image141.jpg" ><img src="images/uploads/image14.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image151.jpg" ><img src="images/uploads/image15.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image161.jpg" ><img src="images/uploads/image16.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image171.jpg" ><img src="images/uploads/image17.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image181.jpg" ><img src="images/uploads/image18.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image191.jpg" ><img src="images/uploads/image19.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image201.jpg" ><img src="images/uploads/image20.jpg" alt="" /></a>
                                                            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image211.jpg" ><img src="images/uploads/image2-1.jpg" alt="" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="moviesrelated" className="tab">
                                                    <div className="row">
                                                        <h3>Related Movies To</h3>
                                                        <h2>Skyfall: Quantum of Spectre</h2>
                                                        <div className="topbar-filter">
                                                            <p>Found <span>12 movies</span> in total</p>
                                                            <label>Sort by:</label>
                                                            <select>
                                                                <option value="popularity">Popularity Descending</option>
                                                                <option value="popularity">Popularity Ascending</option>
                                                                <option value="rating">Rating Descending</option>
                                                                <option value="rating">Rating Ascending</option>
                                                                <option value="date">Release date Descending</option>
                                                                <option value="date">Release date Ascending</option>
                                                            </select>
                                                        </div>
                                                        <div className="movie-item-style-2">
                                                            <img src="images/uploads/mv1.jpg" alt="" />
                                                            <div className="mv-item-infor">
                                                                <h6><a href="#">oblivion <span>(2012)</span></a></h6>
                                                                <p className="rate"><i className="ion-android-star"></i><span>8.1</span> /10</p>
                                                                <p className="describe">Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...</p>
                                                                <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                                                                <p>Director: <a href="#">Joss Whedon</a></p>
                                                                <p>Stars: <a href="#">Robert Downey Jr.,</a> <a href="#">Chris Evans,</a> <a href="#">  Chris Hemsworth</a></p>
                                                            </div>
                                                        </div>
                                                        <div className="movie-item-style-2">
                                                            <img src="images/uploads/mv2.jpg" alt="" />
                                                            <div className="mv-item-infor">
                                                                <h6><a href="#">into the wild <span>(2014)</span></a></h6>
                                                                <p className="rate"><i className="ion-android-star"></i><span>7.8</span> /10</p>
                                                                <p className="describe">As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...</p>
                                                                <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                                                                <p>Director: <a href="#">Anthony Russo,</a><a href="#">Joe Russo</a></p>
                                                                <p>Stars: <a href="#">Chris Evans,</a> <a href="#">Samuel L. Jackson,</a> <a href="#">  Scarlett Johansson</a></p>
                                                            </div>
                                                        </div>
                                                        <div className="movie-item-style-2">
                                                            <img src="images/uploads/mv3.jpg" alt="" />
                                                            <div className="mv-item-infor">
                                                                <h6><a href="#">blade runner  <span>(2015)</span></a></h6>
                                                                <p className="rate"><i className="ion-android-star"></i><span>7.3</span> /10</p>
                                                                <p className="describe">Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help...</p>
                                                                <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                                                                <p>Director: <a href="#">Peyton Reed</a></p>
                                                                <p>Stars: <a href="#">Paul Rudd,</a> <a href="#"> Michael Douglas</a></p>
                                                            </div>
                                                        </div>
                                                        <div className="movie-item-style-2">
                                                            <img src="images/uploads/mv4.jpg" alt="" />
                                                            <div className="mv-item-infor">
                                                                <h6><a href="#">Mulholland pride<span> (2013)  </span></a></h6>
                                                                <p className="rate"><i className="ion-android-star"></i><span>7.2</span> /10</p>
                                                                <p className="describe">When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
                                                                <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                                                                <p>Director: <a href="#">Shane Black</a></p>
                                                                <p>Stars: <a href="#">Robert Downey Jr., </a> <a href="#">  Guy Pearce,</a><a href="#">Don Cheadle</a></p>
                                                            </div>
                                                        </div>
                                                        <div className="movie-item-style-2">
                                                            <img src="images/uploads/mv5.jpg" alt="" />
                                                            <div className="mv-item-infor">
                                                                <h6><a href="#">skyfall: evil of boss<span> (2013)  </span></a></h6>
                                                                <p className="rate"><i className="ion-android-star"></i><span>7.0</span> /10</p>
                                                                <p className="describe">When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
                                                                <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                                                                <p>Director: <a href="#">Alan Taylor</a></p>
                                                                <p>Stars: <a href="#">Chris Hemsworth,  </a> <a href="#">  Natalie Portman,</a><a href="#">Tom Hiddleston</a></p>
                                                            </div>
                                                        </div>
                                                        <div className="topbar-filter">
                                                            <label>Movies per page:</label>
                                                            <select>
                                                                <option value="range">5 Movies</option>
                                                                <option value="saab">10 Movies</option>
                                                            </select>
                                                            <div className="pagination2">
                                                                <span>Page 1 of 2:</span>
                                                                <a className="active" href="#">1</a>
                                                                <a href="#">2</a>
                                                                <a href="#"><i className="ion-arrow-right-b"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://movies202-env.eba-jyaxusy4.us-east-2.elasticbeanstalk.com/api/comment/showComments/1')
    const comments = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            comments,
        },

    }
}

export default MovieDetail