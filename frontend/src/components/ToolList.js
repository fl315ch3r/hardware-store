import React from 'react';
import Tool from './Tool';

const ToolList = ({tools}) =>{
	const toolComponent = tools.map((tool, i)=>{
		return <Tool key={i} id={tools[i].id} mark={tools[i].mark} imgurl={tools[i].imgurl} description={tools[i].description} />
	}) 
	return (
		<div>
			{toolComponent}
		</div>
	)
}

export default ToolList;