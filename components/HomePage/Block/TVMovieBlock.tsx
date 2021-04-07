import React, { Fragment } from 'react'
interface Item {
}
interface Props {
}
const TVMovieBlock: React.FunctionComponent<Props> = () => {
  return (
    <Fragment>
      <div className="title-hd">
					<h2>in theater</h2>
					<a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
				</div>
				<div className="tabs">
					<ul className="tab-links">
						<li className="active"><a href="#tab1">#Popular</a></li>
						<li><a href="#tab2"> #Coming soon</a></li>
						<li><a href="#tab3">  #Top rated  </a></li>
						<li><a href="#tab4"> #Most reviewed</a></li>                        
					</ul>
				    <div className="tab-content">
				        <div id="tab1" className="tab active">
				            <div className="row">
				            	<div className="slick-multiItem">
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item1.jpg" alt="" width="185" height="284" />
					            			</div> 
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item2.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item4.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item7.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item8.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            	</div>
				            </div>
				        </div>
				        <div id="tab2" className="tab">
				           <div className="row">
				            	<div className="slick-multiItem">
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item7.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item8.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            	</div>
				            </div>
				        </div>
				        <div id="tab3" className="tab">
				        	<div className="row">
				            	<div className="slick-multiItem">
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item1.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item2.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item4.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            	</div>
				            </div>
			       	 	</div>
			       	 	<div id="tab4" className="tab">
				        	<div className="row">
				            	<div className="slick-multiItem">
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item7.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item8.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284" />
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            	</div>
				            </div>
			       	 	</div>
				    </div>
				</div>
    </Fragment>
  )
}
export default TVMovieBlock