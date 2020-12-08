import React from "react";

export default function Details( { name, height, mass: weight, films } ) {
	console.log( name, height, weight, films );
	return (
		<div>Details</div>
	);
}