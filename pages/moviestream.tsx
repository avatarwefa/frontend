import React, { useState } from "react";
import ReactPlayer from 'react-player';
import Layout from '../components/Layout';
import MovieInfo from '../components/Movie/MovieInfo';
import CommentBox from 'components/Movie/CommentBox'
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
function MovieStream({ comments }) {
    let [showReview, setShowReview] = useState(true);
    let [showComment, setShowComment] = useState(false);
    let [showReply, setShowReply] = useState(false);
    let [liked, setLiked] = useState(false);
    let [disliked, setDisLiked] = useState(false);
    let [flagged, setFlagged] = useState(false);
    function toggleLike() {
        setLiked(!liked);
    }
    function toggleDisLike() {
        setDisLiked(!disliked);
    }
    function toggleReview() {
        setShowReview(showReview = true);
        setShowComment(showComment = false);
    }
    function toggleComment() {
        setShowReview(showReview = false);
        setShowComment(showComment = true);
    }
    function toggleReply() {
        setShowReply(!showReply);
    }
    function flag() {
        setFlagged(flagged = true);
    }
    return (
        <Layout showFooter={true}>
            <div className="buster-light">
                <div className="hero mv-single-hero" style={{ height: "800px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12" >
                                {/* <ReactPlayer style={{ margin: "auto" }} url="http://gdurl.com/181r" /> */}
                                <video src="https://doc-0s-38-docs.googleusercontent.com/docs/securesc/101rhgm72ofgopt9nus9n0seus0kvlbi/5b1hlj3qelnsf9v6g0aiv3okr089uusu/1617199200000/13220396849832919408/06481920835146971711/18BnKS44cCdusIvu2LybtRTiRCkL7iCmM?authuser=0&nonce=pjstvb6fmm1c6&user=06481920835146971711&hash=akcvanns21ll7u5cag7tjgpcnl6js3so"></video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-single movie-single movie_single">
                    <div className="container">
                        <div className="row ipad-width2 margintop" >
                            <div className="col-md-4 col-sm-12 col-xs-12">
                                <div className="movie-img sticky-sb">
                                    <img src="images/uploads/movie-single.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-12 col-xs-12">
                                <div className="movie-single-ct main-content">
                                    <h1 className="bd-hd" style={{ color: "black" }}>Skyfall: Quantum of Spectre <span>2015</span></h1>
                                    <div className="social-btn">
                                        <a href="#" className="parent-btn"><i className="ion-heart"></i> Add to Favorite</a>
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
                                            <p>Rate This Movie:  </p>
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
                                            <div className="tab-content">
                                                <div id="overview" className="tab active">
                                                    <div className="row">
                                                        <div className="col-md-8 col-sm-12 col-xs-12">
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
                                                                        <p>Write Your Review Here:</p>
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
                                                                    <p style={{ fontSize: "12px", color: "#a79f9f" }}>6 reviews</p>
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
                                                                                {review.time} by <a href="#"> {review.reviewedBy}</a>
                                                                            </p>
                                                                            <p>{review.body}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                <div style={{ display: showComment ? "block" : "none" }}>
                                                                    <CommentBox/>
                                                                    <p style={{ fontSize: "12px", color: "#a79f9f" }}>5 comments</p>
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
                                                                    ))}

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <MovieInfo />
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
export default MovieStream
