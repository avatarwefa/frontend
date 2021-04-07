import React, { Fragment } from 'react'
import NewAndHot from '../NewAndHot'
import TopIMDB from '../TopIMDB'

interface Item {
}
interface Props {
}
const TheaterMovieBlock: React.FunctionComponent<Props> = () => {
	return (
		<Fragment>
			<div className="title-hd">
				<h2> phim hot </h2>
			</div>
			<div className="tabs" style={{marginTop:'-40px'}}>
				<div className="tab-content">
					<div className="tab active">
						<div className="row" style={{marginLeft:'0px'}}>
							<NewAndHot/>
						</div>
					</div>
				</div>
			</div>
			<div className="title-hd">
				<h2> phim được đánh giá cao </h2>
			</div>
			<div className="tabs" style={{marginTop:'-40px'}}>
				<div className="tab-content">
					<div className="tab active">
						<div className="row" style={{marginLeft:'0px'}}>
							<TopIMDB/>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
export default TheaterMovieBlock