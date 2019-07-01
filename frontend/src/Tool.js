import React from 'react';
import './Tool.css';

const Tool = ({id, imgurl, mark, description}) =>{
	return(
		<div className='tc bg-light-grey dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='tool' src={imgurl} />
			<div>
				<h2>{mark}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default Tool;
