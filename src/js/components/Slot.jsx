import React, {useState,useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Slot = (props) => {

	let output = (props.pause)? "bg-dark text-danger fs-1 m-3 p-3 rounded-1":"bg-dark text-light fs-1 m-3 p-3 rounded-1";

	return (
		<div className={output}>
            {(props.output ==="clock")?(<i className="bi bi-stopwatch"></i>):props.output}
		</div>
	);
};

export default Slot;