import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchPerson, fetchFilms } from "../../api";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Panel = styled.div`
	display: flex;
	flex-direction: column;
	border-style: solid;
	align-items: align-left;
	width: 200px;
	height: 200px;
	padding: 5px;
`;

// const transformResponse = ( { result: { uid, properties: { name, height, mass, } } } ) => {
// 	return {
// 		id: uid,
// 		name,
// 		height,
// 		weight: mass
// 	}
// }

export default function Details( { match: { params: { id } } } ) {
	const [ person, setPerson ] = useState( { name: "N/A", height: "N/A", mass: "N/A" } );
	// const [ films, setFilms ] = useState( {} );
	useEffect( () => {
		fetchPerson( id ).then( ( { result: { properties } } ) => setPerson( properties ) );
		// TODO: films not part of the api for people. but docs show it to be there?
		// fetchFilms( id ).then( a => console.log( "a:" ) );
	}, [] );
	return (
		<Container>
			<Panel>
				<label>{ `Name:\t${ person.name }` }</label>
				<label>{ `Height:\t${ person.height }` }</label>
				<label>{ `Mass:\t${ person.mass }` }</label>
			</Panel>
		</Container>
	);
}