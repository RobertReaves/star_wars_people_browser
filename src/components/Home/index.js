import React from "react";
import styled, { css } from "styled-components";
import Search from "../Search";

const HomeRoot = styled.div`
	text-align: center;
`;

const SearchContainer = styled( Search )`
	display: flex;
	align-items: center;
	justify-content: center;
`


export default function Home() {
	return (
		<HomeRoot>
			<SearchContainer />
		</HomeRoot>
	)
}