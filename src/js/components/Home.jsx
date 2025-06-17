import React, { useState, useEffect } from "react";
import Slot from "./Slot.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	let countArray = ("00000" + props.count.toString()) // Example: (props.count = 1234) "000001234"
		.split("") // [0,0,0,0,0,1,2,3,4]
		.reverse() // [4,3,2,1,0,0,0,0,0]
		.slice(0, props.digits) // (props.digits = 6) [4,3,2,1,0,0]
		.reverse(); // [0,0,1,2,3,4]
	// let countArray = props.count.toString().split("");
	// let difference = props.digits - countArray.length;
	// for (let i = 0; i < difference; i++) {
	// 	countArray.unshift("0");
	// }
	// console.log(countArray);
	let renderList = countArray.map((element, index) => (<Slot output={element} pause={props.pause} key={index + 1} />));
	renderList.unshift((<Slot output="clock" pause={props.pause} key={0} />));
	// console.log(renderList);
	
	return (
		<div className="d-flex justify-content-center">
			{renderList}
		</div>

	);
};

export default Home;