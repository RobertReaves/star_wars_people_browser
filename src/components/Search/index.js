import React, { useState } from "react";
import styled from "styled-components";
import { searchPeople } from "../../api";
import {
	Link
  } from "react-router-dom";

const List = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: cener;
`;

const Item = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export default function Search( { value = "" } ) {
	const [ text, setText ] = useState( value );
	const [ people, setPeople ] = useState( null );
	const handleSubmit = e => {
		e.preventDefault();
		searchPeople( text )
			.then( res => setPeople( res && res.message === "ok" ? res.results : null ) );
	}	
	return (
		<form onSubmit={ handleSubmit }>
			<h2>{ "Star Wars People Browser" } </h2>
			<input type="text" value={ text } onChange={ e => setText( e.target.value ) } />
			<input type="submit" value="Search" />
			{ people ?
				<List>
					{ people.map( ( { properties: { name }, uid } ) => {
						return <Link key={ uid } to={ `/details/${uid}` }>{ name }</Link>
					} ) }
				</List> : null }
		</form>
	)
}